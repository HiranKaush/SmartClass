const mongoose = require('mongoose');

const PaymentforTeacherByStdSchema = new mongoose.Schema({
    inst_ID:{
        type:String
    },
    std_ID:{
        type:String
    },
    name:{
        type:String
    },
    amount:{
        type : Number,
    },
    month :{
        type:String
    },
    classID:{
        type:String
    },
    className:{
        type:String
    },
    status:
    {
        type:String,
        enum:["paid",'not']    
    },
    date:{
        type:Date
    }

});

const PaymentModel = mongoose.model("PaymentForTeacherByStudent", PaymentforTeacherByStdSchema);

module.exports = PaymentModel;
