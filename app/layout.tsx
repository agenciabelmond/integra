import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Script from "next/script"
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17676579914"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17676579914');
          `}
        </Script>

        {/* Event snippet for Contato conversion */}
        <Script id="conversion-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
                'send_to': 'AW-17676579914/K7ViCOWq-rIbEMro7OxB',
                'value': 1.0,
                'currency': 'BRL'
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
