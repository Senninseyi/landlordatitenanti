import { Footer } from './navigation/footer';
import { Header } from './navigation/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
