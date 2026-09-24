export type ProductSize = {
    label: string
    stock: number
}

export type Product = {
    id: number
    externalId: string
    store: string
    name: string
    price: number
    finalPrice: number
    url: string
    imageUrl: string
    gender: string
    sizes: ProductSize[]
    categories: string[]
}