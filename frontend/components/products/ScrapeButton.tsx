"use client"

import { useState } from "react"
import { scrapeProducts } from "@/lib/api/products"

export function ScrapeButton() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleScrape() {
        try {
            setLoading(true)
            setMessage("")

            await scrapeProducts()

            setMessage("Scraping started successfully.")
        } catch (error) {
            console.error(error)
            setMessage("Failed to start scraping.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-start gap-2">
            <button
                onClick={handleScrape}
                disabled={loading}
                className="rounded-xl bg-[#202820] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2d382e] disabled:cursor-not-allowed disabled:opacity-50"
            >
                {loading ? "Scraping..." : "Scrape stores"}
            </button>

            {message && (
                <p className="text-sm text-[#697269]">
                    {message}
                </p>
            )}
        </div>
    )
}