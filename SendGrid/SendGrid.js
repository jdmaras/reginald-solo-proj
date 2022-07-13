const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const API_KEY = process.env.SuperFreakinSecret
sgMail.setApiKey(API_KEY)

function sendThatEmail(purchasedItems){
    
    const message = {
        //need to find the user.email for these
        to: 'sportsballenthusiast@gmail.com',
        from: {
            name: 'Reggie Miller Lite',
            // have to set up a burner email for this so mine isn't used !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            email: 'ggmaras@msn.com',
        },
        subject: 'THANKS FROM REGGIE',                                              //this maps through items ordered and sends in email
        text: `HECK YEAH BUD, thanks for the order! Thank you for purchasing ${purchasedItems.map(item => item.product_name).join(', ')}!`
    };
    
sgMail.send(message)
.then(Response => console.log('Email sent!..'))
.catch(err => console.log('got an err, but',err))
}
module.exports = sendThatEmail
