const MongoStore = require("connect-mongo");

const sessionStore = new MongoStore({
    mongoUrl: 'mongodb://127.0.0.1:27017/project-community',
    collectionName: 'session',
    autoRemove: 'interval',
    autoRemoveInterval: 10,
})
module.exports ={
 sessionStore,
}