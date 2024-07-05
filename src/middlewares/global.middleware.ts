import { BaseMiddleware, MiddlewareContract } from "@ant/framework";
import express from "express";
import cors from "cors";
import compression from "compression";
import { body, query, cookie, param  } from "express-validator";
import helmet from "helmet";

const jsonM = class extends BaseMiddleware {
    handle = express.json()
}
const xmlM = class extends BaseMiddleware {
    handle = express.text({ type: "application/xml" })
}
const corsM = class extends BaseMiddleware {
    handle = cors();
}
const compressM = class extends BaseMiddleware {
    handle = compression();
}
const formM = class extends BaseMiddleware {
    handle = express.urlencoded({ extended: false });
}
const sanitizeBody = class extends BaseMiddleware {
    // handle =  body('*').trim().escape();
}
const sanitizeQuery = class extends BaseMiddleware {
    // handle =  query('*').trim().escape();
}
const sanitizeCookie = class extends BaseMiddleware {
    handle =  cookie('*').trim().escape();
}
const sanitizeParam = class extends BaseMiddleware {
    handle =  param('*').trim().escape();
}
const helmetM = class extends BaseMiddleware {
    handle = helmet();
}

export const GlobalMiddlewares: (new () => MiddlewareContract)[] = [
    jsonM,
    xmlM,
    formM,
    corsM,
    helmetM,
    compressM,
    // sanitizeBody,
    // sanitizeQuery,
    // sanitizeCookie,
    // sanitizeParam,
];
