import type { Product} from "@/types/products";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch("http://localhost:8080/api/products", {
        cache: "no-store",
    })

    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }

    return response.json()

}