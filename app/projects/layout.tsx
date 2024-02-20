import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element{
  return (
    <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
      
        {children}
      
    </section>
  );
}
