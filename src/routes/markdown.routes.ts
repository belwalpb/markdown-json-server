import express, { Request, Response, Router, NextFunction } from 'express';
import { MarkdownController } from '../controller/markdown.controller.js';

const router: Router = express.Router();

const markdownController = new MarkdownController();

router.post('/json', async (request: Request, response: Response, next: NextFunction) => {
  return markdownController.parseMarkdown(request, response, next);
});

export const markdownRouter: Router = router;
