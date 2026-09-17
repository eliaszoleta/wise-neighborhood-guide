import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

interface LayoutProps {
  children: React.ReactNode;
  /** Pass false to suppress the top leaderboard ad (e.g. on the homepage hero) */
  showTopAd?: boolean;
}

const Layout = ({ children, showTopAd = true }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Top leaderboard ad — shown between header and page content */}
      {showTopAd && (
        <div className="border-b border-border bg-muted/30 py-2 px-4">
          <div className="mx-auto max-w-7xl">
            <AdSlot slot="0000000001" format="horizontal" className="mx-auto max-w-[728px]" />
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
