const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

function validateEmail(email) {
    const re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return re.test(String(email).toLowerCase());
}

const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        unique: true,
        validate: [validateEmail]
      },
    password: {
        type: String,
        required: 'Password is required'
    },
    role : {
        type: String,
        required: 'Role is required'
    }
},
{
    timestamps:true
});

UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;