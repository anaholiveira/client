import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: 'Clínica',
  description: 'Projeto Clínica',
  charset: 'UTF-8',
  author: 'Ana Gabriely de Oliveira',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}