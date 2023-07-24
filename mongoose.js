const mongoose=require("mongoose") ;

const uri="mongodb+srv://Ishumani123:Maniishu321@cluster0.tcaohl8.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error(error);
    }
}

connect();

//

