import React from 'react';

function TaskList({tasks, onDelete}) {

    return (
        <div className="space-y-3">
            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 italic">No tasks yet. Start by adding one!</p>
            ) : (
                tasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
                    >
                        <span className="text-gray-700 font-medium">{task.text}</span>

                        <button
                            // We will wire up onDelete soon!
                            className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-md transition-colors cursor-pointer"
                            onClick={() => onDelete(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default TaskList;