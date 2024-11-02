import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	getDocuments,
	getDocument,
	createDocument,
	updateDocument,
	deleteDocument
} from './investDocs.controller.js'

const router = express.Router()

router.route('/').post(protect, createDocument).get(getDocuments)

router
	.route('/:id')
	.get(getDocument)
	.put(protect, updateDocument)
	.delete(protect, deleteDocument)

export default router
