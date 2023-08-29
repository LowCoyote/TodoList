import React, { useState } from "react";
import { Task } from "@/types/Task.ts";
import { toast } from "react-toastify";
import {removeTaskById, updateTaskById} from "@/services/todolist-api/todolist-api.tsx";
import {useNavigate} from "react-router-dom";

const TaskCard: React.FC<{ task: Task; onDeleteTask: (id: number) => void ; onUpdateTask: (id: number, completed: boolean) => void}> = (
    props
) => {
    const [taskFinished, setTaskFinished] = useState(props.task.completed);
    const navigate= useNavigate();

    function deleteTask(id: number) {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
            try {
                removeTaskById(id).then(() => {
                    toast.success("Tâche supprimée");
                    props.onDeleteTask(id);
                });
            } catch (e) {
                toast.error("Une erreur est survenue");
                console.log(e);
            }
        }
    }

    function changeTaskState() {
        const updatedCompleted = !taskFinished;
        setTaskFinished(updatedCompleted);

        try {
            updateTaskById(props.task._id, props.task.title, props.task.description, updatedCompleted).then(() => {
                toast.success("Tâche mise à jour");
                props.onUpdateTask(props.task._id, updatedCompleted);
            });
        } catch (e) {
            toast.error("Une erreur est survenue");
            console.log(e);
        }
    }

    return (
        <div className="flex flex-col justify-between p-4 bg-white rounded-md shadow-md mt-4">
            <div>
                <h2 className="text-lg font-semibold text-gray-800">
                    {props.task.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    {props.task.description}
                </p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={taskFinished}
                        onChange={changeTaskState}
                    />
                    Tâche finie ?
                </label>
                <div>
                    <button
                        type="button"
                        className="px-4 py-1 text-sm font-semibold text-white bg-yellow-700 rounded-md hover:bg-yellow-600 focus:bg-yellow-800"
                        onClick={() => navigate("modify-task/" + props.task._id)}
                    >
                        Modifier
                    </button>
                    <button
                        type="button"
                        onClick={() => deleteTask(props.task._id)}
                        className="px-4 py-1 ml-2 text-sm font-semibold text-white bg-red-700 rounded-md hover:bg-red-600 focus:bg-red-800"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
