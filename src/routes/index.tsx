import { createFileRoute } from "@tanstack/react-router";
import { Mail, Users, ArrowUpRight, Leaf, Heart, BookOpen } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/BrandIcons";
// Imagens servidas de public/images para funcionar em qualquer hospedagem (Vercel, Lovable...)
const logo = { url: "/images/logo_centro_renovar.svg" };
const fotoConsultorio = { url: "/images/ariane_consultorio.jpg" };
const fotoMaca = { url: "/images/ariane_maca.jpg" };
const fotoRetrato = { url: "/images/ariane_retrato.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ariane Conceição Evaristo — Saúde Integral Consciente" },
      {
        name: "description",
        content:
          "Fisioterapia integrativa, terapia integrativa e cursos de saúde integral com Ariane Conceição Evaristo. Prevenir, cuidar, integrar.",
      },
      { property: "og:title", content: "Ariane Conceição Evaristo — Saúde Integral Consciente" },
      { property: "og:description", content: "Corpo, movimento e existência. Cursos, atendimentos e o Círculo AXIS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS = "https://wa.me/5549999238040?text=" + encodeURIComponent("Olá Ariane! Vim pelo site e gostaria de mais informações.");
const INSTA = "https://www.instagram.com/aryaneevaristho/";
const EMAIL = "mailto:aryane.saudeintegral@gmail.com";
const AXIS = "https://chat.whatsapp.com/Hy90Jr5yO8Q0BO6XNBg38Z?s=cl&p=a&iam=2";

const contatos = [
  { href: WHATS, icon: WhatsAppIcon, brand: true, label: "WhatsApp", value: "(49) 9.9923-8040" },
  { href: INSTA, icon: InstagramIcon, brand: true, label: "Instagram", value: "@aryaneevaristho" },
  { href: EMAIL, icon: Mail, brand: false, label: "E-mail", value: "aryane.saudeintegral@gmail.com" },
];

const frentes = [
  {
    letra: "A",
    icon: Leaf,
    titulo: "Fisioterapia Integrativa",
    sub: "Frente corporal e funcional",
    texto: "Funcionalidade, movimento, prevenção e saúde corporal.",
    itens: [
      "Saúde musculoesquelética e movimento",
      "Saúde metabólica e fisiológica",
      "Saúde tegumentar e linfática",
      "Recursos integrativos e práticas complementares",
    ],
  },
  {
    letra: "B",
    icon: Heart,
    titulo: "Terapia Integrativa",
    sub: "Frente emocional e existencial",
    texto: "Emoções, autoconhecimento e desenvolvimento humano.",
    itens: ["Psicoterapia", "Numerologia"],
  },
  {
    letra: "C",
    icon: BookOpen,
    titulo: "Educação em Saúde Integral",
    sub: "Conhecimento que transforma",
    texto: "Conteúdos e vivências para cuidar de si com consciência.",
    itens: ["Palestras e programas educativos", "Workshops e cursos", "Meditações e práticas de autocuidado", "Produção autoral e conteúdos"],
  },
];

const cursos = [
  {
    nome: "Harmonia da Mente",
    texto: "Um caminho para acalmar pensamentos, ganhar clareza e cultivar presença no dia a dia.",
    href: "https://pay.kiwify.com.br/kUgqFeR",
  },
  {
    nome: "Harmonia das Emoções",
    texto: "Aprenda a reconhecer, acolher e integrar suas emoções com leveza e profundidade.",
    href: "https://pay.kiwify.com.br/c8pDEqi",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Topo */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo.url} alt="Centro Renovar" className="h-10 w-auto" />
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#atuacao" className="hover:text-primary">Atuação</a>
            <a href="#cursos" className="hover:text-primary">Cursos</a>
            <a href="#axis" className="hover:text-primary">Círculo AXIS</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={INSTA} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full p-1 hover:bg-secondary">
              <InstagramIcon className="h-8 w-8" />
            </a>
            <a href={WHATS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-1.5 pr-4 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <WhatsAppIcon className="h-6 w-6" /> <span className="hidden sm:inline">Agendar</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Saúde Integral Consciente</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] text-deep md:text-7xl">
              Ariane Conceição <em className="text-primary">Evaristo</em>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Fisioterapeuta integrativa e terapeuta, Mestre em Ambiente e Saúde. Cuidado que integra corpo, movimento e existência.
            </p>
            <p className="mt-6 font-display text-2xl tracking-wide text-deep">Prevenir · Cuidar · Integrar</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contatos.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:border-primary">
                  <c.icon className={c.brand ? "h-8 w-8 shrink-0" : "h-8 w-8 shrink-0 text-primary"} />
                  <span className="text-sm font-semibold">{c.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-brand opacity-30" />
            <img src={fotoRetrato.url} alt="Ariane Conceição Evaristo sorrindo" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          <img src={fotoConsultorio.url} alt="Ariane em seu consultório" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
          <div>
            <h2 className="text-4xl font-semibold text-deep md:text-5xl">Corpo · Movimento · Existência</h2>
            <p className="mt-4 text-muted-foreground">
              Um olhar completo para a saúde: do alívio da dor à busca de sentido, cada dimensão se conecta para que você encontre seu eixo.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Corpo", i: "funcionalidade, dor, postura, vitalidade, prevenção" },
                { t: "Movimento", i: "metabolismo, consciência, percepção, emoções, comportamento" },
                { t: "Existência", i: "sentido de vida, relações, autoconhecimento, qualidade de vida" },
              ].map((p) => (
                <div key={p.t} className="rounded-2xl bg-secondary p-5">
                  <h3 className="text-2xl font-semibold text-primary">{p.t}</h3>
                  <p className="mt-2 text-sm text-secondary-foreground">{p.i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atuação */}
      <section id="atuacao" className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-4xl font-semibold text-deep md:text-5xl">Áreas de atuação</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {frentes.map((f) => (
              <article key={f.letra} className="relative rounded-3xl bg-card p-7 shadow-soft">
                <span className="absolute right-6 top-4 font-display text-6xl text-leaf">{f.letra}</span>
                <f.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-3xl font-semibold text-deep">{f.titulo}</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">{f.sub}</p>
                <p className="mt-3 text-muted-foreground">{f.texto}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {f.itens.map((i) => (
                    <li key={i} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <img src={fotoMaca.url} alt="Ariane em sala de atendimento" className="aspect-[3/4] w-full rounded-[2rem] object-cover shadow-soft" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Cursos online</p>
            <h2 className="mt-3 text-4xl font-semibold text-deep md:text-5xl">Cuide de você, no seu ritmo</h2>
            <div className="mt-8 space-y-5">
              {cursos.map((c) => (
                <a key={c.nome} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="group block rounded-3xl border border-border bg-card p-7 transition hover:border-primary hover:shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-semibold text-deep">Curso {c.nome}</h3>
                      <p className="mt-2 text-muted-foreground">{c.texto}</p>
                    </div>
                    <ArrowUpRight className="h-7 w-7 shrink-0 text-primary transition group-hover:rotate-45" />
                  </div>
                  <span className="mt-5 inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Quero me inscrever</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Círculo AXIS */}
      <section id="axis" className="bg-deep py-20 text-deep-foreground">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">Grupo GRATUITO · Início 09/11</span>
          <h2 className="mt-5 text-5xl font-semibold md:text-6xl">🌿 Círculo AXIS</h2>
          <p className="mt-3 font-display text-2xl italic text-leaf">Regeneração, integração e consciência.</p>
          <p className="mt-6 text-lg opacity-90">Troca de ideias sobre saúde integral de um jeito profundo e leve. Todo mês, um tema novo!</p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {[
              ["🍵", "Dicas de chás e hábitos"],
              ["📚", "Estudos e livros"],
              ["🎯", "Desafios práticos: sono, alimentação, inteligência emocional, rotina e mais"],
              ["💬", "Reunião online todo final de mês para conversas e dúvidas sobre o tema"],
            ].map(([e, t]) => (
              <div key={t} className="flex gap-3 rounded-2xl border border-deep-foreground/15 p-5">
                <span className="text-2xl">{e}</span><span>{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-leaf">Compreender o todo para encontrar o eixo</p>
          <a href={AXIS} target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-soft transition hover:scale-105">
            <Users className="h-5 w-5" /> Entrar no grupo do WhatsApp
          </a>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-4xl font-semibold text-deep md:text-5xl">Vamos conversar?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {contatos.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-3xl bg-secondary p-8 text-center transition hover:-translate-y-1 hover:shadow-soft">
              {c.brand ? <c.icon className="h-14 w-14" /> : <span className="rounded-full bg-primary p-4 text-primary-foreground"><c.icon className="h-6 w-6" /></span>}
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</span>
              <span className="break-all font-semibold text-deep">{c.value}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <img src={logo.url} alt="Centro Renovar" className="mx-auto mb-3 h-12 w-auto" />
        © {new Date().getFullYear()} Ariane Conceição Evaristo · Prevenir · Cuidar · Integrar
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a href={WHATS} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full shadow-soft transition hover:scale-110">
        <WhatsAppIcon className="h-16 w-16" />
      </a>
    </div>
  );
}
