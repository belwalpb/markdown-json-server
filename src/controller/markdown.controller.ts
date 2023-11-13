import { NextFunction, Request, Response } from 'express';
import { MarkdownService } from '../service/markdown.service.js';

export class MarkdownController {
  private readonly _markdownService: MarkdownService;

  constructor() {
    this._markdownService = new MarkdownService();
  }

  public parseMarkdown(request: Request, response: Response, next: NextFunction): Response {
    const markdown = request.body?.toString() || '';
    const parsedData = this._markdownService.parseMarkdown(markdown);
    return response.send(parsedData);
  }
}
