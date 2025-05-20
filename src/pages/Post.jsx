import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../springboot backend/service";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import ImagePreview from "../components/ImagePreview";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);


    useEffect(() => {
        if (slug) {
            service.getAllPosts().then((post) => {
                if (Array.isArray(post)) {
                    const matchedPost = post.find((p) => p.slug === slug);
                    
                    if (matchedPost) {
                        setPost(matchedPost);
                    }
                }
                
            });
        } else navigate("/");
    }, [slug, navigate]);

    const isAuthor = post && userData ? userData.postEntries.some(x => x.slug === post.slug) : false;

    const deletePost = () => {
        service.deletePost(post.slug).then((status) => {
            if (status) {
                //service.deleteFile(post.image);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                <ImagePreview image={post.image} service={service} />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.slug}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css font-bold">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}