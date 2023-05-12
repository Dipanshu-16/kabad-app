const mongoose = required("mongoose")

const orderSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'Donner',
        required: true,
        trim: true
    },
    Quantity: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'completed', 'cancelled']
    },
    phone: {
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
module.exports = mongoose.model("Order", orderSchema)