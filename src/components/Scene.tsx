import { PropsWithChildren } from "react";

export function Scene({ id, children }: PropsWithChildren<{ id: string }>) {
  return <section id={id} className="scroll-mt-24 py-24 md:py-36">{children}</section>;
}

export function Heading({ children }: PropsWithChildren) {
  return <h2 className="text-3xl font-semibold md:text-5xl">{children}</h2>;
}

export function Paragraph({ children }: PropsWithChildren) {
  return <p className="text-white/80">{children}</p>;
}
