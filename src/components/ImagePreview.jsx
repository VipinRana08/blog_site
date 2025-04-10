import React, { useState, useEffect } from 'react';

function ImagePreview({ image, service }) {
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        
        async function fetchFilePreview() {
        try {
            const base64Content = await service.getFilePreview(image); 
            if (base64Content) {
            setImagePreview(base64Content); 
            } else {
            console.error("No Base64 content returned.");
            }
        } catch (error) {
            console.error("Error fetching image preview:", error);
        }
        }

        fetchFilePreview();
    }, [image, service]); 

    if (!imagePreview) {
        return <p>Loading image...</p>; 
    }

    return (
        <img
        src={`data:image/jpeg;base64,${imagePreview}`}
        alt="Image Preview"
        className="rounded-xl"
        />
    );
}

export default ImagePreview;