const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.port || 3000

app.use(express.json()) //parses incoming json to an object
app.use(userRouter)
app.use(taskRouter)









app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})