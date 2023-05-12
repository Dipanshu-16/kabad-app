const mongoose = required("mongoose")

const donnerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: date,
        default: date.now
    }


})
module.exports = mongoose.model("Donner", donnerSchema)