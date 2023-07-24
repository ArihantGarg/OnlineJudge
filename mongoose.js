const mongoose=require("mongoose") ;

const uri="Replace with your uri";

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

