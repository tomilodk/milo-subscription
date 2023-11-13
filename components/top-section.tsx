"use client";

import React , { useEffect, useState } from "react";
import NamesTitle from "@/components/names-title";
import { CompetitionFormFetcher } from "@/components/competition-form-fetcher";

interface Props {

}

const TopSection: React.FC<Props> = (props) => {

    const [rolled, setRolled] = useState<boolean>(false);
    useEffect(() => {
        setRolled(!!(localStorage.getItem("rolled") ?? false));
    }, []);

   return (
      <>
         <CompetitionFormFetcher rolled={rolled}/>
            <NamesTitle  rolled={rolled}/>
      </>
   );
}

export default TopSection;