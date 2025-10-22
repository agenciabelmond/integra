import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "+5585999223535"
  const message = "Olá! Vim pelo site e gostaria de mais informações."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-3 rounded-full bg-[#0fbb4e] px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#20b955] animate-pulse"
    >
      <MessageCircle className="h-6 w-6" />
      <span>Entrar em contato</span>

      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white shadow-[0_0_0_2px_#0fbb4e]">
        3
      </span>
    </Link>
  )
}
