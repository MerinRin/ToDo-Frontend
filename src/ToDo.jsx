import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { deletetodoAPI, updatetodoAPI } from './service/allApi';

function ToDo({ todo, handleGet }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(todo.task);  // local state for editing

    // delete todo
    const handleDelete = async (id) => {
        try {
            await deletetodoAPI(id);
            console.log("Deleted:", id);
            handleGet();
        } catch (error) {
            console.log(error);
        }
    };

    // enable edit mode
    const handleEdit = () => {
        setIsEditing(true);
    };

    // save edited task
    const handleSave = async () => {
        try {
            await updatetodoAPI(todo.id, { task: editTask });
            setIsEditing(false);  // back to normal view
            handleGet();          // refresh todos
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className='d-flex justify-content-between align-items-center mt-4 p-3 rounded rounded-3'
            style={{ backgroundColor: "rgba(247,211,211,255)" }}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className="form-control fw-bold"
                    style={{ outline: "none", boxShadow: "none"}}
                    
                />
            ) : (
                <div className='fw-bold'>{todo.task}</div>
            )}

            <div>
                {isEditing ? (
                    <button
                        onClick={handleSave}
                        style={{ backgroundColor: "rgba(247,211,211,255)" }}
                        className='border-0 px-2 px-md-3 fw-bold'
                    >
                        Save
                    </button>
                ) : (
                    <div>
                        <button
                            onClick={handleEdit}
                            style={{ backgroundColor: "rgba(247,211,211,255)" }}
                            className='border-0 px-2 px-md-3'
                        >
                            <CiEdit size={30} />
                        </button>
                        <button
                            onClick={() => handleDelete(todo.id)}
                            style={{ backgroundColor: "rgba(247,211,211,255)" }}
                            className='border-0'
                        >
                            <AiOutlineDelete size={25} />
                        </button>
                    </div>



                )}


            </div>
        </div>
    )
}

export default ToDo;
