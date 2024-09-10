import { deleteAccountById } from "../../models/accountModel.js";

const remove = async (req, res, next) => {
  const { id } = req.params

  try {
    const account = await deleteAccountById(+id)

    return res.json({
      success: "Conta apagada com sucesso!",
      account
    })
  } catch (error) {
    if (error?.code === 'P2025')
      return res.status(404).json({
        error: `Conta com ID ${id} não encontrado.`
      })

    next(error)
  }
}

export default remove