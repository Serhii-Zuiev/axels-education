import React, { useState, useEffect } from "react";

import { input$, githubUser$ } from "./rxAsyncService";
import { flatMap, tap } from "rxjs/operators";

const AsyncCard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        input$
            .pipe(
                tap((el) => !el && setUser(null)),
                flatMap(githubUser$)
            )
            .subscribe((user) => setUser(user.data));

        return input$.unsubscribe;
    }, []);

    return (
        <div>
            {user && (
                <div>
                    <img src={user.avatar_url} alt="" />
                    <h3>{user.login}</h3>
                </div>
            )}
        </div>
    );
};

export default AsyncCard;
