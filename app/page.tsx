"use client";

import { CompetitionForm } from "@/components/competition-form";
import { FormEvent, useEffect, useState } from "react";

import axios from "axios";

export default function Home() {
    const [names, setNames] = useState<string[]>([]);

    async function formCallback(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const response = await axios.post(
            "/api/names",
            {
                name: formData.get("name"),
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*"
                },
            }
        );

        if(response.status === 200) {
            window.location.href = response.data.url;
        }
    }

    useEffect(() => {
        axios.get("/api/names").then((response) => {
            console.log(response.data.names);

            setNames(response.data.names);
        });
    }, []);

    return <CompetitionForm users={names} formCallback={formCallback} />;
}
