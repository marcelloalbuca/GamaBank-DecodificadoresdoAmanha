const nodemailer = require("nodemailer");
const configs = require("../configs/env");

const setup = async () => {
  let account;
  let accountPromise = new Promise(async (resolve, reject) => {
    if (configs.env === "test" || configs.env === "development") {
      account = await nodemailer.createTestAccount();
      resolve(account);
    }
    resolve(0);
  });

  account = await accountPromise;

  const nodemailerConfigs = () => {
    if (account) {
      return {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      };
    } else {
      return {
        service: "gmail",
        auth: {
          user: configs.mail.user,
          pass: configs.mail.pass,
        },
      };
    }
  };

  const transporter = nodemailer.createTransport(nodemailerConfigs());

  return transporter;
};

async function sendMailFunction(to, emailModel) {
  const transporter = await setup();

  let info = await transporter.sendMail({
    from: '"GamaBank😎" <foo@example.com>', // sender address
    to: to, // list of receivers
    subject: emailModel.subject, // Subject line
    text: emailModel.text, // plain text body
    html: emailModel.html, // html body
  });
  //A linha abaixo só roda se a função for chamada em modo teste ou desenvolvimento.
  if (configs.env === "test" || configs.env === "development")
    console.log("\n Preview URL: %s", nodemailer.getTestMessageUrl(info), "\n");
}

module.exports = { sendMailFunction };
