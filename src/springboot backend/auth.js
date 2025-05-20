import conf from "../conf/conf.js";

export class AuthService {
    constructor() {
        this.apiUrl = conf.springBootUrl; 
    }

    async createAccount({ email, password, user }) {
        const userName = email; 
        const fullName = user; 
        try {
        const response = await fetch(`${this.apiUrl}/public/signup`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, password, fullName }),
        });
    
        if (response.ok) {
            
            return true;
        } else {
            const errorData = await response.json();
            if (response.status === 400) {
            throw new Error(`Bad Request: ${errorData.message || "Invalid data"}`);
            } else if (response.status === 409) {
            throw new Error("User already exists (duplicate email).");
            } else {
            throw new Error("Error during account creation.");
            }
        }
        } catch (error) {
        console.error("Error in createAccount: ", error);
        throw error;
        }
    }

    async login({ email, password }) {
        const userName = email; 
        try {
        const response = await fetch(`${this.apiUrl}/public/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, password }),
        });
        if (response.status === 200) {
            const data = await response.text();
            localStorage.setItem('authToken', data); 
            return data; 
        } else if (response.status === 401) {
            throw new Error("Incorrect username or password"); 
        } else {
            throw new Error("Error during login. Please try again later."); 
        }
        } catch (error) {
        console.error("Error in login: ", error);
        throw error; 
        }
    }
    

    async getCurrentUser() {
        try {
        const token = localStorage.getItem('authToken');
        if (!token) return null;

        const response = await fetch(`${this.apiUrl}/user`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Failed to fetch user");
        }
        } catch (error) {
        console.error("Error in getCurrentUser: ", error);
        return null;
        }
    }

    
    async logout() {
        try {
            localStorage.removeItem('authToken');
        } catch (error) {
            console.log("Logout error: " + error);
        }
    }
}

const authService = new AuthService();

export default authService;
