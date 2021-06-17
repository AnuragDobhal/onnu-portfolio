import React, { useState } from 'react'
import {useHistory } from 'react-router-dom'
// import Swal from 'sweetalert2;
import swal from 'sweetalert';
import './Contact.css'


const Form = () => {
    
    const history = useHistory();
    const [user,setUser] = useState({
        name:"", email:"", message:"" 
    });

    let name,value;
    const handleInputs =(e) =>{
        console.log(e);
         name = e.target.name;
         value = e.target.value;
 
        setUser({...user,[name]:value});
    }
        const PostData = async(e)=>{
        e.preventDefault();
        const {name , email , message} = user;

   const res = await fetch("/contact",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify({name , email , message})
   });
        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Registration Failed");
            console.log("Registration Failed");
        }else{
          //  window.alert("Registration Successful");
                                 
            swal(`Thanks ${user.name} for Contacting us,we'll revert you soon`);    //Swal is kind of alert in JavaScript 
            console.log("Registration Successful");
            history.push("./");

       
          };  





//clearing previous data

          setUser({name:"",
                   email:"",
                   message:""
        })



      }

     

    return (
        <>
              <div className="contact__container bd-grid">
               <form method="POST"  className="contact__form">

                <input type="name" placeholder="Your Name" name="name" autoComplete="off"
                   className="contact__input"  value={user.name}  onChange={handleInputs}  required/>


                <input type="email" placeholder="Your Email"  name="email" autoComplete="off"
                    className="contact__input" value={user.email}  onChange={handleInputs}  required/>

                <textarea type="text" cols="0" rows="10"  placeholder="Type Something"  name="message" autoComplete="off"
                    className="contact__input" value={user.message}  onChange={handleInputs}  required/>

                <input type="button"  value="Submit" className="submit__button btn" onClick={PostData}/>
                </form>
            </div>
        </>
    )
}
export default Form
