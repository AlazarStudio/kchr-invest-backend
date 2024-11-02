import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

// @desc    Get info
// @route   GET /api/info
// @access  Private
export const getInfos = asyncHandler(async (req, res) => {
	const { range, sort, filter } = req.query

	const sortField = sort ? JSON.parse(sort)[0] : 'createdAt'
	const sortOrder = sort ? JSON.parse(sort)[1].toLowerCase() : 'desc'

	const rangeStart = range ? JSON.parse(range)[0] : 0
	const rangeEnd = range ? JSON.parse(range)[1] : 9

	const totalInfo = await prisma.info.count()

	const info = await prisma.info.findMany({
		skip: rangeStart,
		take: rangeEnd - rangeStart + 1,
		orderBy: {
			[sortField]: sortOrder
		}
	})

	res.set('Content-Range', `info ${rangeStart}-${rangeEnd}/${totalInfo}`)
	res.json(info)
})

// @desc    Get info
// @route   GET /api/info/:id
// @access  Private
export const getInfo = asyncHandler(async (req, res) => {
	const info = await prisma.info.findUnique({
		where: { id: +req.params.id }
	})

	if (!info) {
		res.status(404)
		throw new Error('Info not found!')
	}

	res.json({ ...info })
})

// @desc    Create new info
// @route 	POST /api/info
// @access  Private
export const createNewInfo = asyncHandler(async (req, res) => {
	const { text } = req.body

	await prisma.info.deleteMany()

	const info = await prisma.info.create({
		data: {
			text
		}
	})

	res.json(info)
})

// @desc    Update info
// @route 	PUT /api/info/:id
// @access  Private
export const updateInfo = asyncHandler(async (req, res) => {
	const { text } = req.body

	try {
		const info = await prisma.info.update({
			where: {
				id: +req.params.id
			},
			data: { text }
		})

		res.json(info)
	} catch (error) {
		res.status(404)
		throw new Error('Info not found!')
	}
})

// @desc    Delete info
// @route 	DELETE /api/info/:id
// @access  Private
export const deleteInfo = asyncHandler(async (req, res) => {
	try {
		const info = await prisma.info.delete({
			where: {
				id: +req.params.id
			}
		})

		res.json({ message: 'Info deleted!' })
	} catch (error) {
		res.status(404)
		throw new Error('Info not found!')
	}
})
