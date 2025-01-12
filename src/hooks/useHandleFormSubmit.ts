import { FormEvent } from "react"
import { ITask } from "../interfaces/Task"

export default function useHandleFormSubmit(
    id: number,
    title: string,
    description: string,
    taskList: ITask[],
    setTitle: (title: string) => void,
    setDescription: (description: string) => void,
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
    handleUpdate?: (id: number, title: string, description: string) => void

) {
    return (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (handleUpdate) {
            handleUpdate(id, title, description)
        }
        else {
            const id = Math.floor(Math.random() * 1000)
            const newTask: ITask = {id, title, description}

            if (!id || !title || !description) return
    
            setTaskList!([...taskList, newTask])
    
            setTitle('')
            setDescription('')
        }
    }
}