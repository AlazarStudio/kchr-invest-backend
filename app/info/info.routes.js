import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	createNewInfo,
	deleteInfo,
	getInfo,
	getInfos,
	updateInfo
} from './info.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewInfo).get(getInfos)

router
	.route('/:id')
	.get(getInfo)
	.put(protect, updateInfo)
	.delete(protect, deleteInfo)

export default router
