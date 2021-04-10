const bcrypt = require('bcrypt')

module.exports = {
  encryptPassword: async (password, salt) => {
    if (!salt) salt = await bcrypt.genSalt()

    return {
      encryptedPassword: bcrypt.hashSync(password, salt),
      salt: salt
    }
  },

  comparePassword: async (password, encryptedPasswordToCompare) => {
    return await bcrypt.compare(password, encryptedPasswordToCompare)
  }
}