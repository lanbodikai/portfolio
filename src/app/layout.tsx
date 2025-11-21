import "@/app/globals.css";
import { Orbitron, Roboto } from "next/font/google";

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

export const metadata = {
  title: "Kai Zhao – ROG Portfolio",
  description: "Engineer ⇄ PM — CV, interfaces, and product sense.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-[#060606] text-white ${orbitron.variable} ${roboto.variable}`}>
      {/* Load FontAwesome just like the reference HTML */}
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}