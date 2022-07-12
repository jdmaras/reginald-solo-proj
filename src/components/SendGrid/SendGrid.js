const sgMail = require('@sendgrid/mail')

API_KEY = 
'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'

sgMail.setApiKey(API_KEY)

const message = {
    to: 'sportsballenthusiast@gmail.com',
    from: {
        name: 'Reggie Miller Lite',
        email: 'ggmaras@msn.com',
    },
    subject: 'THANKS FROM REGGIE',
    text: 'HECK YEAH BUD, thanks for the order!',
};

sgMail.send(message)
.then(Response => console.log('Email sent!..'))
.catch(err => console.log('got an err, but',err))