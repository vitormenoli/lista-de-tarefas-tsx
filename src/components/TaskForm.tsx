import React from 'react'

import styles from './TaskForm.module.css'

import { ITask } from "../interfaces/Task"
import useTaskState from '../hooks/useTaskState'
import useHandleInputChange from '../hooks/useHandleInputChange'
import useHandleFormSubmit from '../hooks/useHandleFormSubmit'

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?(id: number, title: string, description: string): void
}

export default function TaskForm({ btnText, taskList, setTaskList, task, handleUpdate }: Props) {

    const { id, title, setTitle, description, setDescription } = useTaskState(task)
    const handleChange = useHandleInputChange(setTitle, setDescription)
    const addTaskHandler = useHandleFormSubmit(id, title, description, taskList, setTitle, setDescription, setTaskList, handleUpdate );

    return (
        <>
            <form onSubmit={addTaskHandler} className={styles.form}>
                <div className={styles.input_container}>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Título da tarefa"
                        onChange={handleChange}
                        value={title}
                    />
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="description">Descrição:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Descrição da tarefa"
                        onChange={handleChange}
                        value={description}
                    />
                </div>
                <input type="submit" value={btnText}/>
            </form>
        </>
    )
}