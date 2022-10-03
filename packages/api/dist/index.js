"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import routes
const user_routes_1 = __importDefault(require("./routes/user.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// use error handler
// app.use(ErrorHandler({ log: true }));
// routes 
app.use('/user', user_routes_1.default);
app.get('/', (req, res) => {
    res.send('Express + Typescript!');
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
