import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail, Phone, MapPin, HeartHandshake, Accessibility, Brain, Palmtree,
  Facebook, Instagram, Share2, CheckCircle2,
  Vote, ChevronDown, Users, Shield, GraduationCap, Bus, Menu, X,
  ArrowRight, Sparkles, Star, Target
} from "lucide-react";
import fotoCandidata from "@/assets/foto-candidata.png";
import fotoCandidata2 from "@/assets/foto-candidata-2.png";
import fotoCorporal from "@/assets/foto-corporal-cilmara.png";
import bannerCilmara from "@/assets/banner-cilmara-v2.png";
import logoCilmara from "@/assets/logo-cilmara.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const candidato = {
  nome: "Cilmara", sobrenome: "Bonfim",
  nomeCompleto: "Cilmara Teixeira Bonfim Leal",
  numero: "70700", cargo: "Deputada Estadual",
  partido: "AVANTE", estado: "Pará", municipio: "Parauapebas",
  foto: fotoCandidata, foto2: fotoCandidata2, fotoCorporal: fotoCorporal,
  banner: bannerCilmara,
  telefone: "(94) 99999-9999",
  email: "contato@cilmarabonfim.com.br",
  cnpj: "68.462.229/0001-81",
};

const redeSocial = {
  instagram: "@cilmarabonfim",
  facebook: "Cilmara Bonfim",
};

const eixos = [
  {
    id: "eixo-1", icon: Accessibility, cor: "blue",
    titulo: "Inclusão e acessibilidade como direito",
    propostas: [
      { num: 5, titulo: "Ciptea com validade estadual", desc: "Carteira de Identificação da Pessoa com TEA com validade estadual e atendimento prioritário real." },
      { num: 8, titulo: "Central de Libras 24h", desc: "Central de Libras 24 horas do Pará para atendimento remoto em língua brasileira de sinais." },
      { num: 9, titulo: "Escola Bilíngue para Surdos", desc: "Escola Bilíngue para Surdos em Belém, com polos em Santarém e Marabá." },
      { num: 10, titulo: "Intérpretes de Libras", desc: "Intérpretes de Libras em hospitais regionais, DETRAN, SEFA e escolas estaduais." },
      { num: 20, titulo: "Transporte acessível", desc: "Transporte estadual acessível com cadeirantes, piso tátil e atendimento em Libras." },
    ]
  },
  {
    id: "eixo-2", icon: Brain, cor: "pink",
    titulo: "TEA, mães atípicas e saúde mental",
    propostas: [
      { num: 6, titulo: "Centros TEA Pará", desc: "Centros especializados em TEA em Belém, Santarém, Marabá e Paragominas." },
      { num: 7, titulo: "Mediador Escolar Inclusivo", desc: "Mediador Escolar Inclusivo para acompanhar alunos com deficiência nas escolas." },
      { num: 14, titulo: "Residências Inclusivas", desc: "Residências Inclusivas e Oficinas de Trabalho para autonomia de PcD." },
      { num: 15, titulo: "Continuidade de medicamentos", desc: "Continuidade de medicamentos e simplificação de laudos para PcD." },
    ]
  },
  {
    id: "eixo-3", icon: HeartHandshake, cor: "orange",
    titulo: "Autonomia e cuidado de mulheres e idosos",
    propostas: [
      { num: 1, titulo: "Lei Maria da Penha nos Municípios", desc: "DEAMs e Salas Lilás 24h em todos os municípios paraenses." },
      { num: 2, titulo: "Auxílio Recomeço Pará", desc: "Aluguel social + qualificação profissional para mulheres em situação de violência." },
      { num: 3, titulo: "Patrulha Maria da Penha Ampliada", desc: "Patrulha Maria da Penha Estadual Ampliada com cobertura rural." },
      { num: 4, titulo: "Absorvente nas Escolas", desc: "Programa de absorvente nas escolas e dignidade menstrual." },
      { num: 11, titulo: "Hospital do Idoso", desc: "Hospital do Idoso e Caravana da Longevidade no interior." },
      { num: 12, titulo: "Proteção contra abandono", desc: "Proteção contra abandono e violência financeira de idosos." },
      { num: 13, titulo: "UNATI Pará", desc: "Cursos profissionalizantes gratuitos para pessoas 60+ no estado." },
    ]
  },
  {
    id: "eixo-4", icon: Palmtree, cor: "blue",
    titulo: "Mineração responsável e desenvolvimento",
    propostas: [
      { num: 16, titulo: "Fundo da Mineração", desc: "Fundo da Mineração com participação social e transparência." },
      { num: 17, titulo: "Contrapartida para PcD", desc: "Contrapartida da mineração para políticas de PcD nos municípios impactados." },
      { num: 18, titulo: "Rastreabilidade de rejeitos", desc: "Rastreabilidade e fiscalização de rejeitos de mineração." },
      { num: 19, titulo: "Selo Empresa Inclusiva", desc: "Selo Empresa Inclusiva do Pará para empresas que contratam PcD." },
    ]
  },
];

const corTema = (cor: string) => {
  if (cor === "blue") return { bg: "bg-blue-flat", soft: "bg-blue-soft", text: "text-blue-brand", bar: "bg-blue-flat", num: "bg-blue-flat" };
  if (cor === "pink") return { bg: "bg-pink-flat", soft: "bg-pink-soft", text: "text-pink-brand", bar: "bg-pink-flat", num: "bg-pink-flat" };
  return { bg: "bg-orange-flat", soft: "bg-orange-soft", text: "text-orange-brand", bar: "bg-orange-flat", num: "bg-orange-flat" };
};

const faqItems = [
  { pergunta: "Quem é Cilmara Bonfim?", resposta: "Mulher surda, mãe, liderança comunitária de Parauapebas. Agente administrativa, coordenadora da COMPED (Portaria DC492/25). Candidata a Deputada Estadual pelo AVANTE — 70700." },
  { pergunta: "A candidata é surda?", resposta: "Sim. A campanha fala Libras. Cilmara é usuária de Libras desde a infância." },
  { pergunta: "O que é a COMPED?", resposta: "Coordenadoria Municipal da Pessoa com Deficiência de Parauapebas. Cilmara assumiu a coordenação em 2025, pela Portaria DC492/25." },
  { pergunta: "Qual é o partido e o número?", resposta: "AVANTE — 70700. Pedido de registro no TSE em 31/08/2026." },
  { pergunta: "Quais propostas para PcD?", resposta: "Ciptea estadual, Central de Libras 24h, Escola Bilíngue, Residências Inclusivas, continuidade de medicamentos, intérpretes em serviços públicos e transporte acessível." },
  { pergunta: "Como posso ajudar?", resposta: "Você pode apoiar a campanha, ser voluntário ou ajudar a divulgar. Preencha o formulário na seção de contato." },
  { pergunta: "Onde pegar material para divulgar?", resposta: "Preencha o formulário 'Quero material para divulgar' na seção de contato." },
  { pergunta: "Como vou votar?", resposta: "Vote 70700 — Deputada Estadual — Pará — AVANTE. Na urna: digite 70700 e confirme." },
];

const entregasCOMPED = [
  { mes: "Mar 2025", titulo: "Entrega de 28 cadeiras de rodas adaptáveis no CER II", local: "Parauapebas" },
  { mes: "Abr 2025", titulo: "Semana do Autismo com palestras em escolas, UBS e Câmara", local: "Parauapebas" },
  { mes: "Mai 2025", titulo: "Trilha Inclusiva Quarubarana na Floresta Nacional de Carajás", local: "Parauapebas" },
  { mes: "2025", titulo: "Operação Semas em Ação — Ciptea e passe livre", local: "Partage Shopping" },
  { mes: "Mar 2026", titulo: "Encontro de mulheres PcD e mães atípicas", local: "Sorri Parauapebas" },
];

const formOptions = [
  { value: "apoiar", label: "Quero apoiar / receber novidades" },
  { value: "voluntario", label: "Quero ser voluntário(a)" },
  { value: "reuniao", label: "Quero uma reunião / apresentar a candidatura" },
  { value: "pauta", label: "Quero enviar uma pauta do meu município" },
  { value: "imprensa", label: "Fale com a campanha / imprensa" },
  { value: "material", label: "Quero material para divulgar" },
];

function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formType, setFormType] = useState("apoiar");
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    }, 4000);
  };

  const shareWhatsApp = () => {
    const msg = encodeURIComponent("Vote 70700 — Cilmara Bonfim — Deputada Estadual — Pará — AVANTE. Inclusão que transforma!");
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  const navItems = [
    { label: "Sobre", id: "quem-sou" },
    { label: "Propostas", id: "eixos" },
    { label: "Atuação", id: "atuacao" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img src={logoCilmara} alt="Cilmara Bonfim" className="h-11 w-auto" />
              <div className="hidden sm:block">
                <p className="font-bold text-base leading-tight text-slate-900 group-hover:text-blue-brand transition-colors">{candidato.nome} {candidato.sobrenome}</p>
                <p className="text-xs text-slate-500">{candidato.partido} • {candidato.numero} • {candidato.estado}</p>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-brand hover:bg-blue-soft rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("como-votar")}
                className="ml-3 bg-orange-flat hover:opacity-90 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
              >
                Vote 70700
              </Button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              <nav className="flex flex-col gap-1 pt-2 border-t border-slate-100">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { scrollToSection(item.id); setMobileMenuOpen(false); }}
                    className="text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-brand hover:bg-blue-soft rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => { scrollToSection("como-votar"); setMobileMenuOpen(false); }}
                  className="mt-2 bg-orange-flat text-white font-semibold"
                >
                  Vote 70700
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ── Hero: Banner + foto da candidata ── */}
      <section id="inicio" className="bg-blue-flat text-white relative overflow-hidden">
        <div className="container mx-auto px-4 pt-8 pb-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={candidato.banner} alt="Banner Cilmara Bonfim" className="w-full h-auto block" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="bg-orange-flat text-white border-0 mb-5 text-xs px-4 py-1.5 font-semibold uppercase tracking-wide rounded-full">
                {candidato.cargo} • {candidato.partido} • {candidato.estado}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
                Inclusão começa onde a pessoa é ouvida.
              </h1>
              <p className="text-base md:text-lg text-blue-100 mb-7 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sou Cilmara Bonfim, mulher surda, mãe e liderança comunitária de Parauapebas. Conheço, por dentro, as barreiras que PcD, surdos, autistas, mães atípicas e cuidadoras enfrentam.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contato")}
                  className="bg-pink-flat hover:opacity-90 text-white text-base px-7 py-5 rounded-lg font-semibold transition-all hover-lift"
                >
                  <HeartHandshake className="h-5 w-5 mr-2" />
                  Quero apoiar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("eixos")}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-brand text-base px-7 py-5 rounded-lg font-semibold bg-transparent transition-all"
                >
                  Ver propostas
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="h-72 w-72 md:h-80 md:w-80 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-orange-flat">
                  <img src={candidato.foto} alt={candidato.nome} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-flat text-white px-6 py-2.5 rounded-xl font-bold text-2xl shadow-xl whitespace-nowrap border-4 border-blue-flat">
                  70700
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quem é ── */}
      <section id="quem-sou" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-soft text-blue-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                <Star className="h-3.5 w-3.5" /> Sobre a candidata
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Quem é Cilmara Bonfim</h2>
              <div className="w-14 h-1 bg-blue-flat mx-auto rounded-full" />
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-7">
              <AnimatedSection className="lg:col-span-2" delay={100}>
                <Card className="border border-slate-200 shadow-lg rounded-2xl overflow-hidden hover-lift">
                  <div className="h-1.5 bg-blue-flat w-full" />
                  <CardHeader className="pt-8 pb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20 border-2 border-blue-flat">
                        <AvatarImage src={candidato.foto} alt={candidato.nome} />
                        <AvatarFallback className="bg-blue-flat text-white font-bold text-xl">{candidato.nome[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl text-slate-900 font-bold">{candidato.nomeCompleto}</CardTitle>
                        <CardDescription className="text-sm mt-0.5">{candidato.cargo} • {candidato.partido} • {candidato.estado}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      {candidato.nome} {candidato.sobrenome} é mulher surda, mãe e liderança comunitária de Parauapebas, no Pará. Nasceu em Tucuruí em 6 de outubro de 1982 e cresceu em Parauapebas, onde construiu vínculo com a comunidade surda, com famílias atípicas e com organizações da pessoa com deficiência.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Trabalha como agente administrativa. Em 2025, foi nomeada coordenadora da Coordenadoria Municipal da Pessoa com Deficiência (COMPED), em Portaria DC492/25. Na COMPED, articulou ações de autismo, acessibilidade, cidadania e cuidado com mulheres PcD e mães atípicas.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="border border-slate-200 shadow-lg rounded-2xl overflow-hidden h-full hover-lift">
                  <div className="h-1.5 bg-orange-flat w-full" />
                  <CardHeader className="pt-8 pb-4">
                    <CardTitle className="text-base text-slate-900 flex items-center gap-2 font-semibold">
                      <Sparkles className="h-4 w-4 text-orange-brand" />
                      Experiência
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        "Mulher surda, usuária de Libras",
                        "Mãe e liderança comunitária em Parauapebas",
                        "Agente administrativa com conhecimento da máquina pública",
                        "Coordenadora da COMPED (Portaria DC492/25)",
                        "Histórico eleitoral: 2020, 2022, 2024 e 2026"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-brand" />
                          </div>
                          <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trajetória ── */}
      <section id="trajetoria" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-soft text-pink-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <Target className="h-3.5 w-3.5" /> Linha do tempo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Trajetória</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">A campanha é construção. Cada etapa construiu a líder que sou hoje.</p>
            <div className="w-14 h-1 bg-blue-flat mx-auto mt-5 rounded-full" />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-blue-flat rounded-full" />
              <div className="space-y-5">
                {[
                  { ano: "2020", evento: "Candidata a vereadora em Parauapebas", partido: "MDB 15100", cor: "bg-slate-500" },
                  { ano: "2022", evento: "Primeira disputa estadual", partido: "Republicanos 10800", cor: "bg-blue-flat" },
                  { ano: "2024", evento: "Vereança em Parauapebas", partido: "AVANTE 70700", cor: "bg-pink-flat" },
                  { ano: "2025", evento: "Posse na COMPED", partido: "Coordenadora Municipal da Pessoa com Deficiência", cor: "bg-blue-flat" },
                  { ano: "2026", evento: "Candidata a Deputada Estadual", partido: "AVANTE 70700", cor: "bg-orange-flat" },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 80} className="relative flex gap-5 items-center">
                    <div className={`${item.cor} text-white w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-base flex-shrink-0 z-10 shadow-lg`}>
                      {item.ano}
                    </div>
                    <Card className="flex-1 border border-slate-200 shadow-sm rounded-xl">
                      <CardContent className="pt-4 pb-4">
                        <p className="font-semibold text-slate-900">{item.evento}</p>
                        <p className="text-xs text-slate-400 mt-1 font-medium">{item.partido}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Por que sou candidata ── */}
      <section id="por-que" className="py-24 bg-blue-flat text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                <Target className="h-3.5 w-3.5" /> Missão
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Por que sou candidata</h2>
              <div className="w-14 h-1 bg-orange-flat mx-auto mb-10 rounded-full" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-white border-l-4 border-orange-flat pl-6 text-left max-w-2xl mx-auto">
                "Minha história me ensinou que inclusão não pode ser promessa distante. Ela precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito."
              </blockquote>
              <p className="text-base text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto">
                Porque inclusão não pode ser promessa distante. Precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito. Foi por isso que escolhi transformar vivência em luta coletiva.
              </p>
              <Button
                onClick={() => scrollToSection("eixos")}
                className="bg-orange-flat hover:opacity-90 text-white font-semibold text-base px-7 py-5 rounded-lg hover-lift"
              >
                Ver propostas por eixo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── O que faz uma Deputada Estadual ── */}
      <section id="cargo" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-orange-soft text-orange-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                <Shield className="h-3.5 w-3.5" /> Poder legislativo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">O que faz uma Deputada Estadual</h2>
              <div className="w-14 h-1 bg-blue-flat mx-auto rounded-full" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="border border-slate-200 shadow-lg rounded-2xl overflow-hidden">
                <div className="h-1 bg-blue-flat w-full" />
                <CardContent className="pt-9 pb-9">
                  <p className="text-slate-600 leading-relaxed text-base mb-9 max-w-3xl mx-auto text-center">
                    A Assembleia Legislativa do Pará vota leis, fiscaliza o Executivo, decide o orçamento do estado e recebe demandas dos municípios. Uma Deputada Estadual pode criar políticas estaduais de inclusão, indicar prioridades ao Executivo, fiscalizar secretarias e serviços, e propor emendas ao orçamento para áreas como saúde, educação, trabalho, mobilidade e acessibilidade.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { icon: Shield, text: "Votar leis estaduais que organizem políticas para PcD, surdos, TEA, mães atípicas e idosos" },
                      { icon: Users, text: "Fiscalizar secretarias, hospitais regionais e transporte" },
                      { icon: GraduationCap, text: "Propor emendas ao orçamento para garantir serviços acessíveis" },
                      { icon: Target, text: "Realizar audiências públicas e reuniões com famílias, associações e municípios" },
                      { icon: Bus, text: "Encaminhar demandas do interior à máquina pública estadual" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-blue-soft border border-blue-200 hover-lift">
                        <div className="w-10 h-10 rounded-lg bg-blue-flat flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 4 Eixos ── */}
      <section id="eixos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-soft text-orange-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Propostas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Quatro eixos para o Pará inteiro</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">20 propostas organizadas em quatro eixos.</p>
            <div className="w-14 h-1 bg-blue-flat mx-auto mt-5 rounded-full" />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {eixos.map((eixo, i) => {
              const Icon = eixo.icon;
              const c = corTema(eixo.cor);
              return (
                <AnimatedSection key={i} delay={i * 80}>
                  <Card className={`border-2 border-slate-200 hover-lift cursor-pointer rounded-2xl overflow-hidden h-full bg-white`}>
                    <div className={`h-1.5 ${c.bar} w-full`} />
                    <CardHeader className="pt-7 pb-3">
                      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-base leading-snug text-slate-900 font-bold">{eixo.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-sm font-bold ${c.text}`}>{eixo.propostas.length} propostas</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Propostas Detalhadas ── */}
      <section id="propostas" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Propostas detalhadas</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">Cada proposta traz o problema e o que o mandato pode fazer.</p>
            <div className="w-14 h-1 bg-blue-flat mx-auto mt-5 rounded-full" />
          </AnimatedSection>

          {eixos.map((eixo, i) => {
            const Icon = eixo.icon;
            const c = corTema(eixo.cor);
            return (
              <AnimatedSection key={i} className="max-w-6xl mx-auto mb-14">
                <div className={`flex items-center gap-4 mb-7 p-5 rounded-2xl ${c.soft}`}>
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold ${c.text}`}>{eixo.titulo}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {eixo.propostas.map((proposta, j) => (
                    <Card key={j} className="border border-slate-200 shadow-sm hover-lift rounded-xl">
                      <CardHeader className="pt-5 pb-3">
                        <div className="flex items-start gap-4">
                          <div className={`${c.num} text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                            {proposta.num}
                          </div>
                          <CardTitle className="text-sm text-slate-800 font-semibold leading-snug">{proposta.titulo}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-500 leading-relaxed">{proposta.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── Atuação na COMPED ── */}
      <section id="atuacao" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-soft text-blue-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                <Target className="h-3.5 w-3.5" /> Realizações
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Como tenho atuado</h2>
              <div className="w-14 h-1 bg-blue-flat mx-auto rounded-full" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="border border-slate-200 shadow-lg mb-9 rounded-2xl overflow-hidden">
                <div className="h-1 bg-blue-flat w-full" />
                <CardContent className="pt-7 pb-7">
                  <p className="text-slate-600 leading-relaxed text-base text-center max-w-3xl mx-auto">
                    Em 2025, assumi a Coordenadoria Municipal da Pessoa com Deficiência (COMPED) de Parauapebas. Coordenei diversas ações de inclusão, acessibilidade e cuidado. Cada entrega é ato da Prefeitura com a COMPED.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {entregasCOMPED.map((entrega, i) => (
                <AnimatedSection key={i} delay={i * 60}>
                  <Card className="border border-slate-200 shadow-sm hover-lift rounded-xl">
                    <CardContent className="pt-5 pb-5">
                      <div className="inline-flex items-center gap-2 bg-orange-soft text-orange-brand text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                        {entrega.mes}
                      </div>
                      <p className="font-semibold text-slate-800 mb-2 text-sm leading-snug">{entrega.titulo}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        {entrega.local}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Galeria em mosaico ── */}
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-soft text-pink-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <Star className="h-3.5 w-3.5" /> Galeria
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Em imagens</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">Blocos para fotos oficiais da campanha — basta trocar o arquivo.</p>
            <div className="w-14 h-1 bg-blue-flat mx-auto mt-5 rounded-full" />
          </AnimatedSection>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimatedSection delay={100} className="md:col-span-2">
              <div className="aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-blue-soft border-2 border-dashed border-blue-300 flex items-center justify-center">
                <div className="text-center text-blue-brand">
                  <Star className="h-10 w-10 mx-auto mb-3 opacity-50" />
                  <p className="font-bold text-sm">Imagem 1 — destaque grande</p>
                  <p className="text-xs opacity-70">src/assets/foto-candidata.png</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150} className="flex flex-col gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-orange-soft border-2 border-dashed border-orange-300 flex items-center justify-center">
                <div className="text-center text-orange-brand px-2">
                  <Star className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="font-bold text-xs">Imagem 2</p>
                  <p className="text-[10px] opacity-70">src/assets/foto-candidata-2.png</p>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-pink-soft border-2 border-dashed border-pink-300 flex items-center justify-center">
                <div className="text-center text-pink-brand px-2">
                  <Star className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="font-bold text-xs">Imagem 3</p>
                  <p className="text-[10px] opacity-70">src/assets/foto-corporal-cilmara.png</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Perguntas frequentes
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">FAQ</h2>
              <div className="w-14 h-1 bg-blue-flat mx-auto rounded-full" />
            </AnimatedSection>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 50}>
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between text-left px-5 py-4 font-medium text-slate-800 hover:bg-blue-soft transition-colors cursor-pointer"
                      aria-expanded={openFaq === i}
                    >
                      <span className="pr-4 text-sm font-semibold">{item.pergunta}</span>
                      <ChevronDown className={`h-4 w-4 flex-shrink-0 text-blue-brand transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                        {item.resposta}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Como Votar com foto de corpo inteiro ── */}
      <section id="como-votar" className="py-20 bg-blue-flat text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-orange-flat flex items-center justify-center mx-auto mb-5">
              <Vote className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Como votar no dia da eleição</h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection delay={50}>
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-orange-flat">
                <img src={candidato.fotoCorporal} alt="Cilmara Bonfim" className="w-full h-auto block" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <p className="text-5xl md:text-6xl font-black mb-3 tracking-tighter">70700</p>
                <p className="text-xl mb-1 text-blue-100 font-medium">Deputada Estadual</p>
                <p className="text-base text-blue-200/80">Pará • AVANTE</p>
                <div className="mt-6 pt-5 border-t border-white/15">
                  <p className="font-bold text-2xl text-white">Cilmara Bonfim</p>
                </div>
                <div className="text-left bg-white/10 rounded-xl p-5 mt-6 border border-white/10">
                  <p className="font-semibold mb-3 text-sm text-blue-100">No dia da votação:</p>
                  <ol className="space-y-3">
                    {["Dirija-se à sua seção eleitoral", 'Digite 70700 no teclado da urna', 'Confirme o nome "Cilmara Bonfim"'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="bg-white text-blue-brand w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                        <span className="text-sm pt-1 text-white/90">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <Button
                  onClick={shareWhatsApp}
                  className="mt-6 bg-pink-flat hover:opacity-90 text-white font-semibold text-base px-7 py-5 rounded-lg w-full hover-lift"
                >
                  <Share2 className="h-4 w-4 mr-2" /> Compartilhar no WhatsApp
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Contato ── */}
      <section id="contato" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-soft text-blue-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <Mail className="h-3.5 w-3.5" /> Fale conosco
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Fale com a campanha</h2>
            <div className="w-14 h-1 bg-blue-flat mx-auto mt-5 rounded-full" />
          </AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <AnimatedSection className="lg:col-span-3" delay={100}>
              <Card className="border border-slate-200 shadow-lg h-full rounded-2xl overflow-hidden">
                <div className="h-1 bg-blue-flat w-full" />
                <CardHeader className="pt-7 pb-2">
                  <CardTitle className="text-xl text-slate-900 font-bold">Envie uma mensagem</CardTitle>
                  <CardDescription>Selecione o assunto e preencha seus dados.</CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-12 animate-fade-in-up">
                      <div className="w-16 h-16 rounded-full bg-blue-soft flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-blue-brand" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Mensagem enviada!</h3>
                      <p className="text-slate-500">Entraremos em contato em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium text-sm">Assunto</Label>
                        <select
                          value={formType}
                          onChange={(e) => setFormType(e.target.value)}
                          className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-flat focus:border-blue-flat"
                        >
                          {formOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium text-sm">Nome</Label>
                          <Input value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} placeholder="Seu nome" className="h-11 rounded-lg" required />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium text-sm">Telefone</Label>
                          <Input value={formData.telefone} onChange={(e) => setFormData({...formData, telefone: e.target.value})} placeholder="(00) 00000-0000" className="h-11 rounded-lg" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium text-sm">E-mail</Label>
                        <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="seu@email.com" className="h-11 rounded-lg" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium text-sm">Mensagem</Label>
                        <Textarea value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} placeholder="Escreva sua mensagem..." className="min-h-[110px] rounded-lg resize-none" />
                      </div>
                      <Button type="submit" className="w-full h-11 bg-blue-flat hover:opacity-90 text-white font-semibold rounded-lg">
                        <Mail className="h-4 w-4 mr-2" /> Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            <div className="lg:col-span-2 space-y-4">
              <AnimatedSection delay={150}>
                <Card className="border border-slate-200 shadow-lg rounded-2xl overflow-hidden">
                  <div className="h-1 bg-orange-flat w-full" />
                  <CardHeader className="pt-7 pb-3">
                    <CardTitle className="text-base text-slate-900 font-semibold flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-brand" /> Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: Phone, label: "Telefone", value: candidato.telefone },
                      { icon: Mail, label: "E-mail", value: candidato.email },
                      { icon: MapPin, label: "CNPJ / Local", value: `${candidato.cnpj} • ${candidato.municipio}/${candidato.estado}` },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-soft flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-4 w-4 text-blue-brand" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">{item.label}</p>
                          <p className="font-medium text-slate-800 text-sm">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="border border-slate-200 shadow-lg rounded-2xl overflow-hidden">
                  <div className="h-1 bg-pink-flat w-full" />
                  <CardHeader className="pt-7 pb-3">
                    <CardTitle className="text-base text-slate-900 font-semibold">Redes sociais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start h-11 rounded-lg border-slate-200 hover:border-blue-flat hover:bg-blue-soft text-slate-700">
                      <Instagram className="h-5 w-5 mr-3 text-pink-brand" />{redeSocial.instagram}
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-11 rounded-lg border-slate-200 hover:border-blue-flat hover:bg-blue-soft text-slate-700">
                      <Facebook className="h-5 w-5 mr-3 text-blue-flat" />{redeSocial.facebook}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-white pt-14 pb-7">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-9 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoCilmara} alt="Cilmara Bonfim" className="h-11 w-auto bg-white rounded-lg p-1" />
                <div>
                  <p className="font-bold text-base">{candidato.nome} {candidato.sobrenome}</p>
                  <p className="text-sm text-slate-400">{candidato.cargo} • {candidato.partido}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Compromisso com inclusão, acessibilidade e direitos para todos os paraenses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base text-white">Links Rápidos</h4>
              <ul className="space-y-2 text-slate-400">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="hover:text-white text-sm">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base text-white">Acessibilidade</h4>
              <p className="text-slate-400 text-sm mb-2 leading-relaxed">Esta página é pensada para acesso em Libras. Vídeos legendados e navegação por teclado em breve.</p>
              <p className="text-slate-500 text-xs">Política de Privacidade e LGPD disponíveis mediante solicitação.</p>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-slate-400 text-sm">© 2026 {candidato.nome} {candidato.sobrenome} — Todos os direitos reservados</p>
            <p className="text-slate-500 text-xs">CNPJ: {candidato.cnpj} • {candidato.municipio}/{candidato.estado}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
