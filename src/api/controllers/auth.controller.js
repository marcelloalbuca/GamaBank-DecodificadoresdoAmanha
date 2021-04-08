const login = (request, h) => {
    const { username, password } = request.payload
}

const validate = (request, h)=>{}

module.exports = {
    login,
    validate
}