import React from "react";
import "./style.css";

function EditButton(props) {
    return (
        <button
            className={props.className}
        >
            Edit
        </button>
    );
};

export default EditButton;
