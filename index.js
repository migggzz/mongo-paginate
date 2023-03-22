import mongoose from "mongoose";
import UserModel from "./models/user.model.js";

const main = async () => {
        await mongoose.connect('mongodb://127.0.0.1:27017', 
        {dbName: 'pizzaCoder'})

        console.log('Connected to DB');

        // const users = await UserModel.find({gender:"Female"});

        const users = await UserModel.paginate({gender:"Female"},
        {page: 6, limit: 5});
        console.log(users);
        process.exit();
}       


main();