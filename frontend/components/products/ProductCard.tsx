import type { Product } from "@/types/products"

type ProductCardProps = {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const formatPrice = (price: string | number) => {
        const amount = Number(price)

        return Number.isFinite(amount)
            ? `${amount.toFixed(2)} zł`
            : `${price} zł`
    }

    const isOnSale = product.finalPrice < product.price

    const discount = isOnSale
        ? Math.round(
            ((Number(product.price) - Number(product.finalPrice)) /
                Number(product.price)) *
            100
        )
        : 0

    return (
        <article className="group overflow-hidden rounded-2xl border border-black/5 bg-[#fffef9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${product.name}`}
                className="relative block aspect-[0.82] overflow-hidden bg-[#e8e9e2]"
            >
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
                />

                {/* subtle image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Store badge */}
                <span className="absolute top-3 left-3 rounded-md bg-[#1b2b23]/85 px-2.5 py-1.5 font-mono text-[10px] font-medium tracking-[0.1em] text-white uppercase backdrop-blur-sm">
          {product.store}
        </span>

                {/* Sale badge */}
                {isOnSale && (
                    <span className="absolute top-3 right-3 rounded-md bg-[#c83e3e] px-2.5 py-1.5 font-mono text-[10px] font-semibold tracking-[0.08em] text-white uppercase shadow-sm">
            -{discount}%
          </span>
                )}
            </a>

            {/* Content */}
            <div className="p-4">
                {/* Product name */}
                <h2
                    className="truncate text-[15px] leading-snug font-semibold text-[#202820]"
                    title={product.name}
                >
                    {product.name}
                </h2>

                {/* Price */}
                <div className="mt-2 flex items-baseline gap-2">
          <span
              className={`font-mono text-base font-bold ${
                  isOnSale ? "text-[#b83232]" : "text-[#2d6536]"
              }`}
          >
            {formatPrice(product.finalPrice)}
          </span>

                    {isOnSale && (
                        <span className="font-mono text-xs text-[#949b94] line-through">
              {formatPrice(product.price)}
            </span>
                    )}
                </div>

                {/* Separator */}
                <div className="my-3 h-px bg-black/5" />

                {/* Sizes */}
                <div className="flex min-h-7 flex-wrap items-center gap-1.5">
                    {product.sizes.map((size) => {
                        const available = size.stock > 0

                        return (
                            <span
                                key={size.label}
                                title={
                                    available
                                        ? `${size.stock} in stock`
                                        : "Out of stock"
                                }
                                className={
                                    available
                                        ? "min-w-7 rounded-md border border-[#dfe4da] bg-[#f2f4ed] px-1.5 py-1 text-center font-mono text-[10px] font-medium text-[#536154]"
                                        : "min-w-7 rounded-md border border-transparent bg-[#f3f2ef] px-1.5 py-1 text-center font-mono text-[10px] text-[#afb4ae] line-through"
                                }
                            >
                {size.label}
              </span>
                        )
                    })}

                    {product.sizes.length === 0 && (
                        <span className="text-xs text-[#929992]">
              No sizes available
            </span>
                    )}
                </div>
            </div>
        </article>
    )
}