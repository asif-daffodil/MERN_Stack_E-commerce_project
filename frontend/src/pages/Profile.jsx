import { useSelector } from "react-redux";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { useState, useRef } from "react";

const Profile = () => {
    useAuthRedirect('/profile');
    const user = useSelector((state) => state.auth.user);
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [editable, setEditable] = useState(false);
    const [editBtn, setEditBtn] = useState("Edit");
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleEdit = () => {
        setEditBtn(editBtn === "Edit" ? "Save" : "Edit");
        setEditable(!editable);
        if(editBtn === "Save"){
            setName(nameRef.current.innerText);
            setEmail(emailRef.current.innerText);
            console.log("Saved:", { 
                name: nameRef.current.innerText, 
                email: emailRef.current.innerText
            });
        }
    }


    return (
        <div className="bg-linear-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                    <button className="cursor-pointer border h-max px-4 py-2 rounded hover:bg-emerald-600 hover:text-white" onClick={handleEdit}>{editBtn}</button>
                </div>
                <div className="space-y-4">
                    <div className="border-b pb-3">
                        <p className="text-sm text-gray-600">Name</p>
                        <p 
                            ref={nameRef}
                            className={`text-lg font-semibold text-gray-900 ${editable ? "border border-gray-300 rounded px-2 py-1" : ""}`} 
                            contentEditable={editable} 
                            suppressContentEditableWarning={true}
                        >
                            {name}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p 
                            ref={emailRef}
                            className={`text-lg font-semibold text-gray-900 ${editable ? "border border-gray-300 rounded px-2 py-1" : ""}`} 
                            contentEditable={editable} 
                            suppressContentEditableWarning={true}
                        >
                            {email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;