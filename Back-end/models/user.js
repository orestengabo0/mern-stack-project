const mongoose = require('mongoose');
const Joi = require('joi')

const userSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  firstName: { 
    type: String, 
    required: true 
},
  lastName: { 
    type: String,
    required: true 
},
  position: { 
    type: String, 
    required: true 
},
  company: { 
    type: String, 
    required: true 
},
  businessArena: { 
    type: String, 
    required: true 
},
  employees: { 
    type: String, 
    required: true 
},
  streetNr: { 
    type: String, 
    required: true 
},
  additionalInfo: { 
    type: String 
},
  zipCode: { 
    type: String, 
    required: true
 },
  place: { 
    type: String, 
    required: true 
},
  country: { 
    type: String, 
    required: true 
},
  code: { 
    type: String, 
    required: true 
},
  phoneNumber: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true 
},
  terms: { 
    type: Boolean, 
    required: true 
}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

const validateInputs = (input) =>{
    const schema = Joi.object({
        title: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        position: Joi.string().required(),
        company: Joi.string().required(),
        businessArena: Joi.string().required(),
        employees: Joi.string().required(),
        streetNr: Joi.string().required(),
        additionalInfo: Joi.string().optional(),
        zipCode: Joi.string().required(),
        place: Joi.string().required(),
        country: Joi.string().required(),
        code: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        email: Joi.string().email().required(),
        terms: Joi.boolean().required()
    });
    return schema.validate(input)
}

module.exports.User = User;
module.exports.validate = validateInputs
