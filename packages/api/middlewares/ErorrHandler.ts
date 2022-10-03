import type { LoggerOptions } from './ErorrHandlerTypes';

export default function ErrorHandler (options: LoggerOptions) {
    return function (err: string, req: any, res: any, next: any) {
        console.log('Error handler');
        console.error(err);
        res.status(500).send('Something broke!');
    }
}

// 404 handler
// Language: typescript

export function NotFoundHandler (req: any, res: any, next: any) {
    res.status(404).send('Route not found');
}