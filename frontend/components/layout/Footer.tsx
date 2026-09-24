export function Footer(){
    return (
        <footer className="border-t border-black/5 bg-[#fffef9]">
            <div className="mx-auto flex max-w-375 flex-col gap-2 px-4 py-6 text-sm text-[#7a827a] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p>
                    Store Aggregator
                </p>

                <p className="font-mono text-xs">
                    Built with Next.js, Spring Boot and Python
                </p>
            </div>
        </footer>
    )
}