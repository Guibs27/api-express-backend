import { deleteAccountById } from "../../models/accountModel.js";

const remove = async (req, res) => {
    const { id } = req.params
    const account = await deleteAccountById(+id)

    res.json({
      message: "Conta apagada com sucesso.",
      account
    });
}

export default remove