"use client";

import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import { InfoDialog } from "./info-dialog";
import { LeaderboardDialog } from "./leaderboard-dialog";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTypingStore } from "@/lib/store";

interface HeaderProps {
  onRestart: () => void;
}

export function Header({ onRestart }: HeaderProps) {
  const { currentTheme } = useTypingStore();
  const shouldInvert = currentTheme !== "classic-light";
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <button onClick={onRestart} className="mr-4 pt-4 flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={isMobile ? 100 : 140}
            height={isMobile ? 100 : 140}
            className={shouldInvert ? "invert" : ""}
          />
        </button>
        {isMobile ? (
          <div className="flex items-center">
            <InfoDialog />
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <LeaderboardDialog />
            <Link href="https://github.com/amar13mehta" target="_blank">
              <Button variant="ghost" size="icon" aria-label="View on GitHub">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Button>
            </Link>
            {/* <InfoDialog /> */}
            {/* <SettingsDialog /> */}
          </div>
        )}
      </div>
    </header>
  );
}
