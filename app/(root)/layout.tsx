// This is the layout.tsx file for the root pages. 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        Sidebar
        {children}
    </main>
  );
}
