interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {children}
    </main>
  );
}