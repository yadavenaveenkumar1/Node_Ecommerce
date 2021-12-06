const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://alakhail1:alakhail@cluster0.0wzgu.mongodb.net/register?retryWrites=true&w=majority',{
    useNewUrlPraser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connected");

}).catch((e)=>{
    console.log("not connected");
})



