import * as child from 'child_process';
import * as express from 'express';


import { createCodeFile, runCode } from '../utils/runcode.package';

const router = express.Router();

router.post('/', async (req, res) => {
    // Get the code and programming language from the request body
    const code = req.body.code;
    const programmingLang = req.body.programmingLang;

    // Create a file with the code
    await createCodeFile(code, programmingLang);

    // Run the code


    // Send the output back to the client
    res.json(await runCode(programmingLang, true));
});

export default router;