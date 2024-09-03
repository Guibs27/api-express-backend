import { deleteAccountById } from "../../models/accountModel.js";

const remove = async (req, res) => {
  const { id } = req.params
  const account = await deleteAccountById(+id)

  if(!account)
   return res.status(404).json({
      error: `Conta com ID ${id} não encontrado.`
    })
  
  res.json({
    message: "Conta apagada com sucesso!",
    account
  });
}

export default remove