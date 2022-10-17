const mongoose = require('mongoose');

function dbConnect(){
    try{
        mongoose.connect('mongodb+srv://root:Password123@cluster0.jhkwy0f.mongodb.net/?retryWrites=true&w=majority',()=>{
            console.log('MongoDB Connected..')
        })
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = {dbConnect};