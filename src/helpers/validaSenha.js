const validaSenha = (senha) => {
  let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;
  if (!regex.test(senha))
    return false

  return true
}

module.exports = validaSenha