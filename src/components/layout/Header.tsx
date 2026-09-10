import { Navbar } from "@/components/layout/Navbar";
import { Topbar } from "@/components/layout/Topbar";

type HeaderProps = {
  onOpenLogin: () => void;
};

export function Header({ onOpenLogin }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <Topbar />
      <Navbar onOpenLogin={onOpenLogin} />
    </header>
  );
}