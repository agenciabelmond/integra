import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#2a2d4c]">
      <header className="flex items-center justify-center gap-3 bg-white px-4 py-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logointegra-vb8h95bNZZ4qFWhL12KlSAskft17L5.png"
          alt="Íntegra Odontologia"
          width={80}
          height={80}
          className="h-20 w-auto object-contain"
          priority
        />
        <h1 className="text-3xl font-normal tracking-tight text-black md:text-4xl">Íntegra Odontologia</h1>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
        <p className="mb-8 text-xl font-normal leading-relaxed text-white/95 md:text-2xl">
          Conecte-se agora com a equipe da Íntegra Odontologia e
          <br className="hidden sm:block" /> continue seu agendamento com segurança.
        </p>

        <h2 className="mb-10 max-w-3xl text-balance text-3xl font-bold leading-snug text-white md:text-5xl">
          Clique no botão abaixo para prosseguir seu atendimento
        </h2>

        <WhatsAppButton />
      </main>

      <footer className="flex items-center justify-center gap-2 bg-white px-8 py-6 text-sm text-gray-700">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logointegra-vb8h95bNZZ4qFWhL12KlSAskft17L5.png"
          alt="Íntegra"
          width={27}
          height={26}
          className="h-7 w-7"
        />
        <span>Íntegra Odontologia® Todos direitos reservados.</span>
      </footer>
    </div>
  )
}
