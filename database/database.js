const mongoose = require('mongoose');

dbUrl = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true';

module.exports = () => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.info("Successfully connected to the database");
    }).catch(err => {
        console.error('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
    mongoose.Promise = global.Promise;
}