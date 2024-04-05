const mongoose = require('mongoose')
const {schema} = mongoose

const userSchema = new  mongoose.schema({
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: String,
    address: { type: String, default: 'Not provided' },
    role: { type: String, default: "Customer"}
})

const adminSchema = new mongoose .schema({
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: String,
    address: { type: String, default: 'Not provided' },
    role: { type: String, default: "Admin"}
})

const carsSchema = new mongoose.schema({
    // leaving this empty for further discussion
})