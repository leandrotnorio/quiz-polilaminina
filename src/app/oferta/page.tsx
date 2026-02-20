"use client";

import { useEffect } from "react";
import { track } from "@/lib/pixel";

const CHECKOUT_URL = "https://pay.kiwify.com.br/XsgSgRj";

export default function OfertaPage() {
  useEffect(() => {
    track("ViewContent", { content_name: "Oferta - Ebook Polilaminina" });
  }, []);

  function handleCheckout() {
    track("InitiateCheckout", { content_name: "Ebook Polilaminina" });
    window.location.href = CHECKOUT_URL;
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold leading-tight">
        Guia Científico: Polilaminina e Matriz Extracelular
      </h1>
      <p className="mt-4 text-neutral-700">
        Material educacional estruturado para interpretar pesquisas com clareza: fundamentos,
        metodologia e limites do que os estudos sustentam.
      </p>

      <div className="mt-8">
        <button
          onClick={handleCheckout}
          className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white"
        >
          Comprar Agora
        </button>
      </div>

      <p className="mt-5 text-xs text-neutral-500">
        Conteúdo educacional. Sem promessas terapêuticas.
      </p>
    </main>
  );
}