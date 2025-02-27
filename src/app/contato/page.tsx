'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [status, setStatus] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (data: { name: string, email: string, message: string }) => {
        setIsSending(true);
        console.log(data)
        try {
            await emailjs.send(
                "service_j2u0709", //Service ID
                "template_g7zeh2l", //Template ID
                data,
                "Go-mZ5vERw4cu8J41" // Public Key
            );
            setIsSending(false);
            setStatus("success");
            reset();
        } catch (error) {
            console.error("Erro ao enviar o e-mail:", error);
            setIsSending(false);
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
                        <p className="text-xl">Estamos aqui para ajudar. Como podemos atendê-lo?</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Informações de Contato</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="h-6 w-6 text-blue-700" />
                                        <span>Rua José Bonifácio, 203, Prado, Canguçu - RS, 96600-000</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Phone className="h-6 w-6 text-blue-700" />
                                        <span>(53) 3252-2485 | (53) 98118-1800</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Mail className="h-6 w-6 text-blue-700" />
                                        <span>contato@cgmsistemas.com.br</span>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold mb-2">Horário de Atendimento</h3>
                                    <p>Segunda a Sexta: 8h às 11:30h & 13:30h às 18:00h</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Envie uma Mensagem</h2>
                                <form onSubmit={handleSubmit((data) => sendEmail(data as { name: string; email: string; message: string; }))} className="bg-white p-6 rounded-lg shadow-lg border ">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium">Nome</label>
                                        <input
                                            type="text"
                                            {...register("name", { required: "Nome é obrigatório" })}
                                            className="w-full border border-gray-200 rounded-lg p-2"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message?.toString()}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium">E-mail</label>
                                        <input
                                            type="email"
                                            {...register("email", { required: "E-mail é obrigatório", pattern: { value: /^\S+@\S+$/, message: "E-mail inválido" } })}
                                            className="w-full border border-gray-200 rounded-lg p-2"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message?.toString()}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium">Mensagem</label>
                                        <textarea
                                            {...register("message", { required: "Mensagem é obrigatória" })}
                                            className="w-full border border-gray-200 rounded-lg p-2"
                                            rows={4}
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message?.toString()}</p>}
                                    </div>

                                    {isSending ? (
                                        <Button type="submit" disabled className="bg-blue-700 text-white w-full">
                                            Enviando...
                                        </Button>
                                    ) : (
                                        <Button type="submit" className="bg-blue-700 text-white w-full">
                                            Enviar
                                        </Button>
                                    )}

                                    {status === "success" && <p className="text-green-500 mt-2">Mensagem enviada com sucesso!</p>}
                                    {status === "error" && <p className="text-red-500 mt-2">Erro ao enviar. Tente novamente.</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Suporte Técnico</h2>
                        <p className="text-xl mb-8">
                            Precisa de ajuda técnica? Nossa equipe de suporte está pronta para atendê-lo.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}