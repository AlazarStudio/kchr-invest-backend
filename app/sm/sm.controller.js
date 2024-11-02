import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

// @desc    Get supportMeasures
// @route   GET /api/supportMeasures
// @access  Private
export const getSupportMeasures = asyncHandler(async (req, res) => {
	const { range, sort, filter } = req.query

	const sortField = sort ? JSON.parse(sort)[0] : 'createdAt'
	const sortOrder = sort ? JSON.parse(sort)[1].toLowerCase() : 'desc'

	const rangeStart = range ? JSON.parse(range)[0] : 0
	const rangeEnd = range ? JSON.parse(range)[1] : 9

	const totalSupportMeasures = await prisma.supportMeasures.count()

	const supportMeasures = await prisma.supportMeasures.findMany({
		skip: rangeStart,
		take: rangeEnd - rangeStart + 1,
		orderBy: {
			[sortField]: sortOrder
		}
	})

	res.set(
		'Content-Range',
		`info ${rangeStart}-${rangeEnd}/${totalSupportMeasures}`
	)
	res.json(supportMeasures)
})

// @desc    Get supportMeasures
// @route   GET /api/supportMeasures/:id
// @access  Private
export const getSupportMeasure = asyncHandler(async (req, res) => {
	const supportMeasures = await prisma.supportMeasures.findUnique({
		where: { id: +req.params.id }
	})

	if (!supportMeasures) {
		res.status(404)
		throw new Error('Support Measures not found!')
	}

	res.json({ ...supportMeasures })
})

// @desc    Create new supportMeasures
// @route 	POST /api/supportMeasures
// @access  Private
export const createNewSupportMeasure = asyncHandler(async (req, res) => {
	const { title, images } = req.body

	const imagePaths = images.map(image =>
		typeof image === 'object' ? `/uploads/${image.rawFile.path}` : image
	)

	const supportMeasures = await prisma.supportMeasures.create({
		data: { title, images: imagePaths }
	})

	res.json(supportMeasures)
})

// @desc    Update supportMeasures
// @route 	PUT /api/supportMeasures/:id
// @access  Private
export const updateSupportMeasure = asyncHandler(async (req, res) => {
	const { title, images } = req.body

	try {
		const supportMeasures = await prisma.supportMeasures.update({
			where: {
				id: +req.params.id
			},
			data: { title, images }
		})

		res.json(supportMeasures)
	} catch (error) {
		res.status(404)
		throw new Error('Support Measures not found!')
	}
})

// @desc    Delete supportMeasures
// @route 	DELETE /api/supportMeasures/:id
// @access  Private
export const deleteSupportMeasure = asyncHandler(async (req, res) => {
	try {
		const supportMeasures = await prisma.supportMeasures.delete({
			where: {
				id: +req.params.id
			}
		})

		res.json({ message: 'Support Measures deleted!' })
	} catch (error) {
		res.status(404)
		throw new Error('Support Measures not found!')
	}
})
