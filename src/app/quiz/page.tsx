"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { track } from "@/lib/pixel";

export default function QuizEntryPage() {
  useEffect(() => {
    track("ViewContent", { content_name: "Quiz Polilaminina - Entrada" });
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
       <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border border-neutral-200 shadow-sm">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      <h1 className="text-3xl font-semibold leading-tight">
        Você realmente entende o que a ciência já investigou sobre polilaminina?
      </h1>

      <p className="mt-4 text-base text-neutral-700">
        Em menos de 2 minutos, identifique seu perfil e receba uma recomendação educacional,
        com linguagem científica e responsável.
      </p>

      <div className="mt-8">
        <Link href="/quiz/1"
              className="inline-flex items-center justify-center rounded-xl bg-[#0B2D5C] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#09264D] transition duration-200">
              Começar Avaliação Científica
        </Link>
      </div>

      <p className="mt-5 text-xs text-neutral-500">
        Conteúdo educacional. Não substitui orientação profissional.
      </p>
    </main>
  );
}