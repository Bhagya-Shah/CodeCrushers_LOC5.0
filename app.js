require('dotenv').config();
require('express-async-errors')
const express =require('express')
const cors =require('cors')
const connection = require('./connectDb')
const router = require('./routes/index')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express()
const port = process.env.PORT || 5500

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/api',router)

app.get('/',(req,res)=>{
    return res.send('Hello')
})


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port,async()=>{
    try {
        console.log(`Server listening on ${port}`);
        await connection(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
    
})