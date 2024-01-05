require('../db/mongoose')
const Task = require('../models/task')

Task.findByIdAndDelete('659420d055fb2bb312e9811f').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((results)=>{
    console.log(results)
}).catch((e)=>{
    console.log(e)
})

const deleteTaskAndCount = async (id)=>{
    const Task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count 
}

deleteTaskAndCount('659420d055fb2bb312e9811f').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})