import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const listAccounts = async () => {
  const accounts = await prisma.account.findMany()
  return accounts
}

export const getByIdAccount = async (id) => {
  const account = await prisma.account.findUnique({
    where: {
      id: id
    }
  })
  return account
}

export const createAccount = async (account) => {
  const result = await prisma.account.create({
    data: account
  })
  return result
}

export const deleteAccountById = async (id) => {
  const account = await prisma.account.delete({
    where: {
      id
    }
  })
  return account
}

export const updateAccount = async (account) => {
  const result = await prisma.account.update({
    data: account,
    where: {
      id: account.id
    }
  })
  return result
}

