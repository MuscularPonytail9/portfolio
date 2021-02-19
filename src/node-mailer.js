
const nodemailer = require('nodemailer');

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false,
    "auth": {
        "user": "f08c39c72a078b",
        "pass": "0431d0eaa5448c",
    }
}

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info) {
        if(error) {
            console.log(error);
        }else {
            console.log(info);        
        }
    });
};

// const content = {
//     from: "whalsrnwkd@naver.com",
//     to: "02b87e7823-415ae0@inbox.mailtrap.io",
//     subject: "test1",
//     text: "test2",

// };

export {send}
// send(content);