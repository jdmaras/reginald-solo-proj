const sgMail = require('@sendgrid/mail')
require('dotenv').config()

API_KEY=process.env.SuperFreakinSecret


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
        subject: 'THANKS FROM REGGIE',
        text: `HECK YEAH BUD, thanks for the order! Thank you for purchasing ${JSON.stringify(purchasedItems.map(item => item.product_name))}!`,
    };
sgMail.send(message)
.then(Response => console.log('Email sent!..'))
.catch(err => console.log('got an err, but',err))
}
module.exports = sendThatEmail
