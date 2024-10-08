import { accountValidateToCreate, createAccount } from "../../models/accountModel.js";

const create = async (req, res, next) => {
  try {
    const account = req.body
    const accountValidated = accountValidateToCreate(account)

    if (accountValidated?.success)
      return res.status(401).json({
        error: 'Erro ao criar conta.',
        fieldErrors: accountValidated.error.flatten().fieldErrors
      })

    const result = await createAccount(accountValidated.data)

    if (!result)
      return res.status(401).json({
        error: 'Erro ao criar conta.'
      })

    return res.json({
      sucess: "Conta criada com sucesso!",
      account: result
    })
  } catch (error) {
    next(error)
  }
}

export default create