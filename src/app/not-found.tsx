import type { Metadata } from "next";
import NotFoundContent from "@/components/NotFoundContent";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = { title: "Page not found" };

// Addresses that match no route render outside the (site) layout,
// so this page brings its own header and footer.
export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundContent />
    </SiteShell>
  );
}
