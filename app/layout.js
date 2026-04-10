import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Elias Junior | Portfólio",
  description:
    "Portfólio profissional de Elias Junior Cunha - Desenvolvedor Full Stack e Engenheiro Civil",
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "Engenheiro Civil",
    "Portfólio",
  ],
  authors: [{ name: "Elias Junior Cunha" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
