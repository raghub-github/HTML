const User = require('../models/user_model');
const Contact = require('../models/contact_schema');

const getAllusers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContacts = async (req, res) => {
    try {
        const data = await Contact.find();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: "Message not found" });
    }
};

module.exports = { getAllusers, getAllContacts };