import '../styles/globals.css';

export const metadata = {
  title: "NotaryAI",
  description: "AI-powered notary business expansion engine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
