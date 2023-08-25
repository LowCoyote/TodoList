import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la récupération des utilisateurs");
    }
};

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la connexion");
    }
}

export const createUser = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la création de l'utilisateur");
    }
};

export const getUserById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la récupération de l'utilisateur");
    }
};

export const updateUserById = async (id: string, name: string, username: string, email: string, password: string) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${id}`, {
            name,
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la mise à jour de l'utilisateur");
    }
};

export const deleteUserById = async (id: string) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la suppression de l'utilisateur");
    }
};

export const getTasks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la récupération des tâches");
    }
}

export const addTasks = async (title: string, description: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/tasks`, {
            title,
            description,
        });
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la création de la tâche");
    }
}
