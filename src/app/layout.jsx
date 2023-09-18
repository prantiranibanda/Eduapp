import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduApp",
  description: "Personalised educational website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,0,0"
        />
      </head>
      <body className={`${inter.className} bg-[#fcf9e3]`}>
        <Navbar height="h-16"/>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}