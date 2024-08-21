import mongoose from "mongoose";
import dotenv from 'dotenv'
import { DB_NAME }  from "../constants.js";
dotenv.config()

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected!! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGO connection FAILED",error);
        process.exit(1)
    }
}

export default connectDB

//-----------METHOD -1 ------------------------------------
// import express from "express"

// const app = express()


// (async () => {
//     try{
//         await mongoose.connect(`${process.env.
//             MONGODB_URI}/${DB_NAME}`)
//             app.on("error",() => {
//                 console.log('ERROR: ', error);
//                 throw error;
//             })
//             app.listen(process.env.PORT, () =>{
//                 console.log(`APP is listening on port ${process.env.PORT}`);
//             })
//     }  
//     catch(error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()

