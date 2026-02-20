"use client";

import { QUESTIONS } from "@/lib/quiz";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function storage() {
  if (typeof window === "undefined") return null;
  return window.sessionStorage;
}

export default function QuizStepPage() {
  const params = useParams<{ step: string }>();
  const router = useRouter();

  const step = Number(params.step);
  const idx = step - 1;

  const question = QUESTIONS[idx];
  const total = QUESTIONS.length;

  const [selected, setSelected] = useState<string>("");

  const progress = useMemo(() => {
    const p = Math.round((step / total) * 100);
    return Number.isFinite(p) ? p : 0;
  }, [step, total]);

  useEffect(() => {
    if (!question) return;
    const saved = storage()?.getItem(question.id);
    if (saved) setSelected(saved);
  }, [question]);

  if (!question) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-xl font-semibold">Etapa inválida</h1>
      </main>
    );
  }

  function goBack() {
    if (step <= 1) router.push("/quiz");
    else router.push(`/quiz/${step - 1}`);
  }

  function goNext() {
    if (!selected) return;
    storage()?.setItem(question.id, selected);

    if (step < total) router.push(`/quiz/${step + 1}`);
    else router.push("/quiz/resultado");
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-xs text-neutral-500">
        Progresso: {progress}% • Etapa {step} de {total}
      </div>

      <h1 className="mt-3 text-2xl font-semibold leading-snug">{question.title}</h1>
      <p className="mt-3 text-neutral-700">{question.subtitle}</p>

      <div className="mt-6 grid gap-3">
        {question.options.map((opt) => (
          <label
            key={opt.id}
            className={`cursor-pointer rounded-2xl border px-4 py-3 transition ${
              selected === opt.id ? "border-neutral-900 bg-neutral-50" : "border-neutral-200"
            }`}
          >
            <input
              type="radio"
              name={question.id}
              value={opt.id}
              checked={selected === opt.id}
              onChange={() => setSelected(opt.id)}
              className="mr-3 align-middle"
            />
            <span className="align-middle">{opt.label}</span>
          </label>
        ))}
      </div>

      <div className="mt-7 flex gap-3">
        <button
          onClick={goBack}
          className="rounded-xl border border-neutral-200 px-4 py-2 text-sm"
        >
          Voltar
        </button>

        <button
          onClick={goNext}
          disabled={!selected}
          className={`rounded-xl border px-4 py-2 text-sm ${
            selected
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-200 bg-neutral-200 text-neutral-500"
          }`}
        >
          Avançar
        </button>
      </div>
    </main>
  );
}