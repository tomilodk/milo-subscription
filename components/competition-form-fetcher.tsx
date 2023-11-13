"use client";

import { FormEvent } from "react";
import axios from "axios";
import { CompetitionForm } from "./competition-form";

export function CompetitionFormFetcher() {
    async function formCallback(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const response = await axios.post("/api/names", {
            name: formData.get("name"),
        });
        if (response.status === 200) {
            localStorage.setItem("rolled", "true");
            window.location.href = response.data.url;
        }
    }
    return <CompetitionForm callback={formCallback} />;
}
