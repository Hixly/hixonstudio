import StarCanvas from "@/components/StarCanvas";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StarCanvas />
      <Nav />
      <main className="relative pt-20" style={{ zIndex: 10 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
