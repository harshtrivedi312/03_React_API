// import React from 'react'
// import axios from "axios"

// const GetAPICall = () => {

//     const [message, setMessage] = React.useState({id:'',name:'',email:'',address:'',phone_number:''});

//     const callLocalAPI = async () => {
//         const response = await axios.get("http://localhost:2021/singleuser/3" , {
//             header: {
//                 "Access-Control-Allow-Origin": "*",
//             },
//         });
//         setMessage({...message, id:response.data.id,name:response.data.name,email:response.data.email,address:response.data.address,phone_number:response.data.phone_number})
//     };
//     //call the api from useeffect or button click


//     return (
//         <div>
//             <h2>API call to LocalHost 3200 APP</h2>
//             <button onClick={callLocalAPI}>Call API</button>
//             <p>id:{message.id}</p>
//             <p>name:{message.name}</p>
//             <p>email:{message.email}</p>
//             <p>address:{message.address}</p>
//             <p>phone:{message.phone_number}</p>
//         </div>
//     )
// }

// export default GetAPICall;

import React from 'react'
import axios from "axios"

const GetAPICall = () => {

    const [message, setMessage] = React.useState({ id: '', customer_name: '', item_name: '', food_qty: '', date: '' });

    const callLocalAPI = async () => {
        const response = await axios.get("http://localhost:2020/get_order", {
            header: {
                "Access-Control-Allow-Origin": "*",
            },
        });
        setMessage({ ...message, id: response.data.id, customer_name: response.data.customer_name, item_name: response.data.item_name, food_qty: response.data.food_qty, date: response.data.date })
    };
    //call the api from useeffect or button click


    return (
        <div>
            <h2>API call to LocalHost 3200 APP</h2>
            <button onClick={callLocalAPI}>Call API</button>
            <p>id:{message.id}</p>
            <p>name:{message.customer_name}</p>
            <p>email:{message.item_name}</p>
            <p>address:{message.food_qty}</p>
            <p>phone:{message.date}</p>
        </div>
    )
}

export default GetAPICall;