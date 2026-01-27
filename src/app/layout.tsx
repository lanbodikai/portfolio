import "@/app/globals.css";
import { Orbitron, Playfair_Display, Roboto } from "next/font/google";
import ThemeProvider from "@/components/theme/ThemeProvider";

// Font setup
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: "swap", 
});

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  display: "swap", 
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Kai's Website",
  description: "Engineer ⇄ PM — CV, interfaces, and product sense.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${roboto.variable} ${playfair.variable} dark`}
      suppressHydrationWarning
    >
      {/* Load FontAwesome just like the reference HTML */}
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
