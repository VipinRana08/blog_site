import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, image, status, userId}){
        try {
            return await this.database.createDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Service ::: createPost ::: Error : " + error);
        }
    }
    async updatePost(slug, {title, content, image, status}){
        try {
            return await this.database.updateDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite Service ::: updatePost ::: Error : " + error);
        }
    }
    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite Service ::: deletePost ::: Error :" + error)
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug
            );
        } catch (error) {
            onsole.log("Appwrite Service ::: getPost ::: Error : " + error);
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite Service ::: getPosts ::: Error :" + error);
            return false;
        }
    }
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite Service ::: uploadFile ::: Error : " + error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(conf.appWriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite Service ::: deleteFile ::: error : " + error);
            return false;
        }
    }
    getFilePreview(fileId){
        return  this.storage.getFilePreview(conf.appWriteBucketId, fileId);
    }
}

const service = new Service();

export default service;