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

    const [errors, setErrors] = useState([]);

    function validations() {
        const emailRegex = /\S+@\S+.\S+/;
        const phoneRegex = /^[0-9]{10}$/;
        const errors = [];

        if(userInfo.name.length === 0) {
            errors.push("name can not be empty")
        }
        if(userInfo.email.length === 0 || !emailRegex.test(userInfo.email)) {
            
            errors.push("email can not be empty")
        }
        if(userInfo.phoneNumber.length === 0 || !phoneRegex.test(userInfo.phoneNumber)) {
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
        let errors = validations();
        if(errors.length){
            setErrors(errors);
        }else{
            setErrors([])
            alert("login is good!")

        }
         console.log(userInfo)
    }

    const showErrors = ()=>{
        if(!errors.length) return null;
        return (
            <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul>
        )
    }

    function handleChange(input) {
        return (e) => {
            e.preventDefault();
            setUserInfo(Object.assign({}, userInfo, {[input]: e.target.value }))

        }
    }

    return (
        <div>
        {showErrors()}
        <form onSubmit={handleSubmit}>
            <label >Name:
                <input type="text" value={userInfo.name} onChange={handleChange("name")}></input>
            </label>
            <label>Email:
                <input type="text" value={userInfo.email} onChange={handleChange("email")}></input>
            </label>
            <label>Phone Number:
                <input type="text" value={userInfo.phoneNumber} onChange={handleChange("phoneNumber")}></input>
            </label>
            <label>Phone Type
            <select name="phoneType" onChange={handleChange("phoneType")}>
                <option value={userInfo.phoneType} diabled> Choose your phone type..</option>
                <option>Home</option>
                <option>Work</option>
                <option>Cell</option>
            </select>
            </label>
            <label>
            Staff:
            <label>
            <input
                type="radio"
                name="staff"
                value={userInfo.staff}
                onChange={handleChange("staff")}
            /> Instructor
            </label>
            <label>
            <input
                type="radio"
                name="staff"
                value={userInfo.staff}
                onChange={handleChange("staff")}
            /> Student
            </label>
        </label>
            <label>
            Bio
            <textarea value={userInfo.bio} onChange={handleChange("bio")} ></textarea>
            </label>
            <label>
            Sign Up for Email Notifications
            </label>
            <input type="checkbox" value={userInfo.signUpNotification} onChange={handleChange("signUpNotification")}></input>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form