import React from "react";
import NamesList from "./names-list";
import axios from "axios";

const fetchUsers = async (): Promise<string[]> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/names`);

    return (response.data.names as string[]) ?? [];
};

export default async function NamesListFetcher() {
    // const [rolled, setRolled] = useState<boolean>(false);

    // useEffect(() => {
    //     setRolled(!!(localStorage.getItem("rolled") ?? false));
    // }, []);

    const users = await fetchUsers();

    return <NamesList users={users} rolled={false} />;
}
