import NamesListFetcher from "@/components/names-list-fetcher";
import TopSection from "@/components/top-section";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "only-no-store";

export default async function Home() {
    return (
        <section className="flex flex-col h-screen max-w-sm py-10 mx-auto px-6">
            <TopSection />
            <Suspense fallback={<p>Loading...</p>}>
                <NamesListFetcher />
            </Suspense>
        </section>
    );
}
