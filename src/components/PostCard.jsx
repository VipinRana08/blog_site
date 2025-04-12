import React from "react";
import service from "../springboot backend/service";
import {Link} from "react-router-dom";
import ImagePreview from "./ImagePreview";

function Postcard({slug, title, image}){
    return (
        <Link to={`/post/${slug}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                <ImagePreview image={image} service={service} />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default Postcard;