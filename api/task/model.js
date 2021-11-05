const db = require('../../data/dbConfig');

function getTasks() {
    return db('tasks')
}
async function createTask(task) {
    const [task_id] = db('resources').insert(task);
    return getTasks().where({ task_id }).first();
}

module.exports = {
    getTasks,
    createTask
}