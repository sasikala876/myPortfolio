import React, { useState } from "react";
import { GiEclipseSaw } from "react-icons/gi";
import './form.css';

const Form = () => {
//  const [color,setColor] = useState(-1);
//  const seats = [
//     {
//         id:1,
//         num:"a"
//     },
//     {
//         id:2,
//         num:"b"
//     },
//     {
//         id:3,
//         num:"c"
//     },
//     {
//         id:4,
//         num:"d"
//     }
//  ]
// const changeBackground = (id) => {
//  setColor(id);
// }







function createCookie(name,mail){
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    console.log(username,email);

    document.cookie = name + "=" + username + ";" + "expires=Sat, 01 Apr 2023 13:30:21 GMT;";
    // document.cookie = name + "=" + "cookie" + ";" + "expires=Sat, 01 Apr 2023 13:30:21 GMT;";
    console.log(document.cookie);
    document.cookie = mail + "=" + email + ";" + "expires=Sat, 01 Apr 2023 13:30:21 UTC;";
}


function getCookie(){
    if(document.cookie != 0 ){
    console.log(document.cookie);
    alert(document.cookie)
    }
    else
    alert("no cookie");
}

function deleteCookie(name,email){
   
    document.cookie =  name + "=" +  ";" + "expires=Thu, 30 Mar 2023 13:30:21 UTC;";
    document.cookie =  email  + "=" + ";" + "expires=Thu, 30 Mar 2023 13:30:21 UTC;";
}

return(

<div id="forms">
<form id="newform" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="name">Username</label>
        <input type="text" id="name" name="name" placeholder="Username"/><br/>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email"/><br/>
   
        <button onClick={()=>createCookie('username','email')}> create cookie</button>
        <button type="button" value="Delete Cookie" onClick={()=>deleteCookie('username','email')}>delete cookie</button>
        <button onClick={()=>getCookie()}> get cookie</button>

    </form>



</div>

    )
}

export default Form;