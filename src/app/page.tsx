import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Building, ShoppingBag, Droplet, Wheat } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Header from "@/components/header"
import SegmentoCard from "@/components/segmentoCard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Automação Comercial desde 1993</h1>
            <p className="text-xl mb-8 text-blue-100">
              Soluções completas para farmácias, drogarias, lojas, mercados, postos de combustíveis e silos e armazéns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sistemas">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                  Conheça Nossos Sistemas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/photo-1.jpg" alt="Sistema CGM em uso" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          <SegmentoCard
            href="/sistemas#farmacia"
            icon={ShoppingBag}
            title="Farmácias e Drogarias"
            description="Controle completo de medicamentos, receitas e integração com sistemas de saúde."
          />
          <SegmentoCard
            href="/sistemas#lojas"
            icon={Building}
            title="Lojas e Mercados"
            description="PDV completo com controle de estoque, fiscal e financeiro integrados."
          />
          <SegmentoCard
            href="/sistemas#postos"
            icon={Droplet}
            title="Postos de Combustíveis"
            description="Gestão de bombas, tanques e loja de conveniência em um único sistema."
          />
          <SegmentoCard
            href="/sistemas#silos"
            icon={Wheat}
            title="Silos"
            description="Controle de armazenamento, pesagem e gestão de grãos com rastreabilidade."
          />
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre a CGM Sistemas</h2>
              <p className="text-lg mb-4">
                A nossa empresa nasceu em 1993 e consolidou-se no mercado através do comprometimento com nossos
                clientes.
              </p>
              <p className="text-lg mb-6">
                Hoje oferecemos soluções para automação de farmácias, drogarias, lojas, mercados, postos de combustíveis
                e silos. Tudo isso graças a um resultado de muito trabalho e dedicação, com a ajuda de nossos
                colaboradores.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span>Mais de 30 anos de experiência no mercado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span>Suporte técnico especializado e ágil</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span>Sistemas constantemente atualizados com as exigências fiscais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <span>Atendimento personalizado para cada cliente</span>
                </li>
              </ul>
              <Link href="/sobre">
                <Button className="mt-6 bg-blue-700 hover:bg-blue-800">Conheça Nossa História</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/photo-2.jpg"
                alt="Equipe CGM Sistemas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">O que nossos clientes dizem</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            A satisfação de nossos clientes é o nosso maior patrimônio.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  DF
                </div>
                <div>
                  <h4 className="font-bold">Drogaria Familiar</h4>
                  <p className="text-sm text-muted-foreground">Cliente desde 2010</p>
                </div>
              </div>
              <p className="italic">
                {`"O sistema da CGM revolucionou nossa gestão de medicamentos controlados. O suporte técnico é excelente e
                sempre nos atende com rapidez."`}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  SM
                </div>
                <div>
                  <h4 className="font-bold">Supermercado Modelo</h4>
                  <p className="text-sm text-muted-foreground">Cliente desde 2015</p>
                </div>
              </div>
              <p className="italic">
                {`"Desde que implementamos o sistema da CGM, nossa gestão de estoque melhorou significativamente.
                Conseguimos reduzir perdas e melhorar o controle."`}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  PC
                </div>
                <div>
                  <h4 className="font-bold">Posto Central</h4>
                  <p className="text-sm text-muted-foreground">Cliente desde 2018</p>
                </div>
              </div>
              <p className="italic">
                {`"O controle integrado de bombas e loja de conveniência facilitou muito nossa operação. Recomendo a todos
                do setor."`}

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para modernizar seu negócio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e descubra como nossos sistemas podem ajudar sua empresa a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                Entre em contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}