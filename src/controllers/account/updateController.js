import { updateAccount } from "../../models/accountModel.js";

const update = async (req, res) => {
  const account = req.body
  const {id} = req.params
  account.id = +id

  const result = await updateAccount(account)

  if(!result)
    return res.status(401).json({
      error: 'Erro ao atualizar conta.'
    })

  return res.json({
    sucess: "Conta atualizada com sucesso!",
    account: result
  })
}

export default update