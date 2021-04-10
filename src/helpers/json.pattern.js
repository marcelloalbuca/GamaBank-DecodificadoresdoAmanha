const json = (route, name, link) =>({
    type: `${name}`,
    id: route.id,
    attributes:{
        name: route.name, 
        identity:route.cpf,
        password: route.senha,
        created_at: route.data_criacao
    },
    links: {
        self: `${link}`
    }
})

module.exports = {
    json
}