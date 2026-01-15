import { useState } from "react"
import { Button } from "./button"

interface ModalProps {
    title: string
    description: string
    placeholder: string
    onSubmit: (value: string) => void
    onCancel: () => void
}

export function Modal({
    title,
    description,
    placeholder,
    onSubmit,
    onCancel,
}: ModalProps) {
    const [value, setValue] = useState("")

    const handleSubmit = () => {
        onSubmit(value)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="relative flex flex-col border border-zinc-800 bg-zinc-950 p-3">
                <Button
                    variant="danger"
                    className="absolute right-3 aspect-square w-6 p-0 font-bold text-xs"
                    onClick={onCancel}
                >
                    X
                </Button>

                <p className="mb-1 font-medium text-lg">{title}</p>
                <p className="mb-3 text-gray-200 text-sm">{description}</p>

                <textarea
                    className="mb-4 w-xs resize-none border border-zinc-800 p-2 text-gray-300 text-sm focus:outline-none lg:w-sm [&::-webkit-scrollbar]:hidden"
                    rows={3}
                    draggable={false}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                ></textarea>

                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}
