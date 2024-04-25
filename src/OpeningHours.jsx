import { useState } from 'react';
import './OpeningHours.css';

const fruitNames = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

function getRandomFruitName() {
    return fruitNames[Math.floor(Math.random() * fruitNames.length)];
}

function OpeningHours() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [activePostIndex, setActivePostIndex] = useState(null); 

    const handlePostChange = (event) => {
        setNewPost(event.target.value);
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        if (newPost.trim() !== "") {
            const newPostData = {
                text: newPost,
                replies: [],
                nickname: getRandomFruitName(), 
                id: posts.length + 1 
            };
            setPosts([...posts, newPostData]);
            setNewPost("");
        }
    };

    const handleReplySubmit = (postIndex, replyText) => {
        if (replyText.trim() !== "") {
            const updatedPosts = posts.map((post, index) => {
                if (index === postIndex) {
                    return {
                        ...post,
                        replies: [...post.replies, { text: replyText, nickname: getRandomFruitName(), id: post.replies.length + 1 }]
                    };
                }
                return post;
            });
            setPosts(updatedPosts);
        }
    };

    return (
        <div className="opening-hours">
            <div className="opening-info">
                <h2>Our Opening Hours</h2>
                <p>Monday - Friday: 9 AM to 5 PM</p>
                <p>Saturday: 10 AM to 4 PM</p>
                <p>Sunday: Closed</p>
            </div>
            <div className="forum">
                <h3>Forum: The store is closed, what should we do?</h3>
                <form onSubmit={handlePostSubmit}>
                    <textarea
                        value={newPost}
                        onChange={handlePostChange}
                        placeholder="I want some fruit outside business hours, but I don't know what kind it is, can anyone help me?"
                    />
                    <button type="submit">Post</button>
                </form>
                <div className="posts">
                    {posts.map((post, index) => (
                        <div key={index} className="post">
                            <button onClick={() => setActivePostIndex(activePostIndex === index ? null : index)}>
                                {post.id}L {post.nickname} says: {post.text}
                            </button>
                            {activePostIndex === index && (
                                <>
                                    <div className="replies">
                                        {post.replies.map(reply => (
                                            <p key={reply.id}>{reply.id}L {reply.nickname} replied: {reply.text}</p>
                                        ))}
                                    </div>
                                    <textarea
                                        placeholder="Reply to this post"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                handleReplySubmit(index, e.target.value);
                                                e.target.value = ""; // Clear textarea after submit
                                            }
                                        }}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OpeningHours;


