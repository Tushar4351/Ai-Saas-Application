import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "../../components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>
        <main className="root">
          <Sidebar />
          <MobileNav />

          <div className="root-container">
              <div className="wrapper">
              {children}
            </div>
          </div>
          <Toaster />
        </main>
      </SignedIn>
      <SignedOut>
        <div>{children}</div>
      </SignedOut>
    </>
  );
};

export default Layout;
