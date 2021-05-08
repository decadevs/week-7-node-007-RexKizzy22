import express, {Request, Response} from 'express';
import fs from 'fs/promises';

import {Area, Dims} from "../dataModels/dataModel";
import {readFile, generateId} from "../utils/utils";

const router = express.Router();


/* Calculate area of shapes. */
router.post('/', async (req: Request, res: Response) => {
  let {shape, dimension} = req.body;

  if (!shape || Object.keys(dimension).length === 0) return res.status(400).end();

  shape = shape.toLowerCase();
  var id = 0;
  let area = 0;
  const {a, b, c}: Dims = dimension;
  const areas = await readFile();
  const data: Area = {
    id : 0, 
    shape: "",
    area: 0,
    dimension: {a: 0, b: 0, c: 0},
    createdAt: new Date()
  };

  switch (shape) {
    case "square":

      if (!a) return res.status(400).send("Invalid request");

      id = areas.length;
      id = generateId(id);

      area = a ** 2;

      data.id = id;
      data.shape = shape;
      data.area = area;
      data.dimension = {a};
      data.createdAt = new Date();
      areas.push(data);

      await fs.writeFile("./database.json", JSON.stringify(areas, null, 2));
      return res.status(201).json({data});

    case "triangle":
      
      if (!a || !b || !c) return res.status(400).send("Invalid request");

      id = areas.length;
      id = generateId(id);

      const semiPerim = (a + b + c) / 2;
      const areaStr = Math.sqrt(semiPerim * (semiPerim - a) * (semiPerim - b) * (semiPerim - c)).toFixed(2);
      area = parseFloat(areaStr);

      data.id = id;
      data.shape = shape;
      data.area = area;
      data.dimension = {a,b,c};
      data.createdAt = new Date();
      areas.push(data);

      await fs.writeFile("./database.json", JSON.stringify(areas, null, 2));
      return res.status(201).json({data});
  
    case "rectangle":
      
      if (!a || !b) return res.status(400).send("Invalid request");

      id = areas.length;
      id = generateId(id);

      area = a * b;

      data.id = id;
      data.shape = shape;
      data.area = area;
      data.dimension = {a,b};
      data.createdAt = new Date();
      areas.push(data);

      await fs.writeFile("./database.json", JSON.stringify(areas, null, 2));
      return res.status(201).json({data});

    case "circle":
      
      if (!a) return res.status(400).send("Invalid request");

      id = areas.length;
      id = generateId(id);

      area = Math.PI * (a ** 2);

      data.id = id;
      data.shape = shape;
      data.area = parseFloat(area.toFixed(2));
      data.dimension = {a};
      data.createdAt = new Date();
      areas.push(data);

      await fs.writeFile("./database.json", JSON.stringify(areas, null, 2));
      return res.status(201).json({data});


    default:
      break;
  }

  res.status(400).end();
});

export default router;
