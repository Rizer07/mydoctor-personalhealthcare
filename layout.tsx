import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Doctor – Personal Health Care",
  description: "Next-generation personal healthcare platform for patients, doctors, and clinics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
