const express  = require("express");
const Project  = require('../models/project');
const router = express.Router();
const fetchUser  = require('../MiddleWare/fetchUser');

router.post('/AddProject',fetchUser, async(req,res)=>{

    try {

        const {projectTitle,startDate,endDate,description} = req.body;
        const project  = new Project({
            
            user : req.user.id , projectTitle,startDate,endDate,description
        })
        const insertProject = await project.save();
        res.json(insertProject).status("Project Add Successfull")
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured :",error);
    }
})

module.exports = router;