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
// Imagens temporariamente desativadas para definicao do layout
// import fotoCandidata from "@/assets/foto-candidata.png";
// import fotoCandidata2 from "@/assets/foto-candidata-2.png";
// import fotoCorporal from "@/assets/foto-corporal-cilmara.png";
// import bannerCilmara from "@/assets/banner-cilmara.png";
// import logoCilmara from "@/assets/logo-cilmara.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const candidato = {
  nome: "Cilmara", sobrenome: "Bonfim",
  nomeCompleto: "Cilmara Teixeira Bonfim Leal",
  numero: "70700", cargo: "Deputada Estadual",
  partido: "AVANTE", estado: "Pará", municipio: "Parauapebas",
  foto: "/assets/foto-candidata.png", foto2: "/assets/foto-candidata-2.png", fotoCorporal: "/assets/foto-corporal-cilmara.png",
  banner: "/assets/banner-cilmara.png",
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

const corEixo = (cor: string) => {
  if (cor === "pink") return { barra: "#E91E8C", fundo: "#FDF2F8", texto: "#E91E8C" };
  if (cor === "orange") return { barra: "#FF6600", fundo: "#FFF7ED", texto: "#FF6600" };
  return { barra: "#0066CC", fundo: "#EFF6FF", texto: "#0066CC" };
};

const faqItems = [
  { pergunta: "Quem é Cilmara Bonfim?", resposta: "Mulher surda, mãe, liderança comunitária de Parauapebas. Agente administrativa, inúmerada COMPED (Portaria DC492/25). Candidata a Deputada Estadual pelo AVANTE — 70700." },
  { pergunta: "A candidata é surda?", resposta: "Sim. A campanha fala Libras. Cilmara é usuária de Libras desde a infância." },
  { pergunta: "O que é a COMPED?", resposta: "Coordenadoria Municipal da Pessoa com Deficiência de Parauapebas. Cilmara assumiu a coordenação em 2025, pela Portaria DC492/25." },
  { pergunta: "Qual é o partido e o número?", resposta: "AVANTE — 70700. Vote 70700 no dia da eleição." },
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
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-white border border-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-400 font-medium" style={{width:"60px",height:"44px"}}>60x44</div>
              <div className="hidden sm:block">
                <p className="font-bold text-base leading-tight text-slate-900 group-hover:text-blue-brand transition-colors">{candidato.nome} {candidato.sobrenome}</p>
                <p className="text-xs" style={{ color: "#64748B" }}>{candidato.partido} · {candidato.numero} · {candidato.estado}</p>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-brand rounded-lg transition-colors"
                  style={{ backgroundColor: "transparent" }}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("como-votar")}
                className="ml-3 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all border-0"
                style={{ backgroundColor: "#FF6600" }}
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
                    className="text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-brand rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => { scrollToSection("como-votar"); setMobileMenuOpen(false); }}
                  className="mt-2 text-white font-semibold border-0"
                  style={{ backgroundColor: "#FF6600" }}
                >
                  Vote 70700
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ── Hero: Banner no topo ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: "#0066CC" }}>
        <div className="container mx-auto px-4 pt-0 pb-0">
          <div className="w-full bg-white flex items-center justify-center" style={{height:"400px"}}>
            <span className="text-sm text-slate-400 font-medium">Banner principal — largura total x 400px altura</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-14 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              className="text-white border-0 mb-6 text-xs px-5 py-1.5 font-semibold uppercase tracking-wider rounded-full"
              style={{ backgroundColor: "#FF6600" }}
            >
              {candidato.cargo} · {candidato.partido} · {candidato.estado}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              Inclusão começa onde a pessoa é ouvida.
            </h1>
            <p className="text-base md:text-lg mb-9 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.88)" }}>
              Sou Cilmara Bonfim, mulher surda, mãe e liderança comunitária de Parauapebas. Conheço, por dentro, as barreiras que PcD, surdos, autistas, mães atípicas e cuidadoras enfrentam. Atuei como inúmeradora da COMPED e disputei a Assembleia do Pará para transformar essa vivência em direitos estaduais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="text-white font-semibold text-base px-8 py-5 rounded-xl transition-all hover-lift border-0"
                style={{ backgroundColor: "#E91E8C" }}
              >
                <HeartHandshake className="h-5 w-5 mr-2" />
                Quero apoiar
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("eixos")}
                className="border-2 border-white text-white hover:bg-white text-base px-8 py-5 rounded-xl font-semibold transition-all"
                style={{ backgroundColor: "transparent" }}
              >
                Ver propostas
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quem é ── */}
      <section id="quem-sou" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#EFF6FF", color: "#0066CC" }}>
                <Star className="h-3.5 w-3.5" /> Sobre a candidata
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Quem é Cilmara Bonfim</h2>
              <div className="w-14 h-1 mx-auto rounded-full mt-4" style={{ backgroundColor: "#0066CC" }} />
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-7 items-start">
              <AnimatedSection className="lg:col-span-2" delay={100}>
                <div className="flex flex-col md:flex-row gap-6">
                  <Card className="border border-slate-200 shadow-md rounded-2xl overflow-hidden hover-lift flex-1" style={{ borderRadius: "16px" }}>
                    <div className="h-1.5 w-full" style={{ backgroundColor: "#0066CC" }} />
                    <CardHeader className="pt-8 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20 border-2 flex-shrink-0" style={{ borderColor: "#0066CC" }}>
                          <AvatarImage src="" alt="placeholder" />
                          <AvatarFallback className="font-bold text-xl" style={{ backgroundColor: "#0066CC", color: "white" }}>{candidato.nome[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl text-slate-900 font-bold">{candidato.nomeCompleto}</CardTitle>
                          <CardDescription className="text-sm mt-0.5">{candidato.cargo} · {candidato.partido} · {candidato.estado}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        {candidato.nome} {candidato.sobrenome} é mulher surda, mãe e liderança comunitária de Parauapebas, no Pará. Nasceu em Tucuruí em 6 de outubro de 1982 e cresceu em Parauapebas, onde construiu vínculo com a comunidade surda, com famílias atípicas e com organizações da pessoa com deficiência.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Trabalha como agente administrativa. Em 2025, foi nomeada coordinadorada Coordenadoria Municipal da Pessoa com Deficiência (COMPED), em Portaria DC492/25. Na COMPED, articulou ações de autismo, acessibilidade, cidadania e cuidado com mulheres PcD e mães atípicas.
                      </p>
                    </CardContent>
                  </Card>
                  <div className="w-full md:w-56 lg:w-64 flex-shrink-0 hidden md:block">
                    <div className="rounded-2xl overflow-hidden shadow-lg border-2 h-full flex items-center justify-center bg-white" style={{borderColor:"#E91E8C",height:"350px"}}>
                      <span className="text-xs text-slate-400 font-medium">280x350</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="border border-slate-200 shadow-md rounded-2xl overflow-hidden h-full hover-lift" style={{ borderRadius: "16px" }}>
                  <div className="h-1.5 w-full" style={{ backgroundColor: "#FF6600" }} />
                  <CardHeader className="pt-8 pb-4">
                    <CardTitle className="text-base text-slate-900 flex items-center gap-2 font-semibold">
                      <Sparkles className="h-4 w-4" style={{ color: "#FF6600" }} />
                      Experiência
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        "Mulher surda, usuária de Libras",
                        "Mãe e liderança comunitária em Parauapebas",
                        "Agente administrativa com conhecimento da máquina pública",
                        "Coordinadora da COMPED (Portaria DC492/25)",
                        "Histórico eleitoral: 2020, 2022, 2024 e 2026"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#EFF6FF" }}>
                            <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#0066CC" }} />
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
      <section id="trajetoria" className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FDF2F8", color: "#E91E8C" }}>
              <Target className="h-3.5 w-3.5" /> Linha do tempo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Trajetória</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">A campanha é construção. Cada etapa construiu a líder que sou hoje.</p>
            <div className="w-14 h-1 mx-auto mt-5 rounded-full" style={{ backgroundColor: "#0066CC" }} />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 w-0.5 rounded-full" style={{ backgroundColor: "#0066CC" }} />
              <div className="space-y-5">
                {[
                  { ano: "2020", evento: "Candidata a vereadora em Parauapebas", partido: "MDB 15100", cor: "#64748B" },
                  { ano: "2022", evento: "Primeira disputa estadual", partido: "Republicanos 10800", cor: "#0066CC" },
                  { ano: "2024", evento: "Vereança em Parauapebas", partido: "AVANTE 70700", cor: "#E91E8C" },
                  { ano: "2025", evento: "Posse na COMPED", partido: "Coordinadora Municipal da Pessoa com Deficiência", cor: "#0066CC" },
                  { ano: "2026", evento: "Candidata a Deputada Estadual", partido: "AVANTE 70700", cor: "#FF6600" },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 80} className="relative flex gap-5 items-center">
                    <div className="text-white w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-base flex-shrink-0 z-10 shadow-lg" style={{ backgroundColor: item.cor }}>
                      {item.ano}
                    </div>
                    <Card className="flex-1 border border-slate-200 shadow-sm rounded-xl" style={{ borderRadius: "12px" }}>
                      <CardContent className="pt-4 pb-4">
                        <p className="font-semibold text-slate-900">{item.evento}</p>
                        <p className="text-xs mt-1 font-medium" style={{ color: "#94A3B8" }}>{item.partido}</p>
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
      <section id="por-que" className="py-24 text-white" style={{ backgroundColor: "#0066CC" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-5" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <Target className="h-3.5 w-3.5" /> Missão
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Por que sou candidata</h2>
              <div className="w-14 h-1 mx-auto mb-10 rounded-full" style={{ backgroundColor: "#FF6600" }} />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <blockquote
                className="text-xl md:text-2xl font-medium mb-8 leading-relaxed border-l-4 pl-6 text-left max-w-2xl mx-auto"
                style={{ borderColor: "#FF6600", color: "white" }}
              >
                "Minha história me ensinou que inclusão não pode ser promessa distante. Ela precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito."
              </blockquote>
              <p className="text-base mb-8 leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
                Porque inclusão não pode ser promessa distante. Foi por isso que escolhi transformar vivência em luta coletiva — primeiro como ativista comunitária, depois na gestão da COMPED, agora na disputa pela Assembleia do Pará.
              </p>
              <Button
                onClick={() => scrollToSection("eixos")}
                className="text-white font-semibold text-base px-7 py-5 rounded-xl hover-lift border-0"
                style={{ backgroundColor: "#FF6600" }}
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
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FFF7ED", color: "#FF6600" }}>
                <Shield className="h-3.5 w-3.5" /> Poder legislativo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">O que faz uma Deputada Estadual</h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: "#0066CC" }} />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="border border-slate-200 shadow-md rounded-2xl overflow-hidden" style={{ borderRadius: "16px" }}>
                <div className="h-1 w-full" style={{ backgroundColor: "#0066CC" }} />
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
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl border hover-lift" style={{ backgroundColor: "#EFF6FF", borderColor: "#BFDBFE" }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#0066CC" }}>
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
      <section id="eixos" className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FFF7ED", color: "#FF6600" }}>
              <Sparkles className="h-3.5 w-3.5" /> Propostas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Quatro eixos para o Pará inteiro</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">20 propostas organizadas em quatro eixos.</p>
            <div className="w-14 h-1 mx-auto mt-5 rounded-full" style={{ backgroundColor: "#0066CC" }} />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {eixos.map((eixo, i) => {
              const Icon = eixo.icon;
              const c = corEixo(eixo.cor);
              return (
                <AnimatedSection key={i} delay={i * 80}>
                  <Card
                    className="border-2 hover-lift cursor-pointer rounded-2xl overflow-hidden h-full bg-white"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <div className="h-1.5 w-full" style={{ backgroundColor: c.barra }} />
                    <CardHeader className="pt-7 pb-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: c.barra }}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-base leading-snug text-slate-900 font-bold">{eixo.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-bold" style={{ color: c.texto }}>{eixo.propostas.length} propostas</p>
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
            <div className="w-14 h-1 mx-auto mt-5 rounded-full" style={{ backgroundColor: "#0066CC" }} />
          </AnimatedSection>

          {eixos.map((eixo, i) => {
            const Icon = eixo.icon;
            const c = corEixo(eixo.cor);
            return (
              <AnimatedSection key={i} className="max-w-6xl mx-auto mb-14">
                <div className="flex items-center gap-4 mb-7 p-5 rounded-2xl" style={{ backgroundColor: c.fundo }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: c.barra }}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: c.texto }}>{eixo.titulo}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {eixo.propostas.map((proposta, j) => (
                    <Card key={j} className="border-2 hover-lift rounded-xl overflow-hidden" style={{ borderColor: "#E2E8F0" }}>
                      <CardHeader className="pt-5 pb-3 px-5">
                        <div className="flex items-start gap-4">
                          <div className="text-white w-11 h-11 rounded-xl flex items-center justify-center font-black text-base flex-shrink-0" style={{ backgroundColor: c.barra }}>
                            {proposta.num}
                          </div>
                          <div>
                            <CardTitle className="text-sm text-slate-900 font-bold leading-snug">{proposta.titulo}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-5 pb-5 pt-0">
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
      <section id="atuacao" className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#EFF6FF", color: "#0066CC" }}>
                <Target className="h-3.5 w-3.5" /> Realizações
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Como tenho atuado</h2>
              <div className="w-14 h-1 mx-auto rounded-full" style={{ backgroundColor: "#0066CC" }} />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="border border-slate-200 shadow-md mb-9 rounded-2xl overflow-hidden" style={{ borderRadius: "16px" }}>
                <div className="h-1 w-full" style={{ backgroundColor: "#0066CC" }} />
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
                  <Card className="border border-slate-200 shadow-sm hover-lift rounded-xl" style={{ borderRadius: "12px" }}>
                    <CardContent className="pt-5 pb-5">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-3" style={{ backgroundColor: "#FFF7ED", color: "#FF6600" }}>
                        {entrega.mes}
                      </div>
                      <p className="font-semibold text-slate-800 mb-2 text-sm leading-snug">{entrega.titulo}</p>
                      <p className="text-xs flex items-center gap-1.5 font-medium" style={{ color: "#94A3B8" }}>
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
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FDF2F8", color: "#E91E8C" }}>
              <Star className="h-3.5 w-3.5" /> Galeria
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Em imagens</h2>
            <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: "#0066CC" }} />
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ gridTemplateRows: "repeat(3, 200px)" }}>
              <AnimatedSection delay={50} className="col-span-2 row-span-2">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-md hover-lift bg-white border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400 font-medium">Colspan2 x Rowspan2 — foto principal</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100} className="row-span-1">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-md hover-lift bg-white border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400 font-medium">1/4 — foto 2</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150} className="row-span-1">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-md hover-lift bg-white border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400 font-medium">1/4 — foto corporal</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200} className="col-span-2 row-span-1">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-md hover-lift bg-white border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400 font-medium">Colspan2 x Rowspan1 — banner</span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Perguntas frequentes</h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: "#0066CC" }} />
            </AnimatedSection>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 50}>
                  <div className="border rounded-xl overflow-hidden bg-white shadow-sm" style={{ borderColor: "#E2E8F0" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between text-left px-5 py-4 font-medium hover:opacity-80 transition-colors cursor-pointer"
                      style={{ color: "#1E293B" }}
                      aria-expanded={openFaq === i}
                    >
                      <span className="pr-4 text-sm font-semibold">{item.pergunta}</span>
                      <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} style={{ color: "#0066CC" }} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm leading-relaxed border-t pt-3 animate-fade-in" style={{ color: "#64748B", borderColor: "#F1F5F9" }}>
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
      <section id="como-votar" className="py-20 text-white" style={{ backgroundColor: "#0066CC" }}>
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#FF6600" }}>
              <Vote className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Como votar no dia da eleição</h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <AnimatedSection delay={50}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 bg-white flex items-center justify-center" style={{ borderColor: "#FF6600", height: "420px" }}>
                <span className="text-sm text-slate-400 font-medium">Foto corpo inteiro — 400px largura</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="rounded-2xl p-8 border" style={{ borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(255,255,255,0.08)" }}>
                <p className="text-5xl md:text-6xl font-black mb-3 tracking-tighter">70700</p>
                <p className="text-xl mb-1 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>Deputada Estadual</p>
                <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>Pará · AVANTE</p>
                <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                  <p className="font-bold text-2xl text-white">Cilmara Bonfim</p>
                </div>
                <div className="rounded-xl p-5 mt-6 border" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}>
                  <p className="font-semibold mb-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>No dia da votação:</p>
                  <ol className="space-y-3">
                    {["Dirija-se à sua seção eleitoral", "Digite 70700 no teclado da urna", 'Confirme o nome "Cilmara Bonfim"'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: "#E91E8C" }}>{i + 1}</div>
                        <span className="text-sm pt-1" style={{ color: "rgba(255,255,255,0.88)" }}>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <Button
                  onClick={shareWhatsApp}
                  className="mt-6 text-white font-semibold text-base px-7 py-5 rounded-xl w-full hover-lift border-0"
                  style={{ backgroundColor: "#E91E8C" }}
                >
                  <Share2 className="h-4 w-4 mr-2" /> Compartilhar no WhatsApp
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Contato ── */}
      <section id="contato" className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#EFF6FF", color: "#0066CC" }}>
              <Mail className="h-3.5 w-3.5" /> Fale conosco
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 tracking-tight">Fale com a campanha</h2>
            <div className="w-14 h-1 mx-auto mt-5 rounded-full" style={{ backgroundColor: "#0066CC" }} />
          </AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <AnimatedSection className="lg:col-span-3" delay={100}>
              <Card className="border border-slate-200 shadow-md h-full rounded-2xl overflow-hidden" style={{ borderRadius: "16px" }}>
                <div className="h-1 w-full" style={{ backgroundColor: "#0066CC" }} />
                <CardHeader className="pt-7 pb-2">
                  <CardTitle className="text-xl text-slate-900 font-bold">Envie uma mensagem</CardTitle>
                  <CardDescription>Selecione o assunto e preencha seus dados.</CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-12 animate-fade-in-up">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#EFF6FF" }}>
                        <CheckCircle2 className="h-8 w-8" style={{ color: "#0066CC" }} />
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
                          className="w-full h-11 px-4 rounded-lg border text-sm focus:outline-none focus:ring-2"
                          style={{ borderColor: "#E2E8F0", backgroundColor: "white", color: "#334155" }}
                        >
                          {formOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium text-sm">Nome</Label>
                          <Input value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} placeholder="Seu nome" className="h-11 rounded-lg" style={{ borderColor: "#E2E8F0" }} required />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium text-sm">Telefone</Label>
                          <Input value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} placeholder="(00) 00000-0000" className="h-11 rounded-lg" style={{ borderColor: "#E2E8F0" }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium text-sm">E-mail</Label>
                        <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="seu@email.com" className="h-11 rounded-lg" style={{ borderColor: "#E2E8F0" }} required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium text-sm">Mensagem</Label>
                        <Textarea value={formData.mensagem} onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })} placeholder="Escreva sua mensagem..." className="min-h-[110px] rounded-lg resize-none" style={{ borderColor: "#E2E8F0" }} />
                      </div>
                      <Button type="submit" className="w-full h-11 text-white font-semibold rounded-lg border-0" style={{ backgroundColor: "#0066CC" }}>
                        <Mail className="h-4 w-4 mr-2" /> Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            <div className="lg:col-span-2 space-y-4">
              <AnimatedSection delay={150}>
                <Card className="border border-slate-200 shadow-md rounded-2xl overflow-hidden" style={{ borderRadius: "16px" }}>
                  <div className="h-1 w-full" style={{ backgroundColor: "#FF6600" }} />
                  <CardHeader className="pt-7 pb-3">
                    <CardTitle className="text-base text-slate-900 font-semibold flex items-center gap-2">
                      <Phone className="h-4 w-4" style={{ color: "#0066CC" }} /> Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: Phone, label: "Telefone", value: candidato.telefone },
                      { icon: Mail, label: "E-mail", value: candidato.email },
                      { icon: MapPin, label: "CNPJ / Local", value: `${candidato.cnpj} · ${candidato.municipio}/${candidato.estado}` },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EFF6FF" }}>
                          <item.icon className="h-4 w-4" style={{ color: "#0066CC" }} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider font-medium" style={{ color: "#94A3B8" }}>{item.label}</p>
                          <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="border border-slate-200 shadow-md rounded-2xl overflow-hidden" style={{ borderRadius: "16px" }}>
                  <div className="h-1 w-full" style={{ backgroundColor: "#E91E8C" }} />
                  <CardHeader className="pt-7 pb-3">
                    <CardTitle className="text-base text-slate-900 font-semibold">Redes sociais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start h-11 rounded-lg border hover:opacity-80 text-slate-700" style={{ borderColor: "#E2E8F0" }}>
                      <Instagram className="h-5 w-5 mr-3" style={{ color: "#E91E8C" }} />{redeSocial.instagram}
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-11 rounded-lg border hover:opacity-80 text-slate-700" style={{ borderColor: "#E2E8F0" }}>
                      <Facebook className="h-5 w-5 mr-3" style={{ color: "#0066CC" }} />{redeSocial.facebook}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="text-white pt-14 pb-7" style={{ backgroundColor: "#0F172A" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-9 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white border border-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-400 font-medium" style={{width:"60px",height:"44px"}}>60x44</div>
                <div>
                  <p className="font-bold text-base">{candidato.nome} {candidato.sobrenome}</p>
                  <p className="text-sm" style={{ color: "#64748B" }}>{candidato.cargo} · {candidato.partido}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>Compromisso com inclusão, acessibilidade e direitos para todos os paraenses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base">Links Rápidos</h4>
              <ul className="space-y-2" style={{ color: "#64748B" }}>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="hover:text-white text-sm">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base">Acessibilidade</h4>
              <p className="text-sm mb-2 leading-relaxed" style={{ color: "#64748B" }}>Esta página é pensada para acesso em Libras. Vídeos legendados e navegação por teclado em breve.</p>
              <p className="text-xs" style={{ color: "#475569" }}>Política de Privacidade e LGPD disponíveis mediante solicitação.</p>
            </div>
          </div>
          <Separator className="mb-6" style={{ backgroundColor: "#1E293B" }} />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm" style={{ color: "#64748B" }}>© 2026 {candidato.nome} {candidato.sobrenome} — Todos os direitos reservados</p>
            <p className="text-xs" style={{ color: "#475569" }}>CNPJ: {candidato.cnpj} · {candidato.municipio}/{candidato.estado}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
