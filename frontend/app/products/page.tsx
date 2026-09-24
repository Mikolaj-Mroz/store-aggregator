import { ProductCard } from "@/components/products/ProductCard"
import { getProducts } from "@/lib/api/products"
import {ScrapeButton} from "@/components/products/ScrapeButton";

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <main className="min-h-screen bg-[#f4f4ef]">
            <div className="mx-auto max-w-375 px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-2 font-mono text-xs tracking-[0.15em] text-[#728074] uppercase">
                            Catalogue
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-[#202820] sm:text-4xl">
                            Products
                        </h1>

                        <p className="mt-2 text-sm text-[#737b73]">
                            Browse products from multiple stores in one place.
                        </p>
                    </div>

                    <p className="font-mono text-xs text-[#7b847c]">
                        {products.length}{" "}
                        {products.length === 1 ? "product" : "products"}
                    </p>
                </div>

                <div className="mb-7 flex flex-wrap gap-2">
                    <button className="rounded-full bg-[#202820] px-4 py-2 text-sm font-medium text-white">
                        All
                    </button>

                    <button className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#4d574e] transition hover:bg-[#eceee8]">
                        Men
                    </button>

                    <button className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#4d574e] transition hover:bg-[#eceee8]">
                        Women
                    </button>

                    <button className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#4d574e] transition hover:bg-[#eceee8]">
                        Sale
                    </button>

                    <div className="ml-auto"><ScrapeButton/></div>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-5">
                        {products.map((product) => (
                            <ProductCard
                                key={`${product.store}-${product.externalId}`}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-black/10 bg-white px-6 py-20 text-center">
                        <h2 className="text-lg font-semibold text-[#293029]">
                            No products found
                        </h2>

                        <p className="mt-2 text-sm text-[#7a827a]">
                            Products will appear here once they are added to the catalogue.
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}