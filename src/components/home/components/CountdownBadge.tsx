"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type CountdownBadgeProps = {
  endAt?: Date;
  variant?: "auto" | "desktop" | "mobile";
  className?: string;
};

type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

export function CountdownBadge({
  endAt,
  variant = "auto",
  className,
}: CountdownBadgeProps) {
  const targetTime = useMemo(() => {
    if (endAt) {
      return endAt.getTime();
    }

    const defaultDeadline = new Date();

    defaultDeadline.setDate(defaultDeadline.getDate() + 14);
    defaultDeadline.setHours(23, 59, 59, 999);

    return defaultDeadline.getTime();
  }, [endAt]);

  const calculateRemainingTime = useCallback((): RemainingTime => {
    const difference = Math.max(0, targetTime - Date.now());
    const totalSeconds = Math.floor(difference / 1000);

    return {
      days: Math.floor(totalSeconds / 86_400),
      hours: Math.floor((totalSeconds % 86_400) / 3_600),
      minutes: Math.floor((totalSeconds % 3_600) / 60),
      seconds: totalSeconds % 60,
      isFinished: difference === 0,
    };
  }, [targetTime]);

  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime,
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRemainingTime(calculateRemainingTime());

    const intervalId = window.setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [calculateRemainingTime]);

  if (variant === "mobile") {
    return (
      <MobileCountdown
        remainingTime={remainingTime}
        className={className}
      />
    );
  }

  if (variant === "desktop") {
    return (
      <DesktopCountdown
        remainingTime={remainingTime}
        className={className}
      />
    );
  }

  return (
    <>
      <div className="sm:hidden">
        <MobileCountdown
          remainingTime={remainingTime}
          className={className}
        />
      </div>

      <div className="hidden sm:block">
        <DesktopCountdown
          remainingTime={remainingTime}
          className={className}
        />
      </div>
    </>
  );
}

type CountdownContentProps = {
  remainingTime: RemainingTime;
  className?: string;
};

function MobileCountdown({
  remainingTime,
  className,
}: CountdownContentProps) {
  if (remainingTime.isFinished) {
    return (
      <div
        aria-live="polite"
        className={cn(
          "text-sm font-bold text-destructive",
          className,
        )}
      >
        Promo telah berakhir
      </div>
    );
  }

  return (
    <div
      aria-live="polite"
      className={cn(
        "flex items-center justify-between gap-3",
        className,
      )}
    >
      <div className="flex shrink-0 flex-col text-xs font-medium leading-tight text-muted-foreground">
        <span>Akan Berakhir</span>
        <span>dalam waktu:</span>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-secondary p-1">
        <span className="flex items-center justify-center rounded-md border border-border bg-card px-2.5 py-1 text-xs font-bold text-foreground">
          {remainingTime.days} Hari
        </span>

        <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
          <CountdownUnit value={formatTime(remainingTime.hours)} />
          <span>:</span>
          <CountdownUnit value={formatTime(remainingTime.minutes)} />
          <span>:</span>
          <CountdownUnit value={formatTime(remainingTime.seconds)} />
        </div>
      </div>
    </div>
  );
}

function DesktopCountdown({
  remainingTime,
  className,
}: CountdownContentProps) {
  if (remainingTime.isFinished) {
    return (
      <div
        aria-live="polite"
        className={cn(
          "text-sm font-bold text-destructive",
          className,
        )}
      >
        Promo telah berakhir
      </div>
    );
  }

  return (
    <div
      aria-live="polite"
      className={cn(
        "flex items-center gap-1.5 text-sm font-bold text-muted-foreground",
        className,
      )}
    >
      <span className="shrink-0">
        Akan berakhir dalam waktu:
      </span>

      <div className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-secondary p-1.5">
        <span className="rounded-sm bg-card px-1.5 py-1 text-xs text-foreground md:px-2 md:text-sm">
          {remainingTime.days} Hari
        </span>

        <span className="inline-flex items-center gap-1">
          <CountdownUnit value={formatTime(remainingTime.hours)} />
          <span className="text-muted-foreground">:</span>
          <CountdownUnit value={formatTime(remainingTime.minutes)} />
          <span className="text-muted-foreground">:</span>
          <CountdownUnit value={formatTime(remainingTime.seconds)} />
        </span>
      </div>
    </div>
  );
}

type CountdownUnitProps = {
  value: string;
};

function CountdownUnit({
  value,
}: CountdownUnitProps) {
  return (
    <span className="flex min-w-7 items-center justify-center rounded-sm bg-card px-1.5 py-1 text-xs text-foreground md:px-2 md:text-sm">
      {value}
    </span>
  );
}

function formatTime(value: number) {
  return String(value).padStart(2, "0");
}