import { Habits } from "@/features/habits/components"

export default function Home() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-black p-4 font-sans">
            <main className="flex w-full max-w-5xl flex-col items-center">
                <Habits />
            </main>
        </div>
    )
}
