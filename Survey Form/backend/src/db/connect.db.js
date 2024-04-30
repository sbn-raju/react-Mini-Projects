import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_NAME);
        console.log("DB Connected");
    }
    catch(err){
        console.log(err);
    }
}

export default connection