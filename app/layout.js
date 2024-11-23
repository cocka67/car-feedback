import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <title>авто отзыв</title>
      <meta name="description" content="Отзывы автосалонов."/>
      <body>
        {children}
      </body>
    </html>
  );
}

