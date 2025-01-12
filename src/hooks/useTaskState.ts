import { useEffect, useState } from "react";
import { ITask } from "../interfaces/Task";

export default function useTaskState(task?: ITask | null) {
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDescription(task.description)
        }
    }, [task])

    return {
        id,
        title,
        setTitle,
        description,
        setDescription,
    };
}