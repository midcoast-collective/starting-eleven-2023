import "./globals.css";
// import { Inter } from "next/font/google";

import StyledComponentsRegistry from "app/components/registry";
import Header from "app/components/header";
import Footer from "app/components/footer";

// const inter = Inter({ subsets: ["latin"], variable: "--font-courier" });

export const metadata = {
  title: "Starting Eleven",
  description: "Starting Eleven",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className={`${inter.variable}`}>
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
