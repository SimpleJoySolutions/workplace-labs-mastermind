import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2025{" "}
        <Link
          href="https://www.workplacelabs.io/"
          className="hover:underline"
          prefetch={false}
        >
          Workplace Labs
        </Link>
        . All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="https://www.workplacelabs.io/"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Created by Workplace Labs
        </Link>
        {/* <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Privacy
        </Link> */}
      </nav>
    </footer>
  );
};
