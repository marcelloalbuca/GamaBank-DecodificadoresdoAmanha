const dateToUTC = date => new Date(date * 1000).toISOString().slice(0,19).replace('T',' ')
const dateDDMMYYYY = date => dateToUTC(date / 1000).split(" ")[0]

module.exports = {dateToUTC, dateDDMMYYYY}