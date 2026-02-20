"use client";

import Link from "next/link";
import { useEffect } from "react";
import { track } from "@/lib/pixel";

export default function QuizEntryPage() {
  useEffect(() => {
    track("ViewContent", { content_name: "Quiz Polilaminina - Entrada" });
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold leading-tight">
        Você realmente entende o que a ciência já investigou sobre polilaminina?
      </h1>

      <p className="mt-4 text-base text-neutral-700">
        Em menos de 2 minutos, identifique seu perfil e receba uma recomendação educacional,
        com linguagem científica e responsável.
      </p>

      <div className="mt-8">
        <Link
          href="/quiz/1"
          className="inline-flex items-center rounded-xl border border-neutral-900 px-5 py-3 text-sm font-medium"
        >
          Começar Avaliação Científica
        </Link>
      </div>

      <p className="mt-5 text-xs text-neutral-500">
        Conteúdo educacional. Não substitui orientação profissional.
      </p>
    </main>
  );
}