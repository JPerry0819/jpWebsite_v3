const Contact = require('../models/contactModel');

const handleContact = async (req, res) => {
    console.log('handleContact fires');
    const { company, contact, phone, email, message } = req.body;
    console.log(req.body);

    try {
        const newContact = await Contact.create({
            company,
            contact,
            phone,
            email,
            message
        });

        console.log('handleConnect is still working');

        if (newContact) {
            res.status(201).json({
                _id: newContact.id,
                company: newContact.company,
                contact: newContact.contact,
                phone: newContact.phone,
                email: newContact.email,
                message: newContact.message
            });
            console.log('Dang DUDE you did it!');
        }
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { handleContact };
