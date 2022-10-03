"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundHandler = void 0;
function ErrorHandler(options) {
    return function (err, req, res, next) {
        console.log('Error handler');
        console.error(err);
        res.status(500).send('Something broke!');
    };
}
exports.default = ErrorHandler;
// 404 handler
// Language: typescript
function NotFoundHandler(req, res, next) {
    res.status(404).send('Route not found');
}
exports.NotFoundHandler = NotFoundHandler;
