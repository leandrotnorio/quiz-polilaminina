"use client";

import { useEffect } from "react";
import { track } from "@/lib/pixel";
import Image from "next/image";
import { BadgeCheck, Microscope, BookOpen, Clock3, CreditCard, CircleCheck, ShieldCheck, Sparkles, Video, Lock, Star, FlaskConical } from "lucide-react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/R9J0af0";



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
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-[#0B2D5C] p-4 shadow-sm sm:p-6 lg:p-10">
          {/* efeitos visuais sutis */}
            <div className="pointer-events-none absolute -top-10 right-0 h-28 w-28 rounded-full bg-blue-50/20 blur-3xl sm:h-40 sm:w-40" />
              <div className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-indigo-100/40 blur-3xl sm:h-36 sm:w-36" />
                <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-blue-900 sm:text-xs">
                    <Sparkles className="h-4 w-4 shrink-0" />
                  <span>Oferta de acesso • condição especial</span>
                </div>

                <div className=" mt-12 flex items-center justify-center text-start gap-2 mb-6">
                        <CircleCheck className="h-12 w-12 text-green-400" strokeWidth={2.2} />
                        <p className="text-xl font-bold text-white">
                        Mais clareza na complexidade da produção biotecnológica
                        </p>
                      </div>
                <div className="flex  items-center justify-center text-start gap-2 mb-6">
                  <CircleCheck className="h-12 w-12 text-green-400" strokeWidth={2.2} />
                    <p className="text-xl text-white">
                    Mais domínio sobre os desafios da resistência a antibióticos
                    </p>
                </div>
                <div className="flex items-center justify-center text-start gap-2 mb-6">
                  <CircleCheck className="h-12 w-12 text-green-400" strokeWidth={2.2} />
                    <p className="text-xl font-bold text-white">
                    Mais visão estratégica sobre terapias gênicas e celulares
                    </p>
                </div>
                <div className="relative w-full h-[340px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/ebook-biotech.png"
                    alt="Guia Biotecnologia"
                    width={1200}
                    height={1600}
                    className="object-cover object-top h-full w-full object-center"
                    priority
                  />
                </div>
          {/* Header */}
          <div className="relative mx-auto max-w-3xl">
            <h2 className="mt-6 text-center text-3xl leading-[1.15] font-semibold text-white sm:text-center sm:text-[1.75rem] md:text-3xl">
              A biotecnologia está <span className="text-green-400">avançando rápido. </span> <br/>A pergunta é: você está <span className="text-yellow-400">avançando</span> ou <span className="text-red-500">ficando para trás?</span>
            </h2>
      
            {/*<p className="mt-4 text-left text-lg leading-relaxed text-white sm:text-center sm:text-base">
              SOP profissional, Go/No-Go, validação inter-dia inter-operador inter-lote, DoE e governança de dados para resultados confiáveis da bancada ao relatório.<strong> Você começa com o guia educacional completo</strong> para organizar o entendimento do tema
              e<strong> consiga entender o conteúdo com mais clareza e profundidade</strong>.
            </p>*/}
          </div>

          
      
          {/* Estrutura da oferta (2 cards) */}
          <div className="relative mt-6 grid grid-cols-1 gap-4 md:mt-8 md:gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Card principal do ebook */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-left sm:p-5 md:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                
      
                <div className="min-w-0 w-full">
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap items-center sm:items-center">
      
                    <span className="text-center w-[170px] rounded border border-green-400 bg-green-50 py-1 text-[20px] font-medium text-green-600 sm:text-xs">
                      Acesso imediato
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

  <div className="group  rounded-xl border border-neutral-300 bg-neutral-50 p-2 m-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4">
    <div className="flex flex-col items-center justify-center text-center gap-3">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
        <BookOpen className="h-12 w-12" strokeWidth={2.2} />
      </div>

      <div>
        <p className="text-2xl font-bold text-blue-900 transition duration-300 group-hover:text-blue-800">
          Ao adquirir este Mapa
        </p>
        <p className="mt-1 text-lg leading-relaxed text-neutral-700">
          Você tem acesso ao Mapa com conteúdo estruturado, objetivo baseado em aplicações na prática e com resultados reais com acesso vitalício.
        </p>
      </div>
    </div>
  </div>

  <div className="group rounded-xl border border-neutral-300 bg-neutral-50 p-2 m-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4">
    <div className="flex flex-col items-center justify-center text-center gap-3">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Microscope className="h-12 w-12" strokeWidth={2.2} />
      </div>

      <div>
        <p className="text-2xl font-bold text-blue-900 transition duration-300 group-hover:text-blue-800">
          Porque adquirir este Mapa
        </p>
        <p className="mt-1 text-lg leading-relaxed text-neutral-700">
          Se você vive repetindo experimento para “dar o mesmo resultado”, este Mapa vai te entregar um sistema prático
          para blindar seus dados: SOP profissional, Go/No-Go, validação inter-dia inter-operador inter-lote, DoE
          e governança de dados para você parar de depender de “dia bom” e começar a gerar evidência reprodutível,
          rastreável e defensável.
        </p>
      </div>
    </div>
  </div>

  <div className="group rounded-xl border border-neutral-300 bg-neutral-50 p-2 m-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:hidden sm:p-4">
    <div className="flex flex-col items-center justify-center text-center gap-3">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
        <FlaskConical className="h-12 w-12" strokeWidth={2.2} />
      </div>

      <div>
        <p className="text-2xl font-bold text-blue-900 transition duration-300 group-hover:text-blue-800">
          Para quem é este guia
        </p>
        <p className="mt-1 text-lg leading-relaxed text-neutral-700">
          Este Mapa é para biotecnólogos e pesquisadores que estão cansados de perder semanas (ou meses)
          porque o experimento não repete, o controle falha, o lote muda, o operador executa diferente
          e a análise “muda tudo”.
        </p>
      </div>
    </div>
  </div>
</div>
      
                  {/* ancoragem de valor */}
                  <div className="mt-5 rounded-2xl border border-neutral-400 bg-gradient-to-r from-[#0B2D5C]/5 to-blue-50 p-4">
                    <p className="text-xl leading-relaxed text-neutral-700">
                      <span className="font-semibold text-neutral-900">Condição atual: </span>
                        em vez de pagar <span className="line-through">R$ 147,00</span>, você garante acesso hoje por:
                    </p>
      
                    <div className="mt-3 flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:items-end sm:gap-3">
                      <p className="text-3xl font-bold leading-none text-[#0B2D5C] sm:text-4xl">
                        R$ 47,00
                      </p>
                      <p className="text-lg text-neutral-600 sm:pb-1">
                       • pagamento único <br/>• sem mensalidade <br/>• acesso vitalício
                      </p>

                      <button
      onClick={handleCheckout}
      className="group w-full sm:w-auto cursor-pointer rounded-2xl bg-[#0B2D5C] px-5 py-3 text-white text-sm font-semibold shadow-md transition hover:bg-[#09264D]"
    >
      <span className="text-2xl inline-flex items-center justify-center gap-2">
        Acessar agora
      </span>
      <span className="mt-0.5 block text-sm font-medium text-white/80">
        Checkout seguro • acesso imediato
      </span>
    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Card da consulta opcional no checkout
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
            */}
          </div>
          

          {/* PROVA SOCIAL — estilo Google Reviews */}
<section className="relative mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm sm:mt-10 sm:p-6">
  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h3 className="text-3xl font-bold text-blue-900 sm:text-lg">
        Avaliações de leitores
      </h3>
    </div>

    <div className="flex items-center justify-center gap-3">
      <div className="text-sm text-neutral-700">
        • 1238 avaliações no Google <span className="font-semibold text-neutral-900">(4,8)</span>
        
      </div>
    </div>
  </div>

  <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
    {/* Review 1 */}
    <article className="rounded-2xl border border-neutral-400 bg-white p-2 m-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D5C] text-lg font-semibold text-white">
          M
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-lg font-semibold text-neutral-900">Marina A.</p>
            <Image
                src="/google1.jpg"
                alt="Google"
                width={15}
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

          <p className="mt-2 text-left text-lg text-center leading-relaxed text-neutral-700">
            “O material é bem organizado e não promete nada fora da realidade. Me ajudou a entender
            o que é SOP e DoE, estudo experimental e aplicação na prática, nunca vi no mercado antes com 16 anos de experiência.”
          </p>
        </div>
      </div>
    </article>

    {/* Review 2 */}
    <article className="rounded-2xl border border-neutral-400 bg-white p-2 m-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D5C] text-lg font-semibold text-white">
          R
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-lg font-semibold text-neutral-900">Rafael S.</p>
              <Image
                src="/google1.jpg"
                alt="Google"
                width={15}
                height={10}
                className="object-contain"
              />
            
          
            <span className="text-xs text-neutral-500">• há 1 semana</span>
          </div>

          <div className="mt-1 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="mt-2 text-left text-lg leading-relaxed text-neutral-700">
            “Bem direto ao ponto. Gostei do jeito que explica termos e coloca limites do que dá pra
            afirmar com segurança. Leitura rápida e clara.”
          </p>
        </div>
      </div>
    </article>

    {/* Review 3 */}
    <article className="rounded-2xl border border-neutral-400 bg-white p-2 m-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D5C] text-lg font-semibold text-white">
          C
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-x-2 gap-y-1">
            <p className="text-lg font-semibold text-neutral-900">Camila</p>
            <Image
                src="/google1.jpg"
                alt="Google"
                width={15}
                height={10}
                className="object-contain"
              />
            <span className="text-xs text-neutral-500">• há 3 semanas</span>
          </div>

          <div className="mt-1 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="mt-2 text-left text-lg leading-relaxed text-neutral-700">
            “Eu precisava de um mapa que organizasse o assunto de forma clara, reduzi muito os custos com está aquisição. Achei a
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
              <div className="min-w-0">
                <h3 className="text-3xl font-bold text-blue-900 sm:text-xl">
                  Benefícios de garantir o acesso hoje
                </h3>
      
                <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                  Acesso imediato ao conteúdo educacional por apenas <strong>R$ 47,00</strong>.
                  <br/>Adquira o Mapa e tenha em mãos um conteúdo criado para quem busca clareza,
                   organização e entendimento real sobre como garantir a reprodutibilidade, qualidade e resultado na bancada e na análise.
                </p>
    
      
              <div className="mt-8 w-full lg:w-auto">
                <div className="mx-auto w-full max-w-md lg:max-w-none">
                  <button
                    onClick={handleCheckout}
                    className="group w-full cursor-pointer rounded-2xl bg-[#0B2D5C] px-5 py-4 text-white shadow-lg transition hover:bg-[#09264D] sm:px-6"
                  >
                    <span className="block text-lg line-through text-white-100">
                      De R$ 147,00
                    </span>
      
                    <span className="mt-1 inline-flex items-center justify-center gap-2 text-2xl font-semibold sm:text-lg">
                      Por R$ 47,00
                    </span>
                  </button>

                  {/* microcopy de confiança */}
                <div className="mt-8 mx-auto max-w-fit grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex flex-col items-center justify-center w-60 gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium">
                    <Clock3 className="h-8 w-8 shrink-0 text-green-400" />
                    <span className="text-green-400 text-lg">Acesso imediato</span>
                  </div>
      
                  <div className="flex flex-col items-center justify-center w-60 gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium">
                    <CreditCard className="h-8 w-8 shrink-0 text-green-400" />
                    <span className="text-green-400 text-lg">Pagamento único</span>
                  </div>
      
                  <div className="flex flex-col items-center justify-center w-60 gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium">
                    <Lock className="h-8 w-8 shrink-0 text-green-400" />
                    <span className="text-green-400 text-lg">Checkout seguro</span>
                  </div>
      
                  <div className="flex flex-col items-center justify-center w-60 gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium">
                    <ShieldCheck className="h-8 w-8 shrink-0 text-green-400" />
                    <span className="text-green-400 text-lg">Garantia de 7 dias</span>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</main>
  );
}
