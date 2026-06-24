export const metadata = {
 title: "Bolão Copa Ao Vivo",
 description: "Bolão com placar ao vivo"
};

export default function RootLayout({children}) {
 return (
  <html lang="pt-BR">
   <body>{children}</body>
  </html>
 );
}