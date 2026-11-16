import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollProgress from "./ScrollProgress";
import { serviceLinks } from "@/lib/services";

/** Header, footer, scroll bar and skip link shared by every public page. */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header services={serviceLinks} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
