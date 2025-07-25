import React from "react";
import "./globals.css";
import { RecurringProvider } from "../Context/RecurringContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Repeatify</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Comfortaa:wght@300..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RecurringProvider>{children}</RecurringProvider>
      </body>
    </html>
  );
}
