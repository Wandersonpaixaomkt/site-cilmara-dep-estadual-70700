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
} from "lucide-react";

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
  foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
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
    titulo: "Inclusão e acessibilidade como direito",
    cor: "bg-blue-100 text-blue-700",
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
    titulo: "TEA, mães atípicas e saúde mental",
    cor: "bg-purple-100 text-purple-700",
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
    titulo: "Autonomia e cuidado de mulheres e idosos",
    cor: "bg-pink-100 text-pink-700",
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
    titulo: "Mineração responsável e desenvolvimento",
    cor: "bg-amber-100 text-amber-700",
    propostas: [
      { num: 16, titulo: "Fundo da Mineração", desc: "Fundo da Mineração com participação social e transparência." },
      { num: 17, titulo: "Contrapartida para PcD", desc: "Contrapartida da mineração para políticas de PcD nos municípios impactados." },
      { num: 18, titulo: "Rastreabilidade de rejeitos", desc: "Rastreabilidade e fiscalização de rejeitos de mineração." },
      { num: 19, titulo: "Selo Empresa Inclusiva", desc: "Selo Empresa Inclusiva do Pará para empresas que contratam PcD." },
    ]
  },
];

const faqItems = [
  { pergunta: "Quem é Cilmara Bonfim?", resposta: "Mulher surda, mãe, liderança comunitária de Parauapebas. Agente administrativa, inúmera da COMPED (Portaria DC492/25). Candidata a Deputada Estadual pelo AVANTE — 70700." },
  { pergunta: "A candidata é surda?", resposta: "Sim. A campanha fala Libras. Cilmara nasceu surda e é usuária de Libras desde criança." },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  const shareWhatsApp = () => {
    const msg = encodeURIComponent("Vote 70700 — Cilmara Bonfim — Deputada Estadual — Pará — AVANTE. Inclusão que transforma!");
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-blue-600">
                <AvatarImage src={candidato.foto} alt={candidato.nome} />
                <AvatarFallback>{candidato.nome[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-base leading-tight">{candidato.nome} {candidato.sobrenome}</p>
                <p className="text-xs text-muted-foreground">{candidato.partido} • {candidato.numero} • {candidato.estado}</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <button onClick={() => scrollToSection("quem-sou")} className="hover:text-blue-600 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection("eixos")} className="hover:text-blue-600 transition-colors">Propostas</button>
              <button onClick={() => scrollToSection("atuacao")} className="hover:text-blue-600 transition-colors">Atuação</button>
              <button onClick={() => scrollToSection("faq")} className="hover:text-blue-600 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection("contato")} className="hover:text-blue-600 transition-colors">Contato</button>
              <Button onClick={() => scrollToSection("como-votar")} className="bg-blue-600 hover:bg-blue-700 text-white">
                Vote 70700
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <Badge className="bg-amber-500 text-amber-900 mb-4 text-sm px-4 py-1">
                {candidato.cargo} • {candidato.partido} • {candidato.estado}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Inclusão começa onde a pessoa é ouvida.
              </h1>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed max-w-xl">
                Sou Cilmara Bonfim, mulher surda, mãe e liderança comunitária de Parauapebas. Conheço, por dentro, as barreiras que PcD, surdos, autistas, mães atípicas e cuidadoras enfrentam. Atuei como inúmera da COMPED e disputo a Assembleia do Pará para transformar essa vivência em direitos estaduais.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button size="lg" onClick={() => scrollToSection("contato")} className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  Quero apoiar
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("eixos")} className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                  Ver propostas
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
                <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-amber-500 shadow-2xl">
                  <AvatarImage src={candidato.foto} alt={candidato.nome} className="object-cover" />
                  <AvatarFallback className="text-4xl">{candidato.nome[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-amber-950 px-6 py-2 rounded-full font-bold text-xl shadow-lg">
                  70700
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso TSE */}
      <div className="bg-amber-50 border-b border-amber-200 py-2">
        <div className="container mx-auto px-4">
          <p className="text-amber-800 text-sm text-center flex items-center justify-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Pedido de registro no TSE em 31/08/2026 — aguardando julgamento
          </p>
        </div>
      </div>

      {/* Quem é */}
      <section id="quem-sou" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem é Cilmara Bonfim</h2>
              <Separator className="w-24 h-1 bg-blue-600 mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">{candidato.nomeCompleto}</CardTitle>
                    <CardDescription className="text-base">{candidato.cargo} • {candidato.partido} • {candidato.estado}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {candidato.nome} {candidato.sobrenome} é mulher surda, mãe e liderança comunitária de Parauapebas, no Pará. Nasceu em Tucuruí em 6 de outubro de 1982 e cresceu em Parauapebas, onde construiu vínculo com a comunidade surda, com famílias atípicas e com organizações da pessoa com deficiência.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Trabalha como agente administrativa. Em 2025, foi nomeada alcoh da Coordenadoria Municipal da Pessoa com Deficiência (COMPED), em Portaria DC492/25. Na COMPED, articulou ações de autismo, acessibilidade, cidadania e cuidado com mulheres PcD e mães atípicas.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Experiência</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Mulher surda, usuária de Libras</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Mãe e liderança comunitária em Parauapebas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Agente administrativa com conhecimento da máquina pública</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Coordenadora da COMPED (Portaria DC492/25)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Histórico eleitoral: 2020, 2022, 2024 e 2026</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section id="trajetoria" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trajetória</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A campanha é construção. Cada etapa construiu a líder que sou hoje.</p>
            <Separator className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { ano: "2020", evento: "Candidata a vereadora em Parauapebas", partido: "MDB 15100" },
                { ano: "2022", evento: "Primeira disputa estadual", partido: "Republicanos 10800" },
                { ano: "2024", evento: "Vereança em Parauapebas", partido: "AVANTE 70700" },
                { ano: "2025", evento: "Posse na COMPED", partido: "Coordenadora Municipal da Pessoa com Deficiência" },
                { ano: "2026", evento: "Candidata a Deputada Estadual", partido: "AVANTE 70700" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.ano}
                  </div>
                  <Card className="flex-1 border-0 shadow-md">
                    <CardContent className="pt-4">
                      <p className="font-semibold">{item.evento}</p>
                      <p className="text-sm text-muted-foreground">{item.partido}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que sou candidata */}
      <section id="por-que" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Por que sou candidata</h2>
            <Separator className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic mb-8 leading-relaxed">
              "Minha história me ensinou que inclusão não pode ser promessa distante. Ela precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito."
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Porque inclusão não pode ser promessa distante. Precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito. Foi por isso que escolhi transformar vivência em luta coletiva — primeiro como ativista comunitária, depois na gestão da COMPED, agora na disputa pela Assembleia do Pará.
            </p>
            <Button onClick={() => scrollToSection("eixos")} className="bg-blue-600 hover:bg-blue-700">
              Ver propostas por eixo
            </Button>
          </div>
        </div>
      </section>

      {/* O que faz uma Deputada Estadual */}
      <section id="cargo" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que faz uma Deputada Estadual</h2>
              <Separator className="w-24 h-1 bg-blue-600 mx-auto" />
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A Assembleia Legislativa do Pará vota leis, fiscaliza o Executivo, decide o orçamento do estado e recebe demandas dos municípios. Uma Deputada Estadual pode criar políticas estaduais de inclusão, indicar prioridades ao Executivo, fiscalizar secretarias e serviços, e propor emendas ao orçamento para áreas como saúde, educação, trabalho, mobilidade e acessibilidade.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Votar leis estaduais que organizem políticas para PcD, surdos, TEA, mães atípicas e idosos",
                    "Fiscalizar secretarias, hospitais regionais e transporte",
                    "Propor emendas ao orçamento para garantir serviços acessíveis",
                    "Realizar audiências públicas e reuniões com famílias, associações e municípios",
                    "Encaminhar demandas do interior à máquina pública estadual"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Eixos */}
      <section id="eixos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quatro eixos para o Pará inteiro</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">As 20 propostas da campanha estão organizadas em quatro eixos. O que cabe ao mandato assumimos como proposta. O que depende do Executivo ou do Congresso vira cobrança e articulação.</p>
            <Separator className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eixos.map((eixo, i) => {
              const Icon = eixo.icon;
              return (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => scrollToSection(`propostas-${eixo.id}`)}>
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${eixo.cor} flex items-center justify-center mb-3`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{eixo.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{eixo.propostas.length} propostas</p>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      Ver propostas <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Propostas Detalhadas */}
      <section id="propostas" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Propostas detalhadas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Cada proposta traz o problema e o que o mandato pode fazer. Propostas marcadas como "exige Executivo/Congresso" são cobranças e indicações.</p>
            <Separator className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>

          {eixos.map((eixo, i) => {
            const Icon = eixo.icon;
            return (
              <div key={i} id={`propostas-${eixo.id}`} className="max-w-5xl mx-auto mb-12">
                <div className={`flex items-center gap-3 mb-6 p-4 rounded-xl ${eixo.cor}`}>
                  <Icon className="h-6 w-6" />
                  <h3 className="text-xl font-bold">{eixo.titulo}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {eixo.propostas.map((proposta, j) => (
                    <Card key={j} className="border-0 shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {proposta.num}
                          </div>
                          <CardTitle className="text-base">{proposta.titulo}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{proposta.desc}</p>
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
      <section id="atuacao" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como tenho atuado</h2>
              <Separator className="w-24 h-1 bg-blue-600 mx-auto" />
            </div>
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Em 2025, assumi a Coordenadoria Municipal da Pessoa com Deficiência (COMPED) de Parauapebas. Coordenei diversas ações de inclusão, acessibilidade e cuidado. Cada entrega é ato da Prefeitura com a COMPED. Quero levar essas entregas para o estado.
                </p>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {entregasCOMPED.map((entrega, i) => (
                <Card key={i} className="border-0 shadow-md">
                  <CardContent className="flex items-start gap-4 pt-4">
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                      {entrega.mes}
                    </div>
                    <div>
                      <p className="font-medium">{entrega.titulo}</p>
                      <p className="text-sm text-muted-foreground">{entrega.local}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas frequentes</h2>
              <Separator className="w-24 h-1 bg-blue-600 mx-auto" />
            </div>
            <div className="space-y-2">
              {faqItems.map((item, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left px-4 py-4 font-medium hover:bg-slate-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    {item.pergunta}
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-muted-foreground text-sm">
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
      <section id="como-votar" className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Vote className="h-16 w-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Como votar no dia da eleição</h2>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-xl mx-auto mb-8">
            <p className="text-5xl font-bold mb-4">70700</p>
            <p className="text-xl mb-2">Deputada Estadual</p>
            <p className="text-lg opacity-90">Pará • AVANTE</p>
            <p className="font-bold text-amber-300 mt-4">Cilmara Bonfim</p>
          </div>
          <div className="text-left max-w-xl mx-auto bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
            <p className="font-semibold mb-3">No dia da votação:</p>
            <ol className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-white text-green-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                Dirija-se à sua seção eleitoral
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-white text-green-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                Digite <strong>70700</strong> no teclado da urna
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-white text-green-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                Confirme o nome "Cilmara Bonfim" na tela
              </li>
            </ol>
          </div>
          <Button size="lg" onClick={shareWhatsApp} className="bg-green-500 hover:bg-green-600 text-white">
            <Share2 className="h-5 w-5 mr-2" /> Compartilhar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale com a campanha</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Escolha o tipo de contato e preencha o formulário. Responderemos assim que possível.</p>
            <Separator className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Formulário */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>Selecione o assunto e preencha seus dados.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipo">Assunto</Label>
                    <select
                      id="tipo"
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    >
                      {formOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input id="nome" placeholder="Seu nome completo" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" placeholder="(00) 00000-0000" value={formData.telefone} onChange={(e) => setFormData({...formData, telefone: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea id="mensagem" placeholder="Escreva sua mensagem aqui..." className="min-h-[120px]" value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Informações de contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefone</p>
                      <p className="font-medium">{candidato.telefone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail</p>
                      <p className="font-medium">{candidato.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CNPJ</p>
                      <p className="font-medium">{candidato.cnpj}</p>
                      <p className="text-sm text-muted-foreground">{candidato.municipio}/{candidato.estado}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Redes sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Instagram className="h-4 w-4 mr-2" /> {redeSocial.instagram}
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Facebook className="h-4 w-4 mr-2" /> {redeSocial.facebook}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-10 w-10 border-2 border-blue-400">
                  <AvatarImage src={candidato.foto} alt={candidato.nome} />
                  <AvatarFallback>{candidato.nome[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{candidato.nome} {candidato.sobrenome}</p>
                  <p className="text-sm text-slate-400">{candidato.cargo} • {candidato.partido}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Compromisso com inclusão, acessibilidade e direitos para todos os paraenses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection("quem-sou")} className="hover:text-white transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection("eixos")} className="hover:text-white transition-colors">Propostas</button></li>
                <li><button onClick={() => scrollToSection("atuacao")} className="hover:text-white transition-colors">Atuação</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection("contato")} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Acessibilidade</h4>
              <p className="text-slate-400 text-sm mb-2">Esta página é pensada para acesso em Libras. Vídeos legendados e navegação por teclado em breve.</p>
              <p className="text-slate-500 text-xs">Política de Privacidade e LGPD disponíveis mediante solicitação.</p>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2026 {candidato.nome} {candidato.sobrenome} — Todos os direitos reservados</p>
            <div className="text-slate-500 text-xs text-center md:text-right">
              <p>CNPJ: {candidato.cnpj} • {candidato.municipio}/{candidato.estado}</p>
              <p className="mt-1 text-amber-500">Pedido de registro no TSE em 31/08/2026 — aguardando julgamento</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
