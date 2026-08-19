import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs font-semibold uppercase text-accent">
          Not found
        </p>
        <h1 className="mt-3 text-4xl font-semibold">This page is not here.</h1>
        <p className="mt-4 leading-7 text-muted">
          The portfolio case you opened may have moved or has not been added yet.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
