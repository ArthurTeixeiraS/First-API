const express = require('express')

const projects =[
    {
        id: 1,
        name:'First Project',
        description: "My old Project",
        author: "Arthur Teixeira"
    },
    {
        id: 2,
        name:'Second Project',
        description: "My other Project",
        author: "Arthur Teixeira"
    },
    {
        id: 3,
        name:'Third  Project',
        description: "My another Project",
        author: "Arthur Teixeira"
    },
    {
        id: 4,
        name:'Fourth Project',
        description: "My new Project",
        author: "Arthur Teixeira"
    }
]

const app = express()

const router = express.Router()

router.get('/projects', (request, response)=>{
    const {id} = request.query
    if(!id){
        return response.status(200).send(projects)
    }
    const projectsById = projects.filter((project) => project.id == id)
    if (projectsById.length > 0){
        return response.status(200).send(projectsById)
    }
    return response.status(500).send({error: 'Project Not Found'})
})
app.use(router)

app.listen(3000, () => console.log('Server Start at port 3000'))