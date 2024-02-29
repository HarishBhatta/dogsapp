import { Inter } from "next/font/google";
import "./globals.css";
import SearchProvider from "../context/SearchContext";
import NavBar from "../components/navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const Metadata = {
  title: "Dogs App",
  description: "Demo of Dogs Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <Header />
          <NavBar />
          {children}
          <Footer />
        </SearchProvider>
        </body>
    </html>
  );
}
