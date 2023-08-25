import React from "react";
import {Task} from "@/types/Task.ts";

const TaskCard: React.FC<{task: Task}> = (props) => {
    return(
        <div className="flex flex-col justify-between p-4 bg-white rounded-md shadow-md">
            <div>
                <h2 className="text-lg font-semibold text-gray-800">
                    {props.task.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    {props.task.description}
                </p>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    className="px-4 py-1 text-sm font-semibold text-white bg-yellow-700 rounded-md hover:bg-yellow-600 focus:bg-yellow-800"
                >
                    Modifier
                </button>
                <button
                    type="button"
                    className="px-4 py-1 text-sm font-semibold text-white bg-red-700 rounded-md hover:bg-red-600 focus:bg-red-800"
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
