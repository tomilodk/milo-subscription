"use client";

import { CompetitionForm } from "@/components/competition-form";
import { FormEvent } from "react";

export default function Home() {
    async function formCallback(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
     
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/names', {
          method: 'POST',
          body: formData,
        });
     
        // Handle response if necessary
        const data = await response.json();
        // ...
      }

    const users = ["John Doe", "Jane Doe"];

    return <CompetitionForm users={users} formCallback={formCallback}/>;
}
