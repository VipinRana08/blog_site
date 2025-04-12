import React, {useState, useEffect} from "react";
import service from "../springboot backend/service";
import { PostCard, Container } from "../components";

function AllPosts(){
    const [posts, setPosts] = useState([])
    useEffect(() => {})
    service.getAllPosts().then((post) => {
        const activePosts = post.filter(p => p.status === "active");
        setPosts(activePosts);
    }, [posts])
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.slug} className="p-2 w-1/4">
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;