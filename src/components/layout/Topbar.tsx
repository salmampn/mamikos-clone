import Link from "next/link";

import {
  promotionNavigationItem,
  topbarNavigationItems,
} from "@/constants/navigation";
import { Container } from "@/components/shared/Container";

export function Topbar() {
  const PromotionIcon = promotionNavigationItem.icon;

  return (
    <div className="bg-background">
      <Container className="flex h-10 items-center justify-between">
        <nav
          aria-label="Navigasi utilitas"
          className="flex h-full items-center gap-5"
        >
          {topbarNavigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground transition-colors hover:text-primary focus-visible:rounded-sm"
              >
                <Icon size={15} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          href={promotionNavigationItem.href}
          className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground transition-colors hover:text-primary focus-visible:rounded-sm"
        >
          <PromotionIcon size={15} aria-hidden="true" />
          <span>{promotionNavigationItem.label}</span>
        </Link>
      </Container>
    </div>
  );
}