const {Schema, model} = require('mongoose')

const CommentSchema = Schema({
    name:{
        type: String,
        required:[true,'El nombre es obligatiorio'],
    },
    comment:{
        type: String,
        required:[true,'El comentario es obligatorio']
    }
})


//modifico el objeto user para que no devuelva los datos que no quiero que el usuario vea



module.exports = model('Comment',CommentSchema);