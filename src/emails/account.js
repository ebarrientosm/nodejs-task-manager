const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'edwin.ebarrientos@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        html: `Welcome to the app, ${name}. Let me know how you get along with the app.`

    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'edwin.ebarrientos@gmail.com',
        subject: 'We are sorry to see you go.',
        text: `Hello ${name}, we are sorry that you decided to leave our community, the doors will be always open to you if you ever decide to come back.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}