import { useRef, useState } from "react";

function Form () {
   
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        signUpNotification: false

    }); 

    function validations() {
        const emailRegex = /\S+@\S+.\S+/;
        const phoneRegex = /^[0-9]{10}$/;
        const errors = [];

        if(userInfo.name.length === 0) {
            errors.push("name can not be empty")
        }
        if(userInfo.email.length === 0 || !emailRegex.test(formData.email)) {
            
            errors.push("email can not be empty")
        }
        if(userInfo.phoneNumber.length === 0 || !phoneRegex.test(formData.phoneNumber)) {
            errors.push("phone number must be properly formatted")
        }
        if(userInfo.bio.length > 280) {
            errors.push("bio must not be over 280 characters")
        }
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
         if(validations().length === 0) {
             setUserInfo({
                name: "",
                email: "",
                phoneNumber: "",
                phoneType: "",
                staff: "",
                bio: "",
                signUpNotification: false
        
            })
         }
    }

    function handleChange(input) {
        return (e) => {
            e.preventDefault();
            setUserInfo(Object.assign({}, userInfo, {[input]: e.target.value }))

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Name:
                <input type="text" value={userInfo.name} onChange={handleChange("name")}></input>
            </label>
            <label>Email:
                <input></input>
            </label>
            <label>Phone Number:
                <input></input>
            </label>
            <label>Phone Type

            </label>
            <select></select>
            <textarea></textarea>
            <button>Submit</button>
        </form>
    )
}

export default Form