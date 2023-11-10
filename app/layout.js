import "./globals.css";

import StyledComponentsRegistry from "@/app/components/registry";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function RootLayout({ children }) {
  return (
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
