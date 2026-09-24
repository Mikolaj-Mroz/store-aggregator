import Link from "next/link"

export default function HomePage() {
  return (
      <main className="min-h-screen bg-[#f4f4ef] text-[#202820]">
        <section className="mx-auto flex min-h-[88vh] max-w-375 items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left */}
            <div className="max-w-3xl">
              <p className="mb-5 font-mono text-xs tracking-[0.18em] text-[#657365] uppercase">
                Fashion discovery, simplified
              </p>

              <h1 className="max-w-4xl text-5xl leading-[0.95] font-bold tracking-tighter sm:text-6xl lg:text-7xl">
                Find clothes across
                <span className="block text-[#35663c]">
                multiple stores.
              </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#667066] sm:text-lg">
                Browse fashion products from different stores in one catalogue.
                Compare prices, sizes, availability, and discover what is actually
                worth checking out.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                    href="/products"
                    className="rounded-xl bg-[#202820] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2d382e]"
                >
                  Browse products
                </Link>

                <a
                    href="#how-it-works"
                    className="rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#354035] transition hover:bg-[#eceee8]"
                >
                  How it works
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 size-40 rounded-full bg-[#dce7d6] blur-3xl" />
              <div className="absolute -right-4 -bottom-8 size-48 rounded-full bg-[#eadfd1] blur-3xl" />

              <div className="relative overflow-hidden rounded-4xl border border-black/5 bg-[#fffef9] p-4 shadow-[0_30px_80px_rgba(35,49,37,0.12)]">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-3">
                    <div className="aspect-[0.8] rounded-2xl bg-[#d8ddd2]" />
                    <div className="rounded-2xl bg-[#eef0e8] p-4">
                      <div className="h-3 w-16 rounded-full bg-[#b9c2b7]" />
                      <div className="mt-3 h-4 w-4/5 rounded-full bg-[#8c998b]" />
                      <div className="mt-5 h-5 w-20 rounded-full bg-[#416b47]" />
                    </div>
                  </div>

                  <div className="space-y-3 pt-10">
                    <div className="rounded-2xl bg-[#eef0e8] p-4">
                      <div className="h-3 w-12 rounded-full bg-[#b9c2b7]" />
                      <div className="mt-3 h-4 w-3/4 rounded-full bg-[#8c998b]" />
                      <div className="mt-5 h-5 w-24 rounded-full bg-[#416b47]" />
                    </div>

                    <div className="aspect-[0.8] rounded-2xl bg-[#e2ddd3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
            id="how-it-works"
            className="border-t border-black/5 bg-[#fffef9]"
        >
          <div className="mx-auto max-w-375 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 font-mono text-xs tracking-[0.16em] text-[#728074] uppercase">
                How it works
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                One catalogue instead of ten tabs.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <FeatureCard
                  number="01"
                  title="Products are collected"
                  description="Product data is gathered from multiple fashion retailers and normalized into one consistent format."
              />

              <FeatureCard
                  number="02"
                  title="Everything is searchable"
                  description="Browse by store, gender, category, price, availability, and more as the catalogue grows."
              />

              <FeatureCard
                  number="03"
                  title="Go straight to the store"
                  description="When you find something you like, open the original product page and purchase directly from the retailer."
              />
            </div>
          </div>
        </section>

        <section className="bg-[#263229] text-white">
          <div className="mx-auto flex max-w-375 flex-col gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-white/50 uppercase">
                Start exploring
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Find something worth wearing.
              </h2>
            </div>

            <Link
                href="/products"
                className="w-fit rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#263229] transition hover:-translate-y-0.5 hover:bg-[#edf0ea]"
            >
              View catalogue
            </Link>
          </div>
        </section>
      </main>
  )
}

type FeatureCardProps = {
  number: string
  title: string
  description: string
}

function FeatureCard({
                       number,
                       title,
                       description,
                     }: FeatureCardProps) {
  return (
      <article className="rounded-2xl border border-black/5 bg-[#f5f5f0] p-6">
      <span className="font-mono text-xs text-[#829083]">
        {number}
      </span>

        <h3 className="mt-8 text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6e786f]">
          {description}
        </p>
      </article>
  )
}