import React, {useEffect, useState} from "react";
import service from "../springboot backend/service";
import {Container, PostCard} from "../components";


function Home(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        service.getPosts().then((posts) => {
            console.log(posts)
            if(posts){
                setPosts(posts);
            }else{
                setPosts([])
            }
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error fetching posts:", err);
            setError("There was an issue loading posts.");
            setLoading(false);
        });
    }, [])

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex justify-center">
                        <p>Loading...</p>
                    </div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
            <div className="flex justify-center">
                <p>{error}</p>
            </div>
            </Container>
        </div>
        );
    }

    if(posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h2 className="text-2xl font-bold hover:text-gray-500">
                                <p className="italic font-semibold">"Did you come here to read and add some anonymous posts?"</p>
                                <p className="italic font-semibold">"Curious about what others are sharing?"</p>
                                <p className="italic font-semibold">"Unlock the power of anonymous sharing."</p>
                                <p className="italic font-semibold">"Stay anonymous, but stay heard."</p>
                                <p className="italic font-semibold">"Join the community and share your thoughts anonymously!"</p>
                            </h2>
                            <h1 className="text-2xl  hover:text-gray-500 italic font-bold pt-8">
                                Please Sign Up and Log In.
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                    <div className="flex flex-wrap">
                        {posts.map((post) =>(
                            <div key={post.slug} className="p-2 w-1/4">
                                <PostCard {...post}/>
                            </div>
                        ))}
                    </div>
                </Container>
        </div>
    );
}

export default Home;