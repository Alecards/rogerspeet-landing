export const metadata = {
  title: "Rogers Peet Company — Coming Soon",
  description: "Respectable, Conservative and Clean",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
