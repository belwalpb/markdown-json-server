import express, { Express, NextFunction, Request, Response } from 'express';
import { parseMarkdownAsJson } from 'md-json-parser';

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(jsonLogger); // Custom JSON logging middleware
app.use(express.raw({ type: '*/*' }));

app.get('/health', (req: Request, res: Response) => {
  res.send({status: true, message: 'Service is Running'});
});

app.post('/markdown-to-json', async (req: Request, res: Response) => {
  let markdownData = await parseMarkdownAsJson(req.body?.toString());
  res.send(markdownData);
});


app.listen(PORT, () => logJson(`Running on ${PORT} ⚡`));


// Custom JSON logging middleware
function jsonLogger(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();

  // Logging request information
  const logData = {
    method: req.method,
    path: req.path,
    query: req.query,
    userAgent: req.get('User-Agent'),
    timestamp: new Date().toISOString(),
    statusCode: 0,
    responseTime: 0
  };

  // Logging response information
  res.on('finish', () => {
      logData.statusCode = res.statusCode;
      logData.responseTime = Date.now() - startTime;
      logJson(JSON.stringify(logData));
  });

  next();
}

function logJson(value: any) {
  if(typeof value === 'string') {
      console.log(JSON.stringify({message: value}));
  }
  else {
      console.log(JSON.stringify(value));
  }
}