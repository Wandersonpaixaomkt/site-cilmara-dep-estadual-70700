import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Users, Target, Heart, Shield, BookOpen, Facebook, Instagram, Twitter, Youtube, ChevronRight, CheckCircle2, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const candidato = {
  nome: "Maria Silva",
  sobrenome: "Santos",
  numero: "12345",
  cargo: "Deputada Estadual",
  partido: "PSB",
  estado: "São Paulo",
  slogan: "Educação que transforma, Saúde que cuida, Futuro que соединae!",
  foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  bio: "Professora, mãe e ativista social com mais de 15 anos de atuação na vida pública. Formada em Pedagogia pela USP, especialização em Políticas Públicas e mestrado em Educação Inclusiva. Representou a comunidade durante dois mandatos como vereadora em São Paulo, onde aprovou 47 projetos de lei em prol da educação e inclusão.",
  experiencia: [
    "Vereadora - Câmara Municipal de São Paulo (2017-2024)",
    "Presidente da Comissão de Educação (2019-2021)",
    "Professora da Rede Pública - 12 anos",
    "Fundadora do Instituto EducaSP"
  ],
  redes: {
    facebook: "@MariaSilvaDeputada",
    instagram: "@mariasilva_sp",
    twitter: "@MariaSilvaSP",
    youtube: "Canal Maria Silva"
  },
  telefone: "(11) 99999-9999",
  email: "contato@mariasilva.com.br",
  endereco: "Av. Paulista, 1000 - Sala 501, São Paulo - SP"
};

const propostas = [
  {
    icon: BookOpen,
    titulo: "Educação de Qualidade",
    cor: "bg-blue-100 text-blue-700",
    itens: [
      "Ampliar vagas em creches em tempo integral",
      "Investir em tecnologia nas escolas públicas",
      "Formação continuada para professores",
      "Programa de alimentação escolar saudável"
    ]
  },
  {
    icon: Heart,
    titulo: "Saúde para Todos",
    cor: "bg-red-100 text-red-700",
    itens: [
      "Reduzir filas no SUS com mutirões",
      "Ampliar Unidades Básicas de Saúde",
      "Investir em saúde mental nas escolas",
      "Programa de prevenção ao diabetes"
    ]
  },
  {
    icon: Users,
    titulo: "Proteção Social",
    cor: "bg-green-100 text-green-700",
    itens: [
      "Creches públicas em tempo integral",
      "Apoio a mães solo no mercado de trabalho",
      "Programa de habitação popular",
      "Assistência aos idosos e PCDs"
    ]
  },
  {
    icon: Shield,
    titulo: "Segurança Pública",
    cor: "bg-yellow-100 text-yellow-700",
    itens: [
      "Policiamento comunitário nas escolas",
      "Programa de valorização dos agentes",
      "Integração das forças de segurança",
      "Prevenção ao tráfico de drogas"
    ]
  },
  {
    icon: Target,
    titulo: "Trabalho e Renda",
    cor: "bg-purple-100 text-purple-700",
    itens: [
      "Cursos profissionalizantes gratuitos",
      "Incentivo ao empreendedorismo jovem",
      "Programa de estágio para estudantes",
      "Apoio ao pequeno empresário"
    ]
  },
  {
    icon: MessageSquare,
    titulo: "Transparência",
    cor: "bg-orange-100 text-orange-700",
    itens: [
      "Portal de prestação de contas online",
      "Audiências públicas mensais",
      "Ouvidoria acessível 24 horas",
      "Transparência nos gastos públicos"
    ]
  }
];

function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src={candidato.foto} alt={candidato.nome} />
                <AvatarFallback>{candidato.nome[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-lg leading-tight">{candidato.nome} {candidato.sobrenome}</p>
                <p className="text-sm text-muted-foreground">{candidato.partido} • {candidato.numero}</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("sobre")} className="text-sm font-medium hover:text-primary transition-colors">Sobre</button>
              <button onClick={() => scrollToSection("propostas")} className="text-sm font-medium hover:text-primary transition-colors">Propostas</button>
              <button onClick={() => scrollToSection("contato")} className="text-sm font-medium hover:text-primary transition-colors">Contato</button>
              <Button className="bg-green-600 hover:bg-green-700">
                Vote 12345
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <Badge className="bg-yellow-500 text-yellow-900 mb-4 text-sm px-4 py-1">
                {candidato.cargo} • {candidato.partido} • {candidato.estado}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {candidato.nome} {candidato.sobrenome}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 italic">
                "{candidato.slogan}"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  Vote 12345
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                  Conheça as Propostas
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
                <Avatar className="h-72 w-72 md:h-96 md:w-96 border-4 border-yellow-500 shadow-2xl">
                  <AvatarImage src={candidato.foto} alt={candidato.nome} className="object-cover" />
                  <AvatarFallback className="text-4xl">{candidato.nome[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                  12345
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a Candidata</h2>
              <Separator className="w-24 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">{candidato.nome} {candidato.sobrenome}</CardTitle>
                    <CardDescription className="text-base">{candidato.cargo} • {candidato.partido} • {candidato.estado}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{candidato.bio}</p>
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
                      {candidato.experiencia.map((exp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{exp}</span>
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

      {/* Propostas */}
      <section id="propostas" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Propostas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Compromissos com você e com o futuro do nosso estado</p>
            <Separator className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {propostas.map((proposta, i) => {
              const Icon = proposta.icon;
              return (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${proposta.cor} flex items-center justify-center mb-2`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{proposta.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {proposta.itens.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Sua voz é importante para mim. Entre em contato e faça parte dessa mudança!</p>
            <Separator className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Formulário */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entrarei em contato com você.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input id="nome" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea id="mensagem" placeholder="Escreva sua mensagem aqui..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefone</p>
                      <p className="font-medium">{candidato.telefone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail</p>
                      <p className="font-medium">{candidato.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Endereço</p>
                      <p className="font-medium">{candidato.endereco}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Youtube className="h-4 w-4" />
                      YouTube
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vamos juntos construir um futuro melhor!</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">Contribua com a campanha e ajude a espalhar nossa mensagem de esperança e mudança.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
              Doe para a Campanha
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              Seja Voluntário
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-10 w-10 border-2 border-primary">
                  <AvatarImage src={candidato.foto} alt={candidato.nome} />
                  <AvatarFallback>{candidato.nome[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{candidato.nome} {candidato.sobrenome}</p>
                  <p className="text-sm text-slate-400">{candidato.cargo}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Compromisso com a transparência, educação e saúde para todos os cidadãos.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection("sobre")} className="hover:text-white transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection("propostas")} className="hover:text-white transition-colors">Propostas</button></li>
                <li><button onClick={() => scrollToSection("contato")} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>{candidato.telefone}</li>
                <li>{candidato.email}</li>
                <li>{candidato.endereco}</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 {candidato.nome} {candidato.sobrenome} - Todos os direitos reservados
            </p>
            <p className="text-slate-500 text-xs">
              CNPJ: 00.000.000/0001-00 • {candidato.partido} • {candidato.estado}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
