const express = require('express');
const cors = require('cors');
const http = require('http');
const dbConnect = require('./db/dbConnect')
const bodyParser = require('body-parser')
const app = express();
const PORT = 3001;


const server = http.createServer(app);

const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: function ( origin, callback) {
        if(!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(cors());

dbConnect.connectMysql();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to office-chef'});
});

const userRouter = require('./router/userRoutes')
const recipeRouter = require('./router/recipeRoutes')

app.use('/api/userRoutes', userRouter)
app.use('/api/recipeRoutes', recipeRouter)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});




//----------------------------------------------------------------------------------------------------------------//

// const { Server } = require('socket.io');

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// });


// io.on("connection", (socket) => {
//     console.log(`User connected ${socket.id}`);

//     socket.on('send_message', (data) => {
//         socket.broadcast.emit("receive_message", data)
//     })
// })