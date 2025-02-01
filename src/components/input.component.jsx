import {useState} from "react";

const InputBox = ({ name, type, id, value, placeholder }) => {

    const [ passwordVisible, setPasswordVisible ] = useState(false);

    return (
        <div className="relative w-[100%] mb-4">
            <input 
                name={name}
                type={ type == "password" ? passwordVisible : "text" ? "password" : type }
                placeholder={placeholder}
                defulatValue={value}
                id={id}
                className="input-box"
            />

            <i className={"fi " + icon + " input-icon"}></i>

            {
                type == "password" ?
                <i className={"fi fi-rr-eye" + (!passwordVisible ? + "-crossed" : "") + " input-icon left-[auto] right-4 cursor-pointer"} onClick={() => setPasswordVisible(currentVal => !currentVal)}></i> 
                : ""
            }
{/* the : "" it means otherwise similar like if else, s o else nothing "" */}

        </div>
    )
}

export default InputBox;