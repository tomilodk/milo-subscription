import React from "react";

interface Props {
    users: string[];
}

const NamesList: React.FC<Props> = (props) => {

    return (
        <div className="w-full max-w-md flex-grow overflow-auto">
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
    );
};

export default NamesList;
