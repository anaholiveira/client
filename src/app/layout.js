import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: 'Clínica',
  description: 'Projeto feito durante as disciplinas de Back-End e Front-End',
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