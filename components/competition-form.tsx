"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

interface Props {
    formCallback: (event: FormEvent<HTMLFormElement>) => void;
    users: string[];
}

export function CompetitionForm(props: Props) {
    return (
        <section key="1" className="flex flex-col items-start justify-center h-screen space-y-4 mx-auto w-full max-w-sm">
            <h1 className="text-6xl font-bold bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Hello</h1>
            <p className="text-xl w-full">Please enter your name below to enter the competition 👇</p>
            <form className="w-full space-y-2" onSubmit={props.formCallback}>
                <Input className="w-full mb-2" placeholder="Enter your name" type="text" name="name" />
                <Button type="submit">Enter</Button>
            </form>
            <div className="w-full max-w-md">
                <h2 className="text-xl font-semibold mt-8">Signed-up users:</h2>
                <ul className="space-y-2">
                    {props.users && props.users.length > 0 ? (
                        props.users.map((user, idx) => (
                            <li key={idx} className="border-b border-gray-200 dark:border-gray-800 py-2">
                                {user}
                            </li>
                        ))
                    ) : (
                        <li>No users yet...</li>
                    )}
                </ul>
            </div>
        </section>
    );
}
