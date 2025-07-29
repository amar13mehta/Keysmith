import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

export function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="View information">
          <Info className="h-5 w-5" />
          <span className="sr-only">Information</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>About Keysmith</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground space-y-4">
            <span>
              Welcome to Keysmith! This project is inspired by the amazing{" "}
              <Link
                href="https://monkeytype.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                MonkeyType
              </Link>
              , but with a special twist - it&apos;s made specifically for
              developers!
            </span>

            <span className="block mt-4">
              We created Keysmith just for fun, allowing developers to test and
              improve their typing speed using real code snippets from various
              programming languages. Whether you&apos;re a Python enthusiast,
              JavaScript ninja, or Rust adventurer, Keysmith helps you become
              faster at typing what matters most - actual code.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">
              This is a fun project and is not affiliated with MonkeyType.
            </span>
            <span className="text-sm text-muted-foreground">
              Created by{" "}
              <Link
                href="https://x.com/amar13mehta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @amar13mehta
              </Link>
              {" • "}
              <Link
                href="http://git.new/catt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github
              </Link>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
