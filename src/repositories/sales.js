const { prisma } = require('../services/prisma')

exports.createSale = async (data) => {
	const sale = await prisma.sales.create({
		data,
	})
	return sale
} 

exports.getSales = async () => {
	const sales = await prisma.sales.findMany({})
	return sales
}

exports.getById = async (id) => {
	const sale = await prisma.sales.findUnique({
		where: {
			id,
		}
	})

	return sale
}

exports.updateSale = async (id, data) => {
	const sale = await prisma.sale.update({
		where: {
			id,
		},
		data
	})
	return sale
}

exports.removeSale = async (id) => {
	await prisma.sale.delete({
		where: {
			id,
		},
	})
}