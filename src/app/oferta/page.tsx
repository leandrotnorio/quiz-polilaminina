"use client";

import { useEffect } from "react";
import { track } from "@/lib/pixel";
import Image from "next/image";
import { ArrowRight, BadgeCheck, BookOpen, Clock3, CreditCard, ShieldCheck, Sparkles, Video, Lock, Star } from "lucide-react";

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
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

      {/* HERO */}
      <section className="mt-0 sm:mt-20 md:mt-0 text-center">

        <div className="relative w-full h-[240px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
      <Image
        src="/capa-ebook.png"
    alt="Guia sobre Polilaminina e matriz extracelular"
    width={1200}
    height={1600}
    className="object-cover"
    priority
      />
    </div>

    <div className="mt-6 mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900">
      Material educacional • Linguagem acessível • Baseado em interpretação científica responsável
    </div>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6 lg:p-10">
          {/* efeitos visuais sutis */}
          <div className="pointer-events-none absolute -top-10 right-0 h-28 w-28 rounded-full bg-blue-100/50 blur-3xl sm:h-40 sm:w-40" />
          <div className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-indigo-100/40 blur-3xl sm:h-36 sm:w-36" />
      
          {/* Header */}
          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-blue-900 sm:text-xs">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Oferta de acesso • condição especial</span>
            </div>
      
            <h2 className="mt-4 text-left text-[1.35rem] leading-[1.15] font-semibold text-neutral-900 sm:text-center sm:text-[1.75rem] md:text-3xl">
              Tenha acesso ao guia agora + consulta profissional pelo fisioterapeuta
            </h2>
      
            <p className="mt-4 text-left text-sm leading-relaxed text-neutral-700 sm:text-center sm:text-base">
              Você começa com o <strong>guia educacional completo</strong> para organizar o entendimento do tema
              e<strong> obter consulta fisioterapêutica</strong>.
            </p>
          </div>

          
      
          {/* Estrutura da oferta (2 cards) */}
          <div className="relative mt-6 grid grid-cols-1 gap-4 md:mt-8 md:gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Card principal do ebook */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-left sm:p-5 md:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-[#0B2D5C] sm:h-11 sm:w-11">
                  <BookOpen className="h-5 w-5 shrink-0" />
                </div>
      
                <div className="min-w-0 w-full">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                    <h3 className="text-base font-semibold text-neutral-900 sm:text-lg leading-tight">
                      Guia Científico Completo <span className="hidden sm:inline">(Produto Principal)</span>
                    </h3>
      
                    <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-800 sm:text-xs">
                      Acesso imediato
                    </span>
                  </div>
      
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    Material educacional para compreender fundamentos, interpretar estudos com mais critério
                    e reduzir confusão causada por informações fragmentadas.
                  </p>
      
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 sm:p-4">
                      <p className="text-sm font-medium text-neutral-900">O que você leva</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                        Guia digital com conteúdo estruturado, objetivo e orientado à interpretação responsável.
                      </p>
                    </div>
      
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 sm:p-4">
                      <p className="text-sm font-medium text-neutral-900">Para quem faz sentido</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                        Pessoas e famílias que buscam clareza, contexto e informação organizada.
                      </p>
                    </div>
                  </div>
      
                  {/* ancoragem de valor */}
                  <div className="mt-5 rounded-2xl border border-[#0B2D5C]/15 bg-gradient-to-r from-[#0B2D5C]/5 to-blue-50 p-4">
                    <p className="text-sm leading-relaxed text-neutral-700">
                      <span className="font-semibold text-neutral-900">Condição atual:</span>{" "}
                      em vez de pagar <span className="line-through">R$ 89,90</span>, você garante acesso hoje por:
                    </p>
      
                    <div className="mt-3 flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-end sm:gap-3">
                      <p className="text-3xl font-bold leading-none text-[#0B2D5C] sm:text-4xl">
                        R$ 29,90
                      </p>
                      <p className="text-sm text-neutral-600 sm:pb-1">
                        pagamento único • sem mensalidade
                      </p>

                      <button
      onClick={handleCheckout}
      className="group w-full sm:w-auto cursor-pointer rounded-2xl bg-[#0B2D5C] px-5 py-3 text-white text-sm font-semibold shadow-md transition hover:bg-[#09264D]"
    >
      <span className="inline-flex items-center justify-center gap-2">
        Acessar agora
        <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
      </span>
      <span className="mt-0.5 block text-xs font-medium text-white/80">
        Checkout seguro • acesso imediato
      </span>
    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Card da consulta opcional no checkout */}
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 text-left sm:p-5 md:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-white text-[#0B2D5C] sm:h-11 sm:w-11">
                  <Video className="h-5 w-5 shrink-0" />
                </div>
      
                <div className="min-w-0 w-full">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                    <h3 className="text-base font-semibold text-neutral-900 sm:text-lg leading-tight">
                      Consulta Fisioterapêutica Online (Bônus Premium)
                    </h3>
                  </div>
      
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    Para quem quer encurtar o caminho e ter uma orientação profissional complementar,
                     com foco em clareza, segurança e próximos passos bem definidos.
                  </p>
      
                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0B2D5C]" />
                      <span>Organização das principais dúvidas e queixas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0B2D5C]" />
                      <span>Orientação profissional inicial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0B2D5C]" />
                      <span>Direcionamento com mais segurança para próximos passos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0B2D5C]" />
                      <span>Triagem de sinais de alerta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0B2D5C]" />
                      <span>Ajuste de movimentos e comportamentos do dia a dia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0B2D5C]" />
                      <span>Ajuste de movimentos e comportamentos do dia a dia (posturas e padrões que pioram)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PROVA SOCIAL — estilo Google Reviews */}
<section className="relative mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm sm:mt-10 sm:p-6">
  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">
        Avaliações de leitores
      </h3>
      <p className="mt-1 text-sm text-neutral-600">
        Feedback sobre clareza, organização e linguagem responsável.
      </p>
    </div>

    <div className="flex items-center justify-center gap-3">
      <div className="text-sm text-neutral-700">
        <span className="font-semibold text-neutral-900">4,8</span> • 127 avaliações
      </div>
    </div>
  </div>

  <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
    {/* Review 1 */}
    <article className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D5C] text-sm font-semibold text-white">
          M
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-sm font-semibold text-neutral-900">Marina A.</p>
            <Image
                src="/google.png"
                alt="Google"
                width={50}
                height={10}
                className="object-contain"
              />
            <span className="text-xs text-neutral-500">• há 2 dias</span>
          </div>

          <div className="mt-1 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="mt-2 text-left text-sm text-center leading-relaxed text-neutral-700">
            “O material é bem organizado e não promete nada fora da realidade. Me ajudou a entender
            o que é estudo experimental e o que ainda é hipótese.”
          </p>
        </div>
      </div>
    </article>

    {/* Review 2 */}
    <article className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D5C] text-sm font-semibold text-white">
          R
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-sm font-semibold text-neutral-900">Rafael S.</p>
              <Image
                src="/google.png"
                alt="Google"
                width={50}
                height={10}
                className="object-contain bg-white"
              />
            
          
            <span className="text-xs text-neutral-500">• há 1 semana</span>
          </div>

          <div className="mt-1 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="mt-2 text-left text-sm leading-relaxed text-neutral-700">
            “Bem direto ao ponto. Gostei do jeito que explica termos e coloca limites do que dá pra
            afirmar com segurança. Leitura rápida e clara.”
          </p>
        </div>
      </div>
    </article>

    {/* Review 3 */}
    <article className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D5C] text-sm font-semibold text-white">
          C
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-x-2 gap-y-1">
            <p className="text-sm font-semibold text-neutral-900">Camila</p>
            <Image
                src="/google.png"
                alt="Google"
                width={50}
                height={10}
                className="object-contain"
              />
            <span className="text-xs text-neutral-500 whitespace-nowrap">• há 3 semanas</span>
          </div>

          <div className="mt-1 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="mt-2 text-left text-sm leading-relaxed text-neutral-700">
            “Eu precisava de um guia que organizasse o assunto sem sensacionalismo. Achei a
            linguagem acessível e a estrutura muito bem feita.”
          </p>
        </div>
      </div>
    </article>
  </div>

  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <p className="text-xs text-neutral-500">
      Depoimentos apresentados com finalidade informativa e educacional.
    </p>
  </div>
</section>
      
          {/* CTA premium */}
          <div className="relative mt-6 rounded-2xl border border-neutral-200 bg-white p-4 sm:mt-8 sm:p-5 md:p-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-6">
              <div className="min-w-0 text-left">
                <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">
                  Comece pelo guia e decida com mais clareza
                </h3>
      
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Acesso imediato ao conteúdo educacional por <strong>R$ 29,90</strong>. No checkout, você escolhe
                  se deseja adicionar orientação fisioterapêutica online (opcional).
                </p>
      
                {/* microcopy de confiança */}
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-700">
                    <Clock3 className="h-4 w-4 shrink-0 text-[#0B2D5C]" />
                    <span>Acesso digital imediato</span>
                  </div>
      
                  <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-700">
                    <CreditCard className="h-4 w-4 shrink-0 text-[#0B2D5C]" />
                    <span>Pagamento único</span>
                  </div>
      
                  <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-700">
                    <Lock className="h-4 w-4 shrink-0 text-[#0B2D5C]" />
                    <span>Checkout seguro</span>
                  </div>
      
                  <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-700">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-[#0B2D5C]" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
              </div>
      
              <div className="w-full lg:w-auto">
                <div className="mx-auto w-full max-w-md lg:max-w-none">
                  <button
                    onClick={handleCheckout}
                    className="group w-full cursor-pointer rounded-2xl bg-[#0B2D5C] px-5 py-4 text-white shadow-lg transition hover:bg-[#09264D] sm:px-6"
                  >
                    <span className="block text-xs uppercase tracking-wide text-white/85">
                      Condição especial de hoje
                    </span>
      
                    <span className="block text-sm line-through opacity-70">
                      De R$ 89,90
                    </span>
      
                    <span className="mt-1 inline-flex items-center justify-center gap-2 text-base font-semibold sm:text-lg">
                      Acessar por R$ 29,90
                      <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</main>
  );
}
