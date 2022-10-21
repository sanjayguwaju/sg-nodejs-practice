require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('635033428274c73e8c9c60ad', { age: 35 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 25 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndDelete('6350ab2ed75f809171c75581').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ age: 25 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('635033428274c73e8c9c60ad', 30).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})