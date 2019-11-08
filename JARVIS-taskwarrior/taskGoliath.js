// Task API using taskwarrior

const { exec } = require('child_process');

exec('task due:today export', (err, stdout, stderr) => {
    
    if (err) {
        return;
    }

    let tasks = stdout;

    tasks = JSON.parse(tasks)

    const todayTasks = tasks.filter((task) => {return task.status === 'pending'});

    let str = `Hi, the tasks for today are`;

    todayTasks.forEach((task) => {
        str = str.concat(`, ${task.description}`)
    })


    console.log(str)
})
