"use client";

import { useEffect } from "react";
import { track } from "@/lib/pixel";

export default function ObrigadoPage() {
  useEffect(() => {
    track("Purchase", {
      currency: "BRL",
      value: 39.90, // altere para o valor real
      content_name: "Ebook Polilaminina",
    });
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl text-[#0B2D5C] font-semibold">
        Compra Confirmada com Sucesso
      </h1>

      <p className="mt-4 text-neutral-700">
        Seu acesso ao Guia Científico foi liberado.
      </p>

      <div className="mt-8 rounded-2xl border border-neutral-200 p-6 text-left">
        <h2 className="text-lg font-semibold">Próximos Passos</h2>

        <ul className="mt-4 space-y-2 text-neutral-700">
          <li>✔ Verifique seu e-mail para instruções de acesso</li>
          <li>✔ Caso não encontre, confira a caixa de spam</li>
          <li>✔ O acesso é individual e intransferível</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="text-sm text-neutral-500">
          Material educacional com foco em interpretação científica responsável.
        </p>
      </div>
    </main>
  );
}