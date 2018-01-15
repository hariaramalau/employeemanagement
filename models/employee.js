const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/employeemanagement", { useMongoClient: true });

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    name: String,
    address: String,
    phoneNumber: String,
    salary: Number,
    profile : String

})

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
