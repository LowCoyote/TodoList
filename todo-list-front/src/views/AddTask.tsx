//create a functionnal component
import React, {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {addTasks} from "@/services/todolist-api/todolist-api.tsx";

const AddTask: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        try {
            addTasks(title, description).then(() => {
                toast.success("Tâche créée");
            });
        }
        catch (e) {
            toast.error("Une erreur est survenue")
            console.log(e);
        }

        // Réinitialisez les valeurs des champs après la soumission
        setTitle("");
        setDescription("");
    };

    return (
        <div className="relative flex flex-col lg:mt-44 mt-32 h-screen overflow-y-hidden">
            <div className="w-full p-6 mx-auto bg-white rounded-md shadow-2xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-yellow-700 underline">
                    Créer une tâche
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Titre
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={"Entrez le titre de votre tâche"}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={"Entrez la description de votre tâche"}
                        ></textarea>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-700 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                        >
                            Créer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
