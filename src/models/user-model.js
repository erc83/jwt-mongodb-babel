import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: { 
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role",
    },
    ],
},{
    timestamp: true,
    versionKey: false,
})


userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt); 
    return hash
}


userSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


export default model("User", userSchema);