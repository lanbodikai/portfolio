import "@/app/globals.css";

export const metadata = {
  title: "Kai Zhao – Portfolio",
  description: "Engineer ⇄ PM — CV, interfaces, and product sense.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#0B0F1A] text-white">
      <body className="antialiased">{children}</body>
    </html>
  );
}
