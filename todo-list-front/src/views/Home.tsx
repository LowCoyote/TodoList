import TaskCard from "@/components/task/TaskCard.tsx";
import React, { useEffect, useState } from "react";
import { Task } from "@/types/Task.ts";
import { getTasks } from "@/services/todolist-api/todolist-api.tsx";
import { Tab } from "@headlessui/react";

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tasks = await getTasks();
                setTasks(tasks);
            } catch (error) {
                console.error("Erreur lors de la récupération des tâches:", error);
            }
        };

        fetchData();
    }, []);

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task._id !== id));
    };

    const updateTask = (id: number, completed: boolean) => {
        setTasks(tasks.map(task => task._id === id ? { ...task, completed } : task));
    };

    return (
        <div className="mx-12 mt-12">
            <Tab.Group>
                <Tab.List className="flex justify-center">
                    <Tab
                        className={({ selected }) =>
                            `mr-6 py-2 px-4 text-lg font-medium ${
                                selected ? "border-b-2 border-blue-500" : ""
                            }`
                        }
                    >
                        Tâches en cours
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            `mr-6 py-2 px-4 text-lg font-medium ${
                                selected ? "border-b-2 border-blue-500" : ""
                            }`
                        }
                    >
                        Tâches effectuées
                    </Tab>
                </Tab.List>

                <Tab.Panel>
                    {tasks
                        .filter((task) => !task.completed)
                        .map((task) => (
                            <TaskCard key={task._id} task={task} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
                        ))}
                </Tab.Panel>

                <Tab.Panel>
                    {tasks
                        .filter((task) => task.completed)
                        .map((task) => (
                            <TaskCard key={task._id} task={task} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
                        ))}
                </Tab.Panel>
            </Tab.Group>
        </div>
    );
};

export default Home;
