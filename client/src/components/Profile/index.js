import React, { useEffect, useState } from "react";
import "./style.css";
import NavBarMember from "../NavBarMember";
import API from "../../utils/profileAPI";
import APIuser from "../../utils/userAPI";
import ProfileInfo from "../ProfileInfo";
import PostCreateBox from "../PostCreateBox";
import PostCard from "../PostCard";
import LikeButton from "../ButtonLike";
import DislikeButton from "../ButtonDislike";
import EditButton from "../ButtonEdit";
import DeleteButton from "../ButtonDelete";
import CreateCommentBox from "../CommentBox";

function Profile() {
    // Setting initial state of confession posts
    const [posts, setPosts] = useState([]);

    const [ username, setusername ] = useState("");

    // Load all confessions and store them with setConfessions
    useEffect(() => {
        loadUserData();
        loadPosts();
    }, []);

    function loadUserData() {
        APIuser.getUserData()
            .then(res =>
                setusername(res.data.user.username)
            )
            .catch(err => console.log(err));
    };

    // Load all confession posts and set them to confessions
    function loadPosts() {
        API.getConfessions({username})
            .then(res =>
                setPosts(res.data)
            )
            .catch(err => console.log(err));
    };

    // Delete a confession post from database with a given id, and reload confession posts from db
    function deleteOneConfession(id) {
        API.deleteConfession(id)
            .then(res => loadPosts())
            .catch(err => console.log(err));
    };

    return (
        <div id="profile-page">
            <NavBarMember/>
            <br></br>
            <br></br>
            <br></br>
            <h1 id="construction"><strong>Under construction - Comming soon</strong></h1>
            <div className="profile-container">
                <section>
                    <ProfileInfo />
                </section>
                <section>
                    <PostCreateBox />
                </section>
                <hr id="hr"></hr>
                <section>
                    {posts.length ? (
                        <div>
                            {posts.map(post => (
                                <PostCard key={post._id}>
                                    <br></br>
                                    <h5 className="title"><strong>{post.title}</strong></h5>
                                    <br></br>
                                    <p>{post.content}</p>
                                    <LikeButton
                                        className="like"
                                        id={post._id}
                                        value={post.likes}
                                        loadConfessions={loadPosts}
                                    />
                                    <DislikeButton
                                        className="dislike"
                                        id={post._id}
                                        value={post.dislikes}
                                        loadConfessions={loadPosts}
                                    />
                                    <EditButton 
                                        className="edit"
                                        id={post._id}
                                    />
                                    <DeleteButton 
                                        className="delete"
                                        id={post._id}
                                        onClick={() => deleteOneConfession(post._id)} 
                                    />
                                    <CreateCommentBox 
                                        className="comment" 
                                        onClick={() => CreateCommentBox()} 
                                        id={post._id}>Comments: {post.comments}
                                    </CreateCommentBox>
                                </PostCard>
                            ))}
                        </div>
                    ) : (
                        <h3>You have no post yet!</h3>
                    )}
                </section>
            </div>
        </div>
    );

};

export default Profile;
