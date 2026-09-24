import Link from "next/link";

export function Header(){
    return(
        <header className="border-b border-black/5 bg-[#fffef9]/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-375 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-[-0.03em] text-[#202820]"
                >
                    Store Aggregator
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium text-[#566057]">
                    <Link
                        href="/"
                        className="transition-colors hover:text-[#202820]"
                    >
                        Home
                    </Link>

                    <Link
                        href="/products"
                        className="transition-colors hover:text-[#202820]"
                    >
                        Products
                    </Link>

                    <Link
                        href="/#how-it-works"
                        className="transition-colors hover:text-[#202820]"
                    >
                        How it works
                    </Link>
                </nav>
            </div>
        </header>
    )
}