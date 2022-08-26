const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
  username: {
    type: String,
    required: true, 
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  dob: {
    type: String
  }, 
  money: {
    type: Number,
    default: 0
  },
  role: {
    type: String,
    default: "user"
  }
}, {
  versionKey: false
})

// userSchema.set("toJSON", {
//   transform: function(doc, ret, option){
//     delete ret.password
//     return ret
//   }
// })

module.exports= mongoose.model("user", userSchema)