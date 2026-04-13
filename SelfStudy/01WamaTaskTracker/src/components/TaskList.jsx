import React from 'react';

function TaskList({tasks, onDelete, onEdit}) {

    return (
        <div className="space-y-3">
            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 italic">No tasks yet. Start by adding one!</p>
            ) : (
                tasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow w-full"
                    >
                        {/* 1. Added flex-1, pr-4, and break-all */}
                        <span
                            className="text-gray-700 font-medium flex-1 pr-4 break-all overflow-hidden">
                            {task.text}
                        </span>

                        {/* 2. Grouped buttons with flex-shrink-0 so they never get squished */}
                        <div className="flex gap-2 flex-shrink-0">
                            <button
                                className="text-green-600 hover:bg-green-200 px-3 py-1 rounded-md transition-colors cursor-pointer text-sm font-semibold"
                                onClick={() => onEdit(task)}
                            >
                                Edit
                            </button>

                            <button
                                className="text-red-500 hover:bg-red-100 px-3 py-1 rounded-md transition-colors cursor-pointer text-sm font-semibold"
                                onClick={() => onDelete(task.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default TaskList;