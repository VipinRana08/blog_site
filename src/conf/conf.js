const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDataBaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    openAiKey: String(import.meta.env.VITE_OPENAI_API_KEY),
    editorKey: String(import.meta.env.VITE_EDITOR_KEY),
    springBootUrl: String(import.meta.env.VITE_SPRINGBOOT_URL),
    rteKey: String(import.meta.env.VITE_RTE_KEY)
};

export default conf;