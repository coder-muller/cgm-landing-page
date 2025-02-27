'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { ArrowRight, Pill, Building, Droplet, Wheat, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Sistemas() {

    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element) {
                        const yOffset = -120;
                        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                }, 100);
            }
        }
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Sistemas</h1>
                        <p className="text-xl mb-8">Soluções completas e integradas para diversos segmentos do comércio.</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div id="farmacias">
                                <div className="flex items-center gap-2 mb-4">
                                    <Pill className="h-8 w-8 text-blue-700" />
                                    <h2 className="text-3xl font-bold">Farmácias e Drogarias</h2>
                                </div>
                                <p className="text-lg mb-6">
                                    {`Sistema completo para gestão de farmácias e drogarias, com controle de medicamentos, integração com
                                    PBM's, e conformidade com todas as exigências da ANVISA.`}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Controle de medicamentos controlados</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Integração com sistemas de convênios</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Gestão de estoque e validade de produtos</span>
                                    </li>
                                </ul>
                                <Link href='/contato'>
                                    <Button className="bg-blue-700 hover:bg-blue-800">Saiba mais</Button>
                                </Link>
                            </div>
                            <div className="relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/farmacia.jpg"
                                    alt="Sistema para Farmácias e Drogarias"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <div id="lojas" className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/lojas.jpg"
                                    alt="Sistema para Lojas e Mercados"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <Building className="h-8 w-8 text-blue-700" />
                                    <h2 className="text-3xl font-bold">Lojas e Mercados</h2>
                                </div>
                                <p className="text-lg mb-6">
                                    Solução completa para o varejo, desde pequenas lojas até grandes redes de supermercados, com controle
                                    de estoque, vendas, financeiro e fiscal integrados.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>PDV rápido e intuitivo</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Controle de estoque multi-filial</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Gestão de promoções e fidelidade</span>
                                    </li>
                                </ul>
                                <Link href='/contato'>
                                    <Button className="bg-blue-700 hover:bg-blue-800">Saiba mais</Button>
                                </Link>
                            </div>
                        </div>

                        <div id="postos" className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Droplet className="h-8 w-8 text-blue-700" />
                                    <h2 className="text-3xl font-bold">Postos de Combustíveis</h2>
                                </div>
                                <p className="text-lg mb-6">
                                    Sistema integrado para postos de combustíveis, com controle de bombas, tanques, loja de conveniência e
                                    gestão completa do negócio.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Integração com bombas e tanques</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Controle de abastecimentos e troca de óleo</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Gestão da loja de conveniência</span>
                                    </li>
                                </ul>
                                <Link href='/contato'>
                                    <Button className="bg-blue-700 hover:bg-blue-800">Saiba mais</Button>
                                </Link>
                            </div>
                            <div className="relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/posto.jpg"
                                    alt="Sistema para Postos de Combustíveis"
                                    fill
                                    objectPosition="0px -30px"
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <div id="silos" className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/silos.jpg"
                                    alt="Sistema para Silos e Armazéns"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <Wheat className="h-8 w-8 text-blue-700" />
                                    <h2 className="text-3xl font-bold">Silos e Armazéns</h2>
                                </div>
                                <p className="text-lg mb-6">
                                    Solução especializada para gestão de silos e armazéns, com controle de armazenamento, pesagem e
                                    rastreabilidade de grãos.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Controle de entrada e saída de grãos</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Gestão de umidade e qualidade</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Rastreabilidade completa</span>
                                    </li>
                                </ul>
                                <Link href='/contato'>
                                    <Button className="bg-blue-700 hover:bg-blue-800">Saiba mais</Button>
                                </Link>
                            </div>
                        </div>

                        <div id="financeiro" className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <BarChart3 className="h-8 w-8 text-blue-700" />
                                    <h2 className="text-3xl font-bold">Financeiro</h2>
                                </div>
                                <p className="text-lg mb-6">
                                    Módulo financeiro completo e integrado, oferecendo controle total das finanças da sua empresa,
                                    independente do segmento.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Contas a pagar e receber</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Fluxo de caixa e DRE</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-5 w-5 text-blue-700" />
                                        <span>Integração bancária</span>
                                    </li>
                                </ul>
                                <Link href='/contato'>
                                    <Button className="bg-blue-700 hover:bg-blue-800">Saiba mais</Button>
                                </Link>
                            </div>
                            <div className="relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/financeiro.jpg"
                                    alt="Sistema Financeiro"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h2>
                        <p className="text-xl mb-8">
                            Entre em contato conosco e descubra como nossos sistemas podem ajudar sua empresa a crescer.
                        </p>
                        <Link href='/contato'>
                            <Button className="bg-blue-700 hover:bg-blue-800">Entre em contato</Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    );
}