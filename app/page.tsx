import NamesListFetcher from "@/components/names-list-fetcher";
import TopSection from "@/components/top-section";
import { Suspense } from "react";

export default function Home() {
    return (
        <section className="flex flex-col h-screen mx-auto max-w-sm py-10">
            <TopSection />
            <Suspense fallback={<p>Loading...</p>}>
                <NamesListFetcher />
            </Suspense>
        </section>
    );
}
