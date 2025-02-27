import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b sticky top-0 bg-white z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="CGM Sistemas"
                        width={150}
                        height={50}
                        className="h-12 w-auto"
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-blue-700">
                        Início
                    </Link>
                    <Link href="/sistemas" className="text-sm font-medium hover:text-blue-700">
                        Sistemas
                    </Link>
                    <Link href="/sobre" className="text-sm font-medium hover:text-blue-700">
                        Sobre
                    </Link>
                    <Link href="/contato" className="text-sm font-medium hover:text-blue-700">
                        Contato
                    </Link>
                </nav>
                <Link href='/contato'>
                    <Button className="bg-blue-700 hover:bg-blue-800">Entre em contato</Button>
                </Link>
            </div>
        </header>
    )
}