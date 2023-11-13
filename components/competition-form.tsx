"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
interface Props {
    rolled: boolean;
    callback: (event: FormEvent<HTMLFormElement>) => void;
}

export function CompetitionForm(props: Props) {
    return (
        <section className="flex-shrink">
            <h1 className="text-6xl font-bold bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Hello</h1>
            {props.rolled ? (
                <p>You have already been rick-rolled 🥳</p>
            ) : (
                <>
                    <p className="text-xl w-full my-4">Please enter your name below to enter the competition 👇</p>
                    <form className="w-full space-y-2" onSubmit={props.callback}>
                        <Input className="w-full mb-2" placeholder="Enter your name" type="text" name="name" />
                        <Button type="submit">Enter</Button>
                    </form>
                </>
            )}
        </section>
    );
}
