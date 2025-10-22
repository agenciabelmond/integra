import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Íntegra Odontologia",
  description: "Conecte-se agora com a equipe da Íntegra Odontologia e continue seu agendamento com segurança.",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logointegra-vb8h95bNZZ4qFWhL12KlSAskft17L5.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
