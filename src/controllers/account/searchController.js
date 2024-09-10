import { getByIdAccount } from "../../models/accountModel.js";

const search = async (req, res, next) => {
  try {
    const { id } = req.params
    const account = await getByIdAccount(+id)

    if (!account)
      return res.status(404).json({
        error: `Conta com ID ${id} não encontrado.`
      })

    res.json({
      sucess: "Conta encontrada com sucesso!",
      account
    })
  } catch (error) {
    next(error)
  }
}

export default search