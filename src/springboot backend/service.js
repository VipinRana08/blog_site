import conf from "../conf/conf.js";

export class Service {
    constructor() {
        this.apiUrl = conf.springBootUrl; 
    }

    async createPost({ title, slug, content, image, status}) {
        try {
            const token = localStorage.getItem('authToken')
            
            const response = await fetch(`${this.apiUrl}/posts`, 
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    slug,
                    content,
                    image,
                    status
                }),
            });
    
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error("Error creating post");
            }
        } catch (error) {
            console.error("Error in createPost: ", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, image, status }) {
        try {
            const token = localStorage.getItem('authToken')
            const response = await fetch(`${this.apiUrl}/posts/${slug}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, image, status }),
            });
    
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error("Error updating post");
            }
        } catch (error) {
            console.error("Error in updatePost: ", error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            const token = localStorage.getItem('authToken')
            const response = await fetch(`${this.apiUrl}/posts/${slug}`, {
                method: 'DELETE',
                headers:{
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            if (response.ok) {
                return true;
            } else {
                throw new Error("Error deleting post");
            }
        } catch (error) {
            console.error("Error in deletePost: ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            const token = localStorage.getItem('authToken')
            const response = await fetch(`${this.apiUrl}/posts/${slug}`, {
                method: 'GET',
                headers:{
                'Authorization': `Bearer ${token}`,
                }
            });
    
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error("Error fetching post");
            }
        } catch (error) {
            console.error("Error in getPost: ", error);
            return false;
        }
    }

    async getAllPosts() {
        try {
            const token = localStorage.getItem('authToken')
            const response = await fetch(`${this.apiUrl}/public/get-all-posts`, {
                method: 'GET',
                headers:{
                'Authorization': `Bearer ${token}`,
                }
            });
    
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error("Error fetching posts");
            }
        } catch (error) {
            console.error("Error in getPosts: ", error);
            return false;
        }
    }

    async getPosts() {
        try {
            const token = localStorage.getItem('authToken')
            const response = await fetch(`${this.apiUrl}/posts`, {
                method: 'GET',
                headers:{
                'Authorization': `Bearer ${token}`,
                }
            });
        
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error("Error fetching posts");
            }
        } catch (error) {
            console.error("Error in getPosts: ", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const token = localStorage.getItem('authToken')
            console.log(token)
            const response = await fetch(`${this.apiUrl}/posts/file-upload`, {
                method: 'POST',
                headers: {
                'Authorization': `Bearer ${token}`,
                },
                body: formData 
            });
        
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error("Error uploading file");
            }
        } catch (error) {
            console.error("Error in uploadFile: ", error);
            return false;
        }
    }

    async  getFilePreview(fileId){
        try{
            const token = localStorage.getItem('authToken')
            const response = await fetch(`${this.apiUrl}/posts/file-preview/${fileId}`, {
                method: 'GET',
                headers:{
                'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                return await response.text();
            } else {
                console.error("Failed to fetch file preview");
            }
    
        }catch(error){
            console.error("Error fetching file preview:", error);
        }
    }
}

const service = new Service();

export default service;