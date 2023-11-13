import React from "react";
import NamesList from "./names-list";
import { getNames } from "@/lib/names";

export const dynamic = "force-dynamic";
export const fetchCache = "only-no-store";

export default async function NamesListFetcher() {
    const users = await getNames();

    return <NamesList users={users}/>;
}
