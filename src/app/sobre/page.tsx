import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Sobre() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a CGM Sistemas</h1>
                        <p className="text-xl">Inovando na automação comercial desde 1993</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
                                <p className="text-lg mb-4 text-justify">
                                    A CGM Sistemas nasceu em 1993 com a missão de oferecer soluções inovadoras em automação comercial.
                                    Ao longo de mais de três décadas, nos consolidamos como referência no mercado.
                                </p>
                                <p className="text-lg mb-4 text-justify">
                                    Desde o início, nosso compromisso foi entender as necessidades dos nossos clientes e desenvolver
                                    soluções que tornassem seus negócios mais eficientes e competitivos. Com um time altamente
                                    qualificado e apaixonado por tecnologia, crescemos junto com nossos parceiros, acompanhando
                                    as transformações do mercado e inovando constantemente.
                                </p>
                            </div>
                            <div className="relative h-[350px]">
                                <Image
                                    src="/sobrenos.jpg"
                                    alt="Equipe CGM Sistemas"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <p className="text-lg mb-4 text-justify">
                            Hoje, atuamos em diversas frentes, oferecendo softwares e serviços que impulsionam a produtividade
                            e garantem segurança nas operações comerciais. Nossa trajetória é marcada pela confiança de milhares
                            de clientes e pelo compromisso contínuo com a excelência.
                        </p>
                        <p className="text-lg mb-4 text-justify">
                            Seguimos avançando, sempre focados no futuro e na criação de novas soluções que transformam negócios
                            e fazem a diferença no dia a dia de nossos clientes.
                        </p>

                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Valores</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">Inovação</h3>
                                <p>Buscamos constantemente novas tecnologias e soluções para nossos clientes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">Compromisso</h3>
                                <p>Nos dedicamos a entregar soluções eficientes e confiáveis, sempre priorizando a satisfação dos clientes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">Excelência</h3>
                                <p>Prezamos pela qualidade em cada detalhe, garantindo alto desempenho e segurança em nossos produtos.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">Ética</h3>
                                <p>Atuamos com transparência e responsabilidade, construindo relações de confiança com nossos clientes e parceiros.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">Colaboração</h3>
                                <p>Acreditamos no trabalho em equipe e na construção de um ambiente de parceria e crescimento mútuo.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
                                <p>Buscamos um impacto positivo na sociedade, adotando práticas sustentáveis e responsáveis.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}