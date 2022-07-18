const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const API_KEY = process.env.SuperFreakinSecret;
sgMail.setApiKey(API_KEY);

function sendThatEmail(purchasedItems, user) {
  const message = {
    //need to find the user.email for these
    to: `${user.email}`,
    from: {
      name: "Reggie Miller Lite",
      // this is the email it will post the email from
      email: "sportsballenthusiast@gmail.com",
    },
    subject: "THANKS FROM REGGIE", //this maps through items ordered and sends in email
    text: `HECK YEAH BUD, thanks for the order! Thank you for purchasing ${purchasedItems
      .map((item) => item.product_name)
      .join(", ")}!`,
  };

  sgMail
    .send(message)
    .then((Response) => console.log("Email sent!.."))
    .catch((err) => console.log("got an err, but", err));
}
module.exports = sendThatEmail;
