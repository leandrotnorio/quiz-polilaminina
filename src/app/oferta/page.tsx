"use client";

import { useEffect } from "react";
import { track } from "@/lib/pixel";
import Image from "next/image";

const CHECKOUT_URL = "https://pay.kiwify.com.br/loqdJoT";

export default function OfertaPage() {
  useEffect(() => {
    track("ViewContent", { content_name: "Oferta - Ebook Polilaminina" });
  }, []);

  function handleCheckout() {
    track("InitiateCheckout", { content_name: "Ebook Polilaminina" });
    window.location.href = CHECKOUT_URL;
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">

      {/* HERO */}
      <section className="text-center">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/imagem-seguro.png"
            alt="Regência Neural e Polilaminina"
            fill
            sizes="100vw"
            className="object-cover object-[65%_center] md:object-[65%_90%]"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold leading-tight">
          Guia Científico Completo Sobre Polilaminina
        </h1>

        <p className="mt-6 text-lg text-neutral-700">
          Entenda como a ciência investiga a matriz extracelular,
          como interpretar pesquisas corretamente
          e quais são os limites metodológicos do tema.
        </p>

        <div className="mt-8">
          <button
            onClick={handleCheckout}
            className="cursor-pointer rounded-2xl bg-[#0B2D5C] px-8 py-4 text-white text-lg font-semibold hover:bg-[#09264D] transition"
          >
            Quero Acessar o Guia Agora R$ 39,90
          </button>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">
          O Problema da Informação Fragmentada
        </h2>

        <p className="mt-4 text-neutral-700 leading-relaxed">
          A maior parte do conteúdo disponível na internet apresenta
          recortes isolados, sem explicação metodológica e sem diferenciação
          entre hipótese científica e aplicação clínica.
        </p>

        <p className="mt-4 text-neutral-700 leading-relaxed">
          Isso gera interpretações equivocadas, expectativas irreais
          e debates baseados em informação incompleta.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">
          A Proposta Deste Guia
        </h2>

        <ul className="mt-6 space-y-3 text-neutral-700">
          <li>✔ Fundamentos da matriz extracelular</li>
          <li>✔ Como pesquisas laboratoriais são conduzidas</li>
          <li>✔ Diferença entre evidência experimental e aplicação clínica</li>
          <li>✔ Interpretação responsável de estudos científicos</li>
          <li>✔ Limitações metodológicas que precisam ser consideradas</li>
        </ul>
      </section>

      {/* PARA QUEM É */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">
          Para Quem É Este Material
        </h2>

        <ul className="mt-6 space-y-3 text-neutral-700">
          <li>✔ Estudantes e acadêmicos</li>
          <li>✔ Interessados em biotecnologia</li>
          <li>✔ Pesquisadores iniciantes</li>
          <li>✔ Pessoas que desejam interpretar pesquisas com responsabilidade</li>
          <li>✔ Familiares e interessados em compreender estudos biomédicos</li>
          <li>✔ Pessoas que convivem com desafios neurológicos e desejam entender o que a ciência investiga</li>
        </ul>
      </section>

      {/* NÃO É */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">
          Para Quem Não É
        </h2>

        <ul className="mt-6 space-y-3 text-neutral-700">
          <li>✖ Quem busca promessa de cura</li>
          <li>✖ Quem espera soluções milagrosas</li>
          <li>✖ Quem não valoriza metodologia científica</li>
        </ul>
      </section>

      {/* GARANTIA */}
      <section className="mt-20 text-center border border-neutral-200 rounded-2xl p-10">
        <h2 className="text-2xl font-semibold">
          Garantia de 7 Dias
        </h2>

        <p className="mt-4 text-neutral-700">
          Caso o conteúdo não atenda às suas expectativas,
          você pode solicitar reembolso dentro do prazo legal.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="mt-20 text-center">
        <button
          onClick={handleCheckout}
          className="cursor-pointer rounded-2xl bg-[#0B2D5C]  px-8 py-4 text-white text-lg font-semibold hover:bg-[#09264D] transition"
        >
          Acessar Agora por R$ 39,90
        </button>

        <p className="mt-6 text-sm text-neutral-500">
          Conteúdo educacional. Não substitui orientação médica.
        </p>
      </section>

    </main>
  );
}