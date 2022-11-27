const {Schema, model} = require('mongoose')

const ProductSchema = Schema({
    name:{
        type: String,
        required:[true,'El nombre es obligatiorio'],
    },
    img:{
        type:String
    },
    description:{
        type:String
    },
    price:{
      type:Number,
      required:[true,'El precio es obligatorio']
    },
    category:{
      type:Schema.Types.ObjectId,
      ref:"Category"
    },
    stock:{
      type:Number,
      required:[true,'El stock el obligatorio']
    },
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
      required:[true,'El owner es obligatorio']
    },
    status:{
        type:Boolean,
        default:true
    }
})

ProductSchema.methods.toJSON = function () {
    const { __v, ...rest } = this.toObject()
    return rest
  }

const ProductModel = model('Product',ProductSchema);

module.exports = ProductModel;
