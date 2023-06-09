import "../styles/globals.css";

export const metadata = {
  title: "NextJS",
  description: "Next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
