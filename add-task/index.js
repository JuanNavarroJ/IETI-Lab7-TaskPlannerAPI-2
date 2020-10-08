var tasks = [
    {
        description:"Implement Login View",
        status:"In Progress",
        dueDate:"2020-08-27",
        responsible:
        {
            name:"Juan Navarro",
            email:"juan.navarro@mail.escuelaing.edu.co"
        }
    },
    {
        description:"Implement Login Controller",
        status:"Ready",
        dueDate:"2020-08-27",
        responsible:
        {
            name:"Juan Navarro",
            email:"juan.navarro@mail.escuelaing.edu.co"
        }
    },
    {
        description:"Facebook Integration",
        status:"Completed",
        dueDate:"2020-08-27",
        responsible:
        {
            name:"Juan Navarro",
            email:"juan.navarro@mail.escuelaing.edu.co"
        }
    }
    
];

module.exports = async function (context, req) {
    if(req.method == "GET"){
        context.log('Getting all the tasks from the planner');
        const responseMessage = { response: tasks};
        context.res = {
            status: 200,
            body: responseMessage
        };
    }if(req.method == "POST"){
        context.log('Adding a task to the planner');
        tasks.push(req.body);
        const responseMessage = { response: req.body};
        context.res = {
            status: 201,
            body: responseMessage
        };
    }
}