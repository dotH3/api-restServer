const {Schema, model} = require('mongoose')

const UserSchema = Schema({
    name:{
        type: String,
        required:[true,'El nombre es obligatiorio'],

    },
    mail:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria'],
    },
    status:{
        type:Boolean,
        default:true
    }
})


//modifico el objeto user para que no devuelva los datos que no quiero que el usuario vea

UserSchema.methods.toJSON = function(){
    const {__v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User',UserSchema);