import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { LoadingProvider } from "@/contexts/LoadingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Platform",
  description: "Connect with service providers and requesters across various categories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMockMode = process.env.NEXT_PUBLIC_USE_MOCK_API === 'true';

  return (
    <html lang="en">
      <body className={inter.className}>
        {isMockMode && (
          <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black text-center py-2 text-sm font-medium z-50">
            🚀 Running in Mock Mode - No Backend Required
          </div>
        )}
        <AuthProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </AuthProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
