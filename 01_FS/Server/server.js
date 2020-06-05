// const express = require("express");

// const app = express();
// const bodyParser = require("body-parser");
// const PORT = 3200;
// const cors = require("cors")

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

// /**
//  * get----provide data to readonly operetion
//  * post---create new data or object (add new entry in data)
//  * put----update the existing daata
//  * delete-remove existing data 
//  */
// /**
//  * get() takes -- url path, function call to handle request and response
//  */
// app.get("/", (request, response) => {
//     response.json("This is API Home page Welcome Message");
// });

// const Employee = [
//     {
//         id: 101,
//         name: "Morgan Freeman",
//         address: "Hollywood",
//         dept: "Actor",
//     }

//     {
//         id: 102,
//         name: "James Camaroon",
//         address: "Hollywood",
//         dept: "Director",

//     }
// ];

// app.get("/emp", (request, response) => {
//     response.send(Employee).status(200);
// });

// app.post("new_emp", (request, response) => {
//     const new_emp = request.body;
//     if (new_emp.id && new_emp.name && new_emp.address && new_emp.dept) {
//         Employee.push({
//             ...new_emp,
//             id: `${(Employee.length + 100) + 1}`,
//             date: Date.now().toString()
//         });
//         response.status(201).json({ message: "Employee has been Added" });
//     } else {
//         response.status(401).json({
//             message: "employee not valid",
//         })
//     }
// })


// app.listen(PORT, () => {
//     console.log(`API Server is running on port${PORT}`);
// });















/**********************************************************************************************************************************************************************************************/
//TODO
/**
 * food oder application
 * accept the order
 * must have order number order date, food item, quantity, cost name..
 * cost must be able to read the order
 * should be able to update the order
 * should able to delete an order
 */

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const PORT = 2020;

// const app = express();
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

// const orders = 
//     {
//         id: 1,
//         customer_name: "user_one",
//         item_name: "pasta_Dish",
//         food_qty: 1,
//         date: "06/03/2020"
//     } 

// app.get("/", function (request, response) {
//     response.send("To Place Your Order Please Provide Name, Item and Qty");

// })

// app.get("/get_order", function (request, response) {
//     response.send(orders).status(200);

// });

// //take in a new order and add it to the data

// app.post("/newOrder", (request, response) => {
//     const newOrder = request.body;
//     console.log(newOrder);

//     if (newOrder.customer_name && newOrder.food_qty && newOrder.item_name) {
//         orders.push({
//             id: `${orders.length + 1}`,
//             ...newOrder,
//             date: Date.now().toString(),
//         });
//         response.status(201).json({ message: "Order Has Been Placed" });
//     }
//     else if (newOrder.customer_name && newOrder.item_name) {
//         response.status(400).json({ message: "food quantity is missing" });
//     }
//     else {
//         response.status(400).json({ message: "Invilid order Details" });
//     }

// })


// //update an existing Order

// app.put("/order/:id", (request, response) => {
//     const order_id = request.params.id;
//     console.log(order_id);
//     const order_update = request.body;
//     console.log("order_update", order_update);

//     for (const index of orders) {
//         if (index.id === order_id) {
//             if (order_update.customer_name != null || undefined) {
//                 index.customer_name = order_update.customer_name;
//             }
//             if (order_update.item_name != null || undefined) {
//                 index.item_name = order_update.item_name;
//             }
//             if (order_update.food_qty != null || undefined) {
//                 index.food_qty = order_update.food_qty;
//             }
//             return response
//                 .status(201)
//                 .json({ message: "Order updated!!", data: index });
//         }
//     }

//     response.status(400).json({ message: "Invalid Order update request" });
// });

// //Delete or cancel the order


// app.delete("/order/:id", (request, response) => {
//     const order_id = request.params.id;
//     for (let index of orders) {
//         if (index.id === order_id) {
//             orders.splice(orders.indexOf(index), 1)
        
//         return response.status(204).json({
//             message: "Delete order is done"
//         });
//     }}
//     response.status(404).json({ message: "invalid order ID" })

// })


// app.listen(PORT, function () {
//     console.log(`Meal Service Server is running on port no ${PORT}`);

// });











