"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { QUESTIONS, computeProfile } from "@/lib/quiz";
import { track } from "@/lib/pixel";

function readAnswers(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const out: Record<string, string> = {};
  for (const q of QUESTIONS) {
    const v = window.sessionStorage.getItem(q.id);
    if (v) out[q.id] = v;
  }
  return out;
}

export default function QuizResultPage() {
  const answers = useMemo(() => readAnswers(), []);
  const profile = useMemo(() => computeProfile(answers), [answers]);

  useEffect(() => {
    // Evento Lead (finalização do quiz) -> núcleo de otimização do Ads
    track("Lead", {
      content_name: "Quiz Polilaminina - Finalizado",
      profile,
    });
  }, [profile]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Seu Perfil: {profile}</h1>

      <p className="mt-4 text-neutral-700">
        Com base nas suas respostas, você demonstra interesse real em entender o tema com
        contexto científico e leitura crítica.
      </p>

      <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-700">
        <li>Metodologia e limitações importam mais do que “recortes” virais.</li>
        <li>Um material estruturado reduz ruído e acelera clareza técnica.</li>
        <li>Você ganha consistência na interpretação do que é evidência vs hipótese.</li>
      </ul>

      <div className="mt-8">
        <Link
          href="/oferta"
          className="inline-flex items-center rounded-xl border border-neutral-900 px-5 py-3 text-sm font-medium"
        >
          Acessar o Guia Científico Completo
        </Link>
      </div>

      <p className="mt-5 text-xs text-neutral-500">
        Conteúdo educacional. Sem promessas terapêuticas.
      </p>
    </main>
  );
}