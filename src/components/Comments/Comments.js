import React, { useContext } from "react";
import shortid from "shortid";

import CommentCard from "./CommentCard";
import FeedForm from "./FeedForm";
import { StyledCommentsContainer } from "../../styled";
import { Context } from "../AppContextProvider";

const Comments = () => {
    const {
        state: { selectedUser },
    } = useContext(Context);

    return (
        <StyledCommentsContainer>
            <h2>Feedbacks</h2>
            <ul>
                {selectedUser.comments.length ? (
                    selectedUser.comments.map((feed) => (
                        <li key={shortid.generate()} className="commentCard">
                            <CommentCard feed={feed} />
                        </li>
                    ))
                ) : (
                    <li>Nothing...</li>
                )}
            </ul>
            <FeedForm userId={selectedUser.id} />
        </StyledCommentsContainer>
    );
};

export default Comments;
