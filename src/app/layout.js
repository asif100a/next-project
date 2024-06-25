import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next project",
    template: "%s | Next project"
  },

  description: "Next meals posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="min-h-screen">
          {/* Children Components */}
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
