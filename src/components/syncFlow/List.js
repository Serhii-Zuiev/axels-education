import React, { useEffect, useState } from "react";

import { rxService } from "./rxService";

const List = () => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        const subscribtion = rxService
            .onItem()
            .subscribe((item) =>
                item
                    ? setstate((prevState) => [...prevState, item])
                    : setstate([])
            );

        return subscribtion.unsubscribe;
    }, []);

    return (
        <>
            {state && (
                <ul>
                    {state.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default List;
