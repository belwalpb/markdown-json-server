import express, { Router } from 'express';
import { markdownRouter } from './markdown.routes.js';

const router: Router = express.Router();
router.use('/markdown', markdownRouter);

export const applicationRouter: Router = router;
