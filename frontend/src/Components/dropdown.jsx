import React from "react";
import './dropdown.css'
const Dropdown = () => {
    return (
        <div className=" flex flex-col">
            <ul className=" flex flex-col gap-4">
                <li>New folder</li>
                <li>Upload File</li>
                <li>Upload Folder</li>
            </ul>
        </div>
    );
};

export default Dropdown;
