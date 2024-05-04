import User from '../models/forms.model.js'


const fromDataHandlerController = async(req,res)=>{
    const{name, age, email, question_one, question_two, imagePath} = req.body
    try{
        const user = await User.create({
            name,
            age,
            email,
            question_one,
            question_two,
            imagePath:req.file.path,
        });
        if(user)
        return res.status(202).json({message:"Data submitted successfully"});
        else
        throw new Error("Data not submitted Successfully")
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}



export default fromDataHandlerController