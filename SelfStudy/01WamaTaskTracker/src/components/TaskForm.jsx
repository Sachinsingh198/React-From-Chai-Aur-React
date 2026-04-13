import React, {useEffect, useState} from 'react';

function TaskForm({onAddTask, editingTask, onUpdateTask}) {

    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(userInput);

        if(editingTask){
            onUpdateTask(editingTask.id, userInput);
        }
        else {
            onAddTask(userInput);
        }

        setUserInput("");
    }

    useEffect(() => {
        if(editingTask){
            setUserInput(editingTask.text)
        }
    }, [editingTask]);

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex gap-2"
            >
                <input
                    type="text"
                    value = {userInput}
                    onChange = {(e) => setUserInput(e.target.value)}
                    placeholder="What need to be done?"
                    className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    type="submit"
                >
                    {editingTask ? "Update Task" : "Add Task"}
                </button>
            </form>
        </>
    )
}

export default TaskForm;