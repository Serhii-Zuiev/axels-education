import React, { useContext } from "react";

import { Context } from "../AppContextProvider";
import { StyledUsersContainer } from "../../styled";
import UserCard from "./UserCard";

const Users = () => {
    const {
        state: { users },
    } = useContext(Context);

    return (
        <StyledUsersContainer>
            <h2>Our users</h2>
            <ul className="usersList">
                {users.map((user) => (
                    <li className="userCard" key={user.id}>
                        <UserCard
                            name={user.name}
                            status={user.status}
                            id={user.id}
                            feed={user.comments?.length}
                        />
                    </li>
                ))}
            </ul>
        </StyledUsersContainer>
    );
};

export default Users;
