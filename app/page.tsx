import NamesListFetcher from "@/components/names-list-fetcher";
import TopSection from "@/components/top-section";

export default async function Home() {
    return (
        <section className="flex flex-col h-screen mx-auto max-w-sm py-10">
            <TopSection/>
            <NamesListFetcher />
        </section>
    );
}
