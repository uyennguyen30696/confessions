import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/userAPI";

function ProfileInfo() {

    const [ username, setusername ] = useState([]);

    useEffect(() => {
        loadUserData();
    });

    function loadUserData() {
        API.getUserData()
            .then(res =>
                setusername(res.data.user.username)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="profileInfo-container">
                <h3>Hello {username} 👋 😙</h3>
            </div>
        </div>
    );
};

export default ProfileInfo;
