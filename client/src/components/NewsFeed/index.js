import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/newsfeedAPI";
import NavBarMember from "../NavBarMember";
import ProfileInfo from "../ProfileInfo";
import PostCreateBox from "../PostCreateBox";
import NewsFeedCard from "../NewsFeedCard";
import LikeButton from "../ButtonLike";
import DislikeButton from "../ButtonDislike";
import ReportButton from "../ButtonReport";
import CreateCommentBox from "../CommentBox";

function NewsFeed() {
    // Setting initial state of confession posts by all users
    const [confessions, setConfessions] = useState([]);

    // Load all confessions and store them with setConfessions
    useEffect(() => {
        loadConfessions();
    }, []);

    // Load all confession posts and set them to confessions
    function loadConfessions() {
        API.getConfessions()
            .then(res => {
                setConfessions(res.data)
            })
            .catch(err => console.log(err));
    };

    return (
        <div id="newsfeed-page">
            <NavBarMember />
            <section>
                <ProfileInfo />
            </section>
            <h1 id="newsfeed-title">News Feed</h1>
            <section id="newsfeed-cards-container">
                <div>
                    <PostCreateBox />
                </div>
                <hr id="hr"></hr>
                {confessions.length ? (
                    <div>
                        {confessions.map(confession => (
                            <NewsFeedCard key={confession._id}>
                                <div className="newsfeed-card">
                                    <div className="post-owner">
                                        <h5>{confession.owner}</h5>
                                    </div>
                                    <br></br>
                                    <h5 className="title"><strong>{confession.title}</strong></h5>
                                    <br></br>
                                    <div className="newsfeed-posts">
                                        <p>{confession.content}</p>
                                    </div>
                                    <br></br>
                                    <div className="reaction-box">
                                        <LikeButton
                                            className="like"
                                            id={confession._id}
                                            value={confession.likes}
                                            loadConfessions={loadConfessions}
                                        />
                                        <DislikeButton
                                            className="dislike"
                                            id={confession._id}
                                            value={confession.dislikes}
                                            loadConfessions={loadConfessions}
                                        />
                                        <ReportButton
                                            className="report"
                                            id={confession._id}
                                            value={confession.reported}
                                            loadConfessions={loadConfessions}
                                        />
                                        <CreateCommentBox
                                            className="comment"
                                            onClick={() => CreateCommentBox()}
                                            id={confession._id}>Comments: {confession.comments}
                                        </CreateCommentBox>
                                    </div>
                                </div>
                            </NewsFeedCard>
                        ))}
                    </div>
                ) : (
                    <h3>Nothing in your newsfeed yet!</h3>
                )}
            </section>
        </div>
    );
};

export default NewsFeed;
