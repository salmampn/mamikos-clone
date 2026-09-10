import { Navbar } from "@/components/layout/Navbar";
import { Topbar } from "@/components/layout/Topbar";

type HeaderProps = {
  onOpenLogin: (role?: "tenant" | "owner") => void;
  showSearch?: boolean;
  onOpenSearch?: () => void;
  className?:string
};

export function Header({ onOpenLogin, showSearch = false, onOpenSearch, className }: HeaderProps) {
  return (
    <header className={`${className} sticky top-0 z-50 w-full bg-background`}>
      <Topbar className="hidden lg:block"/>
      <Navbar
        onOpenLogin={onOpenLogin}
        showSearch={showSearch}
        onOpenSearch={onOpenSearch}
      />
    </header>
  );
}