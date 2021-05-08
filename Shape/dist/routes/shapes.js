"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var promises_1 = __importDefault(require("fs/promises"));
var utils_1 = require("../utils/utils");
var router = express_1.default.Router();
/* Calculate area of shapes. */
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, shape, dimension, id, area, a, b, c, areas, data, _b, semiPerim, areaStr;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, shape = _a.shape, dimension = _a.dimension;
                if (!shape || Object.keys(dimension).length === 0)
                    return [2 /*return*/, res.status(400).end()];
                shape = shape.toLowerCase();
                id = 0;
                area = 0;
                a = dimension.a, b = dimension.b, c = dimension.c;
                return [4 /*yield*/, utils_1.readFile()];
            case 1:
                areas = _c.sent();
                data = {
                    id: 0,
                    shape: "",
                    area: 0,
                    dimension: { a: 0, b: 0, c: 0 },
                    createdAt: new Date()
                };
                _b = shape;
                switch (_b) {
                    case "square": return [3 /*break*/, 2];
                    case "triangle": return [3 /*break*/, 4];
                    case "rectangle": return [3 /*break*/, 6];
                    case "circle": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                if (!a)
                    return [2 /*return*/, res.status(400).send("Invalid request")];
                id = areas.length;
                id = utils_1.generateId(id);
                area = Math.pow(a, 2);
                data.id = id;
                data.shape = shape;
                data.area = area;
                data.dimension = { a: a };
                data.createdAt = new Date();
                areas.push(data);
                return [4 /*yield*/, promises_1.default.writeFile("./database.json", JSON.stringify(areas, null, 2))];
            case 3:
                _c.sent();
                return [2 /*return*/, res.status(201).json({ data: data })];
            case 4:
                if (!a || !b || !c)
                    return [2 /*return*/, res.status(400).send("Invalid request")];
                id = areas.length;
                id = utils_1.generateId(id);
                semiPerim = (a + b + c) / 2;
                areaStr = Math.sqrt(semiPerim * (semiPerim - a) * (semiPerim - b) * (semiPerim - c)).toFixed(2);
                area = parseFloat(areaStr);
                data.id = id;
                data.shape = shape;
                data.area = area;
                data.dimension = { a: a, b: b, c: c };
                data.createdAt = new Date();
                areas.push(data);
                return [4 /*yield*/, promises_1.default.writeFile("./database.json", JSON.stringify(areas, null, 2))];
            case 5:
                _c.sent();
                return [2 /*return*/, res.status(201).json({ data: data })];
            case 6:
                if (!a || !b)
                    return [2 /*return*/, res.status(400).send("Invalid request")];
                id = areas.length;
                id = utils_1.generateId(id);
                area = a * b;
                data.id = id;
                data.shape = shape;
                data.area = area;
                data.dimension = { a: a, b: b };
                data.createdAt = new Date();
                areas.push(data);
                return [4 /*yield*/, promises_1.default.writeFile("./database.json", JSON.stringify(areas, null, 2))];
            case 7:
                _c.sent();
                return [2 /*return*/, res.status(201).json({ data: data })];
            case 8:
                if (!a)
                    return [2 /*return*/, res.status(400).send("Invalid request")];
                id = areas.length;
                id = utils_1.generateId(id);
                area = Math.PI * (Math.pow(a, 2));
                data.id = id;
                data.shape = shape;
                data.area = parseFloat(area.toFixed(2));
                data.dimension = { a: a };
                data.createdAt = new Date();
                areas.push(data);
                return [4 /*yield*/, promises_1.default.writeFile("./database.json", JSON.stringify(areas, null, 2))];
            case 9:
                _c.sent();
                return [2 /*return*/, res.status(201).json({ data: data })];
            case 10: return [3 /*break*/, 11];
            case 11:
                res.status(400).end();
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
