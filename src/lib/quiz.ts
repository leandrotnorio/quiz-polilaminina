export type QuizOption = { id: string; label: string };
export type QuizQuestion = {
  id: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
};

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    title: "Antes de falarmos sobre polilaminina, você entende o papel da matriz extracelular?",
    subtitle:
      "A matriz extracelular é amplamente estudada e influencia organização e comunicação celular.",
    options: [
      { id: "a", label: "Nunca ouvi falar sobre isso" },
      { id: "b", label: "Já ouvi o termo, mas não sei explicar" },
      { id: "c", label: "Conheço o conceito básico" },
      { id: "d", label: "Tenho conhecimento técnico sobre o tema" },
    ],
  },
  {
    id: "q2",
    title: "Você sabe como a ciência realmente investiga compostos biológicos?",
    subtitle:
      "Modelos experimentais, análises bioquímicas e validação metodológica são a base do processo.",
    options: [
      { id: "a", label: "Nunca parei para pensar nisso" },
      { id: "b", label: "Sei que existem testes laboratoriais" },
      { id: "c", label: "Conheço o que são estudos experimentais" },
      { id: "d", label: "Entendo metodologia científica" },
    ],
  },
  {
    id: "q3",
    title: "O que despertou seu interesse em pesquisar polilaminina?",
    subtitle:
      "Sua motivação orienta o nível de profundidade e o formato ideal de aprendizado.",
    options: [
      { id: "a", label: "Curiosidade científica" },
      { id: "b", label: "Interesse em biotecnologia" },
      { id: "c", label: "Interesse em pesquisa biomédica" },
      { id: "d", label: "Estudo acadêmico" },
    ],
  },
  {
    id: "q4",
    title: "Você sabe diferenciar hipótese científica de aplicação clínica?",
    subtitle:
      "Ciência responsável separa evidência experimental de conclusões clínicas e interpretações.",
    options: [
      { id: "a", label: "Não sei a diferença" },
      { id: "b", label: "Tenho uma noção superficial" },
      { id: "c", label: "Sei diferenciar" },
      { id: "d", label: "Compreendo claramente as etapas" },
    ],
  },
  {
    id: "q5",
    title: "Você acredita que muitos conteúdos sobre bioativos circulam sem contexto científico suficiente?",
    subtitle:
      "Boa divulgação científica exige cautela, contexto e clareza sobre limitações metodológicas.",
    options: [
      { id: "a", label: "Sim, com frequência" },
      { id: "b", label: "Talvez, depende da fonte" },
      { id: "c", label: "Nunca pensei sobre isso" },
      { id: "d", label: "Acredito que a maioria é confiável" },
    ],
  },
];

export function computeProfile(answers: Record<string, string>) {
  // score por opção: a=0 b=1 c=2 d=3
  const score = Object.values(answers).reduce((acc, opt) => {
    const s = opt === "a" ? 0 : opt === "b" ? 1 : opt === "c" ? 2 : 3;
    return acc + s;
  }, 0);

  if (score <= 4) return "Explorador Científico";
  if (score <= 8) return "Investigador em Formação";
  if (score <= 11) return "Intermediário Analítico";
  return "Perfil Técnico";
}