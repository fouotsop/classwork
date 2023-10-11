import { NextFunction, Request, Response, Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { title: 'Hello world' });
});

export default router;
