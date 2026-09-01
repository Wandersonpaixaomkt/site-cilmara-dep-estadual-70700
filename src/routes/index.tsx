import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  HeartHandshake,
  Accessibility,
  Brain,
  Palmtree,
  Facebook,
  Instagram,
  Share2,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Vote,
  ChevronDown,
  Users,
  Shield,
  GraduationCap,
  Bus,
} from "lucide-react";
import fotoCandidata from "@/assets/candidata.png";
import bannerCilmara from "@/assets/banner-cilmara.png";
import logoCilmara from "@/assets/logo-cilmara.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const candidato = {
  nome: "Cilmara",
  sobrenome: "Bonfim",
  nomeCompleto: "Cilmara Teixeira Bonfim Leal",
  numero: "70700",
  cargo: "Deputada Estadual",
  partido: "AVANTE",
  estado: "Pará",
  municipio: "Parauapebas",
  foto: fotoCandidata,
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
    id: "eixo-1",
    icon: Accessibility,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    titulo: "Inclusão e acessibilidade como direito",
    cor: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    propostas: [
      { num: 5, titulo: "Ciptea com validade estadual", desc: "Carteira de Identificação da Pessoa com TEA com validade estadual e atendimento prioritário real." },
      { num: 8, titulo: "Central de Libras 24h", desc: "Central de Libras 24 horas do Pará para atendimento remoto em língua brasileira de sinais." },
      { num: 9, titulo: "Escola Bilíngue para Surdos", desc: "Escola Bilíngue para Surdos em Belém, com polos em Santarém e Marabá." },
      { num: 10, titulo: "Intérpretes de Libras", desc: "Intérpretes de Libras em hospitais regionais, DETRAN, SEFA e escolas estaduais." },
      { num: 20, titulo: "Transporte acessível", desc: "Transporte estadual acessível com cadeirantes, piso tátil e atendimento em Libras." },
    ]
  },
  {
    id: "eixo-2",
    icon: Brain,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    titulo: "TEA, mães atípicas e saúde mental",
    cor: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
    propostas: [
      { num: 6, titulo: "Centros TEA Pará", desc: "Centros especializados em TEA em Belém, Santarém, Marabá e Paragominas." },
      { num: 7, titulo: "Mediador Escolar Inclusivo", desc: "Mediador Escolar Inclusivo para acompanhar alunos com deficiência nas escolas." },
      { num: 14, titulo: "Residências Inclusivas", desc: "Residências Inclusivas e Oficinas de Trabalho para autonomia de PcD." },
      { num: 15, titulo: "Continuidade de medicamentos", desc: "Continuidade de medicamentos e simplificação de laudos para PcD." },
    ]
  },
  {
    id: "eixo-3",
    icon: HeartHandshake,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    titulo: "Autonomia e cuidado de mulheres e idosos",
    cor: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
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
    id: "eixo-4",
    icon: Palmtree,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    titulo: "Mineração responsável e desenvolvimento",
    cor: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200",
    propostas: [
      { num: 16, titulo: "Fundo da Mineração", desc: "Fundo da Mineração com participação social e transparência." },
      { num: 17, titulo: "Contrapartida para PcD", desc: "Contrapartida da mineração para políticas de PcD nos municípios impactados." },
      { num: 18, titulo: "Rastreabilidade de rejeitos", desc: "Rastreabilidade e fiscalização de rejeitos de mineração." },
      { num: 19, titulo: "Selo Empresa Inclusiva", desc: "Selo Empresa Inclusiva do Pará para empresas que contratam PcD." },
    ]
  },
];

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

function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formType, setFormType] = useState("apoiar");
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    }, 3000);
  };

  const shareWhatsApp = () => {
    const msg = encodeURIComponent("Vote 70700 — Cilmara Bonfim — Deputada Estadual — Pará — AVANTE. Inclusão que transforma!");
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("inicio")}>
              <img src={logoCilmara} alt="Cilmara Bonfim" className="h-12 w-auto" />
              <div>
                <p className="font-bold text-base leading-tight text-slate-900">{candidato.nome} {candidato.sobrenome}</p>
                <p className="text-xs text-slate-500">{candidato.partido} • {candidato.numero} • {candidato.estado}</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {[
                { label: "Sobre", id: "quem-sou" },
                { label: "Propostas", id: "eixos" },
                { label: "Atuação", id: "atuacao" },
                { label: "FAQ", id: "faq" },
                { label: "Contato", id: "contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("como-votar")}
                className="ml-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/25 font-semibold"
              >
                Vote 70700
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-900/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="bg-amber-500 text-amber-950 mb-6 text-sm px-4 py-1.5 font-semibold shadow-lg">
                {candidato.cargo} • {candidato.partido} • {candidato.estado}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Inclusão começa onde a pessoa é ouvida.
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sou Cilmara Bonfim, mulher surda, mãe e liderança comunitária de Parauapebas. Conheço, por dentro, as barreiras que PcD, surdos, autistas, mães atípicas e cuidadoras enfrentam. Atuei como coordenadora da COMPED e disputo a Assembleia do Pará para transformar essa vivência em direitos estaduais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contato")}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-10 py-6 shadow-xl shadow-green-600/30 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Quero apoiar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("eixos")}
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 text-lg px-10 py-6 font-semibold transition-all duration-300"
                >
                  Ver propostas
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-6 bg-amber-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -inset-2 bg-amber-500/30 rounded-full blur-2xl"></div>
                <div className="h-72 w-72 md:h-96 md:w-96 rounded-full border-4 border-amber-500 shadow-2xl shadow-amber-500/20 relative z-10 overflow-hidden bg-white">
                  <img src={candidato.foto} alt={candidato.nome} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-amber-950 px-8 py-3 rounded-full font-bold text-2xl shadow-xl shadow-amber-500/30 z-20">
                  70700
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso TSE */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200 py-3">
        <div className="container mx-auto px-4">
          <p className="text-amber-800 text-sm text-center flex items-center justify-center gap-2 font-medium">
            <AlertCircle className="h-4 w-4" />
            Pedido de registro no TSE em 31/08/2026 — aguardando julgamento
          </p>
        </div>
      </div>

      {/* Quem é */}
      <section id="quem-sou" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Quem é Cilmara Bonfim</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl shadow-blue-900/5 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-blue-600">
                        <AvatarImage src={candidato.foto} alt={candidato.nome} />
                        <AvatarFallback className="text-xl bg-blue-600 text-white">{candidato.nome[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl text-slate-900">{candidato.nomeCompleto}</CardTitle>
                        <CardDescription className="text-base mt-1">{candidato.cargo} • {candidato.partido} • {candidato.estado}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-slate-600 leading-relaxed text-base">
                      {candidato.nome} {candidato.sobrenome} é mulher surda, mãe e liderança comunitária de Parauapebas, no Pará. Nasceu em Tucuruí em 6 de outubro de 1982 e cresceu em Parauapebas, onde construiu vínculo com a comunidade surda, com famílias atípicas e com organizações da pessoa com deficiência.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base">
                      Trabalha como agente administrativa. Em 2025, foi nomeada coordenadora da Coordenadoria Municipal da Pessoa com Deficiência (COMPED), em Portaria DC492/25. Na COMPED, articulou ações de autismo, acessibilidade, cidadania e cuidado com mulheres PcD e mães atípicas.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="border-0 shadow-xl shadow-blue-900/5 h-full bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
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
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section id="trajetoria" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Trajetória</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">A campanha é construção. Cada etapa construiu a líder que sou hoje.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-300"></div>
              <div className="space-y-8">
                {[
                  { ano: "2020", evento: "Candidata a vereadora em Parauapebas", partido: "MDB 15100", cor: "bg-slate-500" },
                  { ano: "2022", evento: "Primeira disputa estadual", partido: "Republicanos 10800", cor: "bg-blue-600" },
                  { ano: "2024", evento: "Vereança em Parauapebas", partido: "AVANTE 70700", cor: "bg-blue-600" },
                  { ano: "2025", evento: "Posse na COMPED", partido: "Coordenadora Municipal da Pessoa com Deficiência", cor: "bg-green-600" },
                  { ano: "2026", evento: "Candidata a Deputada Estadual", partido: "AVANTE 70700", cor: "bg-amber-500" },
                ].map((item, i) => (
                  <div key={i} className="relative flex gap-6 items-center pl-0">
                    <div className={`${item.cor} text-white w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg z-10`}>
                      {item.ano}
                    </div>
                    <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="pt-5 pb-5">
                        <p className="font-semibold text-slate-900 text-lg">{item.evento}</p>
                        <p className="text-sm text-slate-500 mt-1">{item.partido}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que sou candidata */}
      <section id="por-que" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Por que sou candidata</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-12 rounded-full"></div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed text-blue-100 italic">
              "Minha história me ensinou que inclusão não pode ser promessa distante. Ela precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito."
            </blockquote>
            <p className="text-lg text-blue-200 leading-relaxed mb-10">
              Porque inclusão não pode ser promessa distante. Precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito. Foi por isso que escolhi transformar vivência em luta coletiva — primeiro como ativista comunitária, depois na gestão da COMPED, agora na disputa pela Assembleia do Pará.
            </p>
            <Button
              onClick={() => scrollToSection("eixos")}
              className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-amber-950 font-semibold text-lg px-10 py-6 shadow-xl shadow-amber-500/30"
            >
              Ver propostas por eixo
            </Button>
          </div>
        </div>
      </section>

      {/* O que faz uma Deputada Estadual */}
      <section id="cargo" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">O que faz uma Deputada Estadual</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <Card className="border-0 shadow-xl shadow-blue-900/5">
              <CardContent className="pt-8 pb-8">
                <p className="text-slate-600 leading-relaxed text-lg mb-8 max-w-3xl mx-auto text-center">
                  A Assembleia Legislativa do Pará vota leis, fiscaliza o Executivo, decide o orçamento do estado e recebe demandas dos municípios. Uma Deputada Estadual pode criar políticas estaduais de inclusão, indicar prioridades ao Executivo, fiscalizar secretarias e serviços, e propor emendas ao orçamento para áreas como saúde, educação, trabalho, mobilidade e acessibilidade.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Shield, text: "Votar leis estaduais que organizem políticas para PcD, surdos, TEA, mães atípicas e idosos" },
                    { icon: AlertCircle, text: "Fiscalizar secretarias, hospitais regionais e transporte" },
                    { icon: GraduationCap, text: "Propor emendas ao orçamento para garantir serviços acessíveis" },
                    { icon: Users, text: "Realizar audiências públicas e reuniões com famílias, associações e municípios" },
                    { icon: Bus, text: "Encaminhar demandas do interior à máquina pública estadual" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-md transition-shadow duration-300">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Eixos */}
      <section id="eixos" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Quatro eixos para o Pará inteiro</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">As 20 propostas da campanha estão organizadas em quatro eixos. O que cabe ao mandato assumimos como proposta. O que depende do Executivo ou do Congresso vira cobrança e articulação.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {eixos.map((eixo, i) => {
              const Icon = eixo.icon;
              return (
                <Card
                  key={i}
                  className={`border-2 ${eixo.cor} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group`}
                  onClick={() => scrollToSection(`propostas-${eixo.id}`)}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl ${eixo.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${eixo.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg leading-tight text-slate-900 font-bold">{eixo.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">{eixo.propostas.length} propostas</p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Ver propostas
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Propostas Detalhadas */}
      <section id="propostas" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Propostas detalhadas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Cada proposta traz o problema e o que o mandato pode fazer. Propostas marcadas como "exige Executivo/Congresso" são cobranças e indicações.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {eixos.map((eixo, i) => {
            const Icon = eixo.icon;
            return (
              <div key={i} id={`propostas-${eixo.id}`} className="max-w-6xl mx-auto mb-16">
                <div className={`flex items-center gap-4 mb-8 p-6 rounded-2xl ${eixo.cor} border-2`}>
                  <div className={`w-14 h-14 rounded-xl ${eixo.iconBg} flex items-center justify-center`}>
                    <Icon className={`h-7 w-7 ${eixo.iconColor}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">{eixo.titulo}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {eixo.propostas.map((proposta, j) => (
                    <Card key={j} className="border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                      <CardHeader className="pb-3 pt-5">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-blue-600/20">
                            {proposta.num}
                          </div>
                          <CardTitle className="text-base text-slate-900 font-semibold leading-snug group-hover:text-blue-700 transition-colors">{proposta.titulo}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 leading-relaxed">{proposta.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Atuação na COMPED */}
      <section id="atuacao" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Como tenho atuado</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <Card className="border-0 shadow-xl shadow-blue-900/5 mb-10 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="pt-8 pb-8">
                <p className="text-slate-600 leading-relaxed text-lg text-center max-w-3xl mx-auto">
                  Em 2025, assumi a Coordenadoria Municipal da Pessoa com Deficiência (COMPED) de Parauapebas. Coordenei diversas ações de inclusão, acessibilidade e cuidado. Cada entrega é ato da Prefeitura com a COMPED. Quero levar essas entregas para o estado.
                </p>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {entregasCOMPED.map((entrega, i) => (
                <Card key={i} className="border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="pt-5 pb-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold">
                        {entrega.mes}
                      </div>
                    </div>
                    <p className="font-semibold text-slate-900 mb-1">{entrega.titulo}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {entrega.local}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria - Em imagens */}
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Em imagens</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Fotos e materiais visuais oficiais da campanha.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-xl shadow-blue-900/5 overflow-hidden">
              <img src={bannerCilmara} alt="Banner Cilmara Bonfim — Lutando por mais inclusão" className="w-full h-auto" />
            </Card>
            <Card className="border-0 shadow-xl shadow-blue-900/5 overflow-hidden">
              <img src={candidato.foto} alt="Cilmara Bonfim" className="w-full h-full object-cover" />
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Perguntas frequentes</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="pr-4 text-base">{item.pergunta}</span>
                    <ChevronDown className={`h-5 w-5 flex-shrink-0 text-blue-600 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      {item.resposta}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como Votar */}
      <section id="como-votar" className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Vote className="h-10 w-10 opacity-90" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Como votar no dia da eleição</h2>
          <div className="bg-white/15 backdrop-blur rounded-3xl p-10 max-w-xl mx-auto mb-10 shadow-2xl">
            <p className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">70700</p>
            <p className="text-2xl mb-2 text-green-100">Deputada Estadual</p>
            <p className="text-xl text-green-200">Pará • AVANTE</p>
            <p className="font-bold text-amber-300 mt-6 text-2xl">Cilmara Bonfim</p>
          </div>
          <div className="text-left max-w-xl mx-auto bg-white/10 backdrop-blur rounded-2xl p-8 mb-10">
            <p className="font-semibold mb-5 text-lg">No dia da votação:</p>
            <ol className="space-y-4">
              {[
                "Dirija-se à sua seção eleitoral",
                "Digite 70700 no teclado da urna",
                "Confirme o nome \"Cilmara Bonfim\" na tela"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-white text-green-700 w-8 h-8 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  <span className="text-lg pt-1">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <Button
            size="lg"
            onClick={shareWhatsApp}
            className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-green-950 font-semibold text-lg px-10 py-6 shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-105"
          >
            <Share2 className="h-5 w-5 mr-2" /> Compartilhar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Fale com a campanha</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Escolha o tipo de contato e preencha o formulário. Responderemos assim que possível.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl shadow-blue-900/5 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-slate-900">Envie uma mensagem</CardTitle>
                  <CardDescription>Selecione o assunto e preencha seus dados.</CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Mensagem enviada!</h3>
                      <p className="text-slate-600">Entraremos em contato em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="tipo" className="text-slate-700 font-medium">Assunto</Label>
                        <select
                          id="tipo"
                          value={formType}
                          onChange={(e) => setFormType(e.target.value)}
                          className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        >
                          {formOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="nome" className="text-slate-700 font-medium">Nome</Label>
                          <Input
                            id="nome"
                            placeholder="Seu nome completo"
                            value={formData.nome}
                            onChange={(e) => setFormData({...formData, nome: e.target.value})}
                            className="h-12 px-4 rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone" className="text-slate-700 font-medium">Telefone</Label>
                          <Input
                            id="telefone"
                            placeholder="(00) 00000-0000"
                            value={formData.telefone}
                            onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                            className="h-12 px-4 rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="h-12 px-4 rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mensagem" className="text-slate-700 font-medium">Mensagem</Label>
                        <Textarea
                          id="mensagem"
                          placeholder="Escreva sua mensagem aqui..."
                          className="min-h-[140px] px-4 py-3 rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                          value={formData.mensagem}
                          onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02]"
                      >
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Informações */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-xl shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Informações de contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {[
                    { icon: Phone, label: "Telefone", value: candidato.telefone },
                    { icon: Mail, label: "E-mail", value: candidato.email },
                    { icon: MapPin, label: "CNPJ / Local", value: `${candidato.cnpj} • ${candidato.municipio}/${candidato.estado}` },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                        <p className="font-medium text-slate-900 text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Redes sociais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 px-4 border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-all"
                  >
                    <Instagram className="h-5 w-5 mr-3 text-pink-600" />
                    {redeSocial.instagram}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 px-4 border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-all"
                  >
                    <Facebook className="h-5 w-5 mr-3 text-blue-600" />
                    {redeSocial.facebook}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src={logoCilmara} alt="Cilmara Bonfim" className="h-12 w-auto bg-white rounded p-1" />
                <div>
                  <p className="font-bold text-lg">{candidato.nome} {candidato.sobrenome}</p>
                  <p className="text-sm text-slate-400">{candidato.cargo} • {candidato.partido}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Compromisso com inclusão, acessibilidade e direitos para todos os paraenses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-lg">Links Rápidos</h4>
              <ul className="space-y-3 text-slate-400">
                {[
                  { label: "Sobre", id: "quem-sou" },
                  { label: "Propostas", id: "eixos" },
                  { label: "Atuação", id: "atuacao" },
                  { label: "Galeria", id: "galeria" },
                  { label: "FAQ", id: "faq" },
                  { label: "Contato", id: "contato" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-lg">Acessibilidade</h4>
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">Esta página é pensada para acesso em Libras. Vídeos legendados e navegação por teclado em breve.</p>
              <p className="text-slate-500 text-xs">Política de Privacidade e LGPD disponíveis mediante solicitação.</p>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2026 {candidato.nome} {candidato.sobrenome} — Todos os direitos reservados</p>
            <div className="text-slate-500 text-xs text-center md:text-right">
              <p>CNPJ: {candidato.cnpj} • {candidato.municipio}/{candidato.estado}</p>
              <p className="mt-1 text-amber-400 font-medium">Pedido de registro no TSE em 31/08/2026 — aguardando julgamento</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
