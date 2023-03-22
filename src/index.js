import mongoose from "mongoose";
import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import UserModel from "./models/user.model.js";
import ViewsRouter from "./routes/views.routes.js";



const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', ViewsRouter);

await mongoose.connect('mongodb://127.0.0.1:27017', 
        {dbName: 'pizzaCoder'})

console.log('Connected to DB');

        app.listen(8080, ()=>{ console.log('Server started at port 8080');})


















// const main = async () => {
//         await mongoose.connect('mongodb://127.0.0.1:27017', 
//         {dbName: 'pizzaCoder'})

//         console.log('Connected to DB');

//         // const users = await UserModel.find({gender:"Female"});

//         const users = await UserModel.paginate({gender:"Female"},
//         {page: 6, limit: 5});
//         console.log(users);
//         process.exit();
// }       


// main();