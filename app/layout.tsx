export const metadata = {
  title: "Deal Control Engine",
  description: "AI deal intake, scoring, and buyer matching",
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
