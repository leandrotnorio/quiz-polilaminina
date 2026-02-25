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
        alt="Guia sobre Polilaminina e matriz extracelular"
        fill
        sizes="100vw"
        className="object-cover object-[65%_center] md:object-[65%_90%]"
        priority
      />
    </div>

    <div className="mt-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900">
      Material educacional • Linguagem acessível • Baseado em interpretação científica responsável
    </div>

    <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
      Entenda o que a ciência realmente investiga sobre Polilaminina
      <span className="block text-[#0B2D5C]">
        sem promessas, sem confusão e sem desinformação
      </span>
    </h1>

    <p className="mt-6 text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
      Um guia direto ao ponto para você compreender os fundamentos, interpretar estudos com mais segurança
      e diferenciar hipótese científica de aplicação clínica — mesmo sem formação técnica avançada.
    </p>

    <div className="mt-6 grid gap-3 text-left max-w-2xl mx-auto text-neutral-800">
      <div className="rounded-xl border border-neutral-200 p-4 bg-white">
        ✅ Entenda os conceitos essenciais sem linguagem complicada
      </div>
      <div className="rounded-xl border border-neutral-200 p-4 bg-white">
        ✅ Evite interpretações equivocadas e expectativas irreais
      </div>
      <div className="rounded-xl border border-neutral-200 p-4 bg-white">
        ✅ Aprenda a analisar informações com mais clareza e responsabilidade
      </div>
    </div>

    <div className="mt-8">
      <button
        onClick={handleCheckout}
        className="cursor-pointer rounded-2xl bg-[#0B2D5C] px-8 py-4 text-white text-lg font-semibold hover:bg-[#09264D] transition shadow-lg"
      >
        <span className="block text-xs uppercase tracking-wide text-white/90">
          Oferta Especial de Hoje
        </span>
        <span className="block text-sm line-through opacity-70">
          De R$ 89,90
        </span>
        <span className="block text-xl font-bold">
          Quero Acessar o Guia Agora por R$ 29,90
        </span>
      </button>

      <p className="mt-3 text-sm text-neutral-600">
        Acesso digital imediato • Pagamento seguro • Garantia de 7 dias
      </p>
    </div>
  </section>

      {/* PROBLEMA */}
      <section className="mt-20">
    <h2 className="text-2xl font-semibold">
      Por que tantas pessoas ficam confusas com esse tema?
    </h2>

    <p className="mt-4 text-neutral-700 leading-relaxed">
      Porque grande parte do conteúdo na internet apresenta apenas recortes isolados:
      trechos de estudos, interpretações incompletas e afirmações sem contexto metodológico.
    </p>

    <p className="mt-4 text-neutral-700 leading-relaxed">
      O resultado é previsível: dúvidas, expectativas irreais, discussões improdutivas
      e dificuldade para separar informação séria de narrativa apelativa.
    </p>

    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
      <p className="font-medium">
        Este guia foi criado justamente para reduzir esse ruído e organizar o entendimento de forma clara.
      </p>
    </div>
  </section>


      {/* SOLUÇÃO */}
      <section className="mt-20">
    <h2 className="text-2xl font-semibold">
      O que você vai aprender neste guia
    </h2>

    <p className="mt-4 text-neutral-700">
      Você terá uma visão estruturada para compreender o tema com mais segurança, sem cair em exageros.
    </p>

    <ul className="mt-6 space-y-3 text-neutral-700">
      <li>✔ Fundamentos da matriz extracelular e conceitos essenciais</li>
      <li>✔ Como estudos laboratoriais costumam ser conduzidos</li>
      <li>✔ Diferença entre evidência experimental e aplicação clínica</li>
      <li>✔ Como interpretar pesquisas com pensamento crítico</li>
      <li>✔ Limitações metodológicas que precisam entrar na análise</li>
      <li>✔ Como identificar sinais de desinformação e promessas infundadas</li>
    </ul>
  </section>

    {/* BENEFÍCIOS PRÁTICOS */}
  <section className="mt-20">
    <h2 className="text-2xl font-semibold">
      O benefício real para você
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-neutral-200 p-5">
        <h3 className="font-semibold text-neutral-900">Mais clareza</h3>
        <p className="mt-2 text-neutral-700">
          Entenda o tema com organização e linguagem acessível, em vez de consumir conteúdo solto.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-5">
        <h3 className="font-semibold text-neutral-900">Mais segurança na interpretação</h3>
        <p className="mt-2 text-neutral-700">
          Aprenda a diferenciar hipótese, experimento e conclusão sem extrapolar o que o estudo não diz.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-5">
        <h3 className="font-semibold text-neutral-900">Menos confusão</h3>
        <p className="mt-2 text-neutral-700">
          Reduza o impacto de conteúdos sensacionalistas e argumentos sem base metodológica.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-5">
        <h3 className="font-semibold text-neutral-900">Conteúdo objetivo</h3>
        <p className="mt-2 text-neutral-700">
          Material pensado para ir direto ao ponto, sem enrolação e sem jargão desnecessário.
        </p>
      </div>
    </div>
  </section>

      {/* PARA QUEM É */}
     <section className="mt-20">
    <h2 className="text-2xl font-semibold">
      Para quem este material é indicado
    </h2>

    <ul className="mt-6 space-y-3 text-neutral-700">
      <li>✔ Estudantes e acadêmicos</li>
      <li>✔ Interessados em biotecnologia e pesquisa biomédica</li>
      <li>✔ Pesquisadores iniciantes</li>
      <li>✔ Familiares e interessados que querem entender o tema com responsabilidade</li>
      <li>✔ Pessoas que convivem com desafios neurológicos e desejam compreender o que a ciência investiga</li>
      <li>✔ Quem busca informação organizada, sem sensacionalismo</li>
    </ul>
  </section>


      {/* PARA QUEM NÃO É */}
  <section className="mt-20">
    <h2 className="text-2xl font-semibold">
      Para quem este guia não é
    </h2>

    <ul className="mt-6 space-y-3 text-neutral-700">
      <li>✖ Quem busca promessa de cura ou resultado garantido</li>
      <li>✖ Quem procura soluções milagrosas</li>
      <li>✖ Quem não tem interesse em interpretação responsável de estudos</li>
    </ul>
  </section>

    {/* QUEBRA DE OBJEÇÕES */}
  <section className="mt-20">
    <h2 className="text-2xl font-semibold text-center">
      “Mas eu não sou da área, vou conseguir entender?”
    </h2>

    <div className="mt-6 rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
      <p className="text-neutral-700 leading-relaxed">
        Sim. O guia foi estruturado para facilitar o entendimento progressivo do tema.
        A proposta não é complicar — é organizar a informação para que você consiga acompanhar com clareza.
      </p>

      <p className="mt-4 text-neutral-700 leading-relaxed">
        Mesmo que você esteja começando agora, o material ajuda a construir uma base de interpretação mais sólida.
      </p>
    </div>
  </section>

  {/* OFERTA / ANCORAGEM */}
  <section className="mt-20 text-center">
    <h2 className="text-2xl font-semibold">
      Oferta de acesso ao guia
    </h2>

    <p className="mt-4 text-neutral-700">
      Em vez de pagar <span className="line-through">R$ 89,90</span>, hoje você pode acessar por:
    </p>

    <div className="mt-4 rounded-2xl border border-[#0B2D5C]/20 bg-[#0B2D5C]/5 p-6 inline-block min-w-[280px]">
      <p className="text-sm uppercase tracking-wide text-neutral-600">Pagamento único</p>
      <p className="text-4xl font-bold text-[#0B2D5C]">R$ 29,90</p>
      <p className="mt-1 text-sm text-neutral-600">Acesso digital imediato</p>
    </div>

    <div className="mt-8">
      <button
        onClick={handleCheckout}
        className="cursor-pointer rounded-2xl bg-[#0B2D5C] px-8 py-4 text-white text-lg font-semibold hover:bg-[#09264D] transition shadow-lg"
      >
        <span className="block text-sm line-through opacity-70">
          De R$ 89,90
        </span>
        <span className="block text-xl font-bold">
          Acessar Agora por R$ 29,90
        </span>
      </button>

      <p className="mt-3 text-sm text-neutral-600">
        Compra segura • Liberação imediata • Sem mensalidade
      </p>
    </div>
  </section>

      {/* GARANTIA */}
      <section className="mt-20 text-center border border-neutral-200 rounded-2xl p-10">
    <h2 className="text-2xl font-semibold">
      Garantia de 7 dias
    </h2>

    <p className="mt-4 text-neutral-700 leading-relaxed">
      Se o conteúdo não atender às suas expectativas, você pode solicitar reembolso
      dentro do prazo legal de garantia.
    </p>
  </section>

      {/* CTA FINAL */}
     <section className="mt-20 text-center">
    <h2 className="text-2xl font-semibold">
      Tome sua decisão com base em informação organizada
    </h2>

    <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
      Se você quer entender melhor o tema, reduzir confusão e analisar conteúdos com mais clareza,
      este guia foi feito para isso.
    </p>

    <button
      onClick={handleCheckout}
      className="mt-8 cursor-pointer rounded-2xl bg-[#0B2D5C] px-8 py-4 text-white text-lg font-semibold hover:bg-[#09264D] transition shadow-lg"
    >
      <span className="block text-sm line-through opacity-70">
        De R$ 89,90
      </span>
      <span className="block text-xl font-bold">
        Quero Acessar Agora por R$ 29,90
      </span>
    </button>

    <p className="mt-6 text-sm text-neutral-500">
      Conteúdo educacional. Não substitui orientação médica, diagnóstico ou tratamento.
    </p>
  </section>
</main>
  );
}