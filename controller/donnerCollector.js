const usermodel = require("../models/donnerModel.js")
const jwt = require("jsonwebtoken")
const { isValidName, isValidTitle, isValidPhone, isValidEmail, isValidPassword, isValidObjectId, isPresent,
    isValidDate } = require("../middleware/validation.js")

const createUsers = async function (req, res) {
    try {
        let data = req.body
        let { title, name, phone, email, password } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "please provide valid info" })

        //-----validation for title------//
        if (!isPresent(title)) return res.status(400).send({ status: false, message: " title is not present" })
        if (!isValidTitle(title)) return res.status(400).send({ status: false, message: "provide valid title" })
        data.title = title

        //--------validation for name------//
        if (!isPresent(name)) return res.status(400).send({ status: false, message: " name is not present" })
        if (!isValidName(name)) return res.status(400).send({ status: false, message: "provide valid name" })
        data.name = name

        //--------validation for phone------//
        if (!isPresent(phone)) return res.status(400).send({ status: false, message: " phone no. is not present" })
        if (!isValidPhone(phone)) return res.status(400).send({ status: false, message: "provide valid phone" })
        const phonecheck = await usermodel.findOne({ phone: phone })
        if (phonecheck) return res.status(400).send({ status: false, message: "this number is already present" })
        data.phone = phone

          //--------validation for email------//
          if (!isPresent(email)) return res.status(400).send({ status: false, message: " email  is not present" })
          if (!isValidEmail(password)) return res.status(400).send({ status: false, message: "provide valid email" })
          const checkemail = await usermodel.findOne({ email: email })
          if (checkemail) return res.status(400).send({ status: false, message: "this email is already present" })
          data.email = email

            //--------validation for password------//
        if (!isPresent(password)) return res.status(400).send({ status: false, message: " pone no. is not present" })
        if (!isValidPassword(password)) return res.status(400).send({ status: false, message: "provide valid phone" })
        data.password=password



        const createData = await usermodel.create(data)
        return res.status(201).send({ status: true, message: "success", data: createData })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}


module.exports = { createUsers }