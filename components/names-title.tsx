"use client";

import React, { useEffect, useState } from "react";

interface Props {
    rolled: boolean;
}

const NamesTitle: React.FC<Props> = (props) => {
    return <h2 className="text-xl font-semibold mt-8">{props.rolled ? "Rick-rolled users" : "Signed-up users:"}</h2>;
};

export default NamesTitle;
