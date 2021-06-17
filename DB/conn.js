const mongoose = require('mongoose');



const DB = process.env.DATABASE;

mongoose.connect(DB,{    
    useNewUrlParser:true,    // these 4 are used to remove DeprecationWarning on the Database.
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(() => {
console.log(`connection successful`)  // if the DB connection is Successful .
}).catch((err)=> console.log(`no connection`));  // if the DB connection is unsuccessful .
