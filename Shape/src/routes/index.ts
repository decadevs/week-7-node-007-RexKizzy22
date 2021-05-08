import express, {Request, Response} from 'express';
import {readFile} from "../utils/utils";

const router = express.Router();

/* Fetch all records. */
router.get('/', async (req: Request, res: Response) => {
  const files = await readFile();
  res.status(200).json({data: files});
});

export default router;
