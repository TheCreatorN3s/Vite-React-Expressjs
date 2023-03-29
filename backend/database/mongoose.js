const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongodb'))
    .catch((error) => console.log(`Ha ocurrido un error en la base de datos ${error}`));


const usersSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
})

const user = mongoose.model('User', usersSchema);

module.exports = user 