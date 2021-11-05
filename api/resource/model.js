const db = require('../../data/dbConfig');

function getResources() {
    return db('resources')
}
async function createResource(resource) {
    const [resource_id] = db('resources').insert(resource);
    return getResources().where({ resource_id }).first();
}

module.exports = {
    getResources,
    createResource
}