import Link from 'next/link';

export default function AIForHRChecklist() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
              Essential AI for HR Checklist
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are busy developing a curated checklist for you. In the meantime, give this a try:
            </p>
            <Link
              href="https://chatgpt.com/?q=Act%20as%20a%20genius%20HR%20consultant%20who%20is%20an%20expert%20on%20GenAI.Help%20me%20write%20a%20book%20with%20advice%20on%20adopting%20AI%20written%20for%20HR%20leaders.First%2C%20outline%20a%20list%20of%2025%20of%20the%20most%20critical%20things%20HR%20leaders%20should%20do%20when%20starting%20to%20guide%20their%20HR%20department%20in%20adopting%20AI%20in%20order%20to%20improve%20productivity%20and%20quality%20of%20their%20work."
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Generate AI for HR Checklist
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
