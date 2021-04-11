const { sendMailFunction } = require("../../helpers/mail");
const { signUpEmail, paidInstallmentEmail, creditCardEntryEmail, paidDebitEmail } = require("../models/emails");

//ENTRADAS: receiverInfo=> Objeto com as info necessárias. Varia de func pra func.

const sendSignupEmail = async (receiverInfo) =>
  await sendMailFunction(receiverInfo.clientEmail, signUpEmail(receiverInfo)); // TO: email, nome, senha do cartao, numero do cartao, accountNumber,
const sendPaidInstallmentEmail = async (receiverInfo) =>
  await sendMailFunction(
    receiverInfo.clientEmail,
    paidInstallmentEmail(receiverInfo)
  );
const sendCreditCardEntryEmail = async (receiverInfo) =>
  await sendMailFunction(
    receiverInfo.clientData.clientEmail,
    creditCardEntryEmail(receiverInfo)
  );
const sendPaidDebitEmail = async (receiverInfo) =>
  await sendMailFunction(receiverInfo.email, paidDebitEmail(receiverInfo));

module.exports = {
  sendSignupEmail,
  sendPaidInstallmentEmail,
  sendCreditCardEntryEmail,
  sendPaidDebitEmail,
};
