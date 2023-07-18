const mongoose=require("mongoose") ;

const uri="<REPLACE THIS WITH YOUR OWN MongoDb database URI";

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

