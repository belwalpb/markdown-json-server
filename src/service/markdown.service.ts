import { MdJsonParserService } from 'md-json-parser';
import { IMarkdownParsingOutput } from 'node_modules/md-json-parser/dist/types/parser.js';

export class MarkdownService {
  private mdJsonParserService: MdJsonParserService;

  constructor() {
    this.mdJsonParserService = new MdJsonParserService();
  }

  public parseMarkdown(markdown: string): IMarkdownParsingOutput {
    return this.mdJsonParserService.parseMarkdown(markdown);
  }
}
