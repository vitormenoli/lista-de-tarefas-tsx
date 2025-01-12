import { ChangeEvent } from "react"

export default function useHandleInputChange(setTitle: (value: string) => void, setDescription: (value: string) => void) {
    return (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        if (name === 'title') {
            setTitle(value)
        }
        else if (name === 'description') {
            setDescription(value)
        }
    }
}