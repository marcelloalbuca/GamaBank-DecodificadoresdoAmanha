const {listarExtratosPorId} = require('../service/usuarioService');

const transformer = result =>({
    type: 'extratos',
    id: result.id,
    atributes: {
       user: result.user_name,
        transaction:result.transaction_nome, 
        valor: result.valor, 
        data_criacao:result.data_criacao
    },
    links:{
        self: `/api/extratos/${result.id}`
    }
})

const extratos = async (request, h)=>{
    const { id } = request.params
    // try {
    //     return await usuarioService.buscarExtratosPorId(id)
    //   } catch (error) {
    //     console.log(error)
    //     return { message: 'Erro ao listar usuário!' }
    //   }
    // }
   
        const result = await listarExtratosPorId(id)
        return result.map(transformer)
    
}
 
module.exports = {
    extratos
}
