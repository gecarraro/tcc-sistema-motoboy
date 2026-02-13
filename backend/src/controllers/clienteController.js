const service = require("../services/clienteService");

async function criar(req,res){
  try{
    const cliente = await service.criarCliente(req.body);
    res.json(cliente);

  }catch(err){

    if(err.code==="P2002"){
      return res.status(400).json({erro:"CPF/CNPJ já cadastrado"});
    }

    res.status(500).json({erro:"Erro ao criar cliente"});
  }
}

async function listar(req,res){
  const lista = await service.listarClientes();
  res.json(lista);
}

module.exports={
  criar,
  listar
};
