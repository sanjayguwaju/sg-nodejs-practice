const express = require('express');
require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')


// const main = async () => {
//     // const task = await Task.findById('6378ce3d65ad2fa770186698')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user = await User.findById('6378cbacf91991e83970d33f')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()