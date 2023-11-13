import { CompetitionFormFetcher } from "@/components/competition-form-fetcher";
import NamesListFetcher from "@/components/names-list-fetcher";

export default async function Home() {
    return (
        <section className="flex flex-col h-screen mx-auto max-w-sm py-10">
            <CompetitionFormFetcher />
            <NamesListFetcher />
        </section>
    );
}
