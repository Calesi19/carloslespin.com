import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg">
        {children}
      </div>
    </section>
  );
}
