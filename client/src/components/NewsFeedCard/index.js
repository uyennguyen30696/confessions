import React from "react";
import "./style.css";

function NewsFeedCard({ children }) {
    return (
        <div className="newsfeed-cards-wrapper">
            { children }
        </div>
    );
};

export default NewsFeedCard;
