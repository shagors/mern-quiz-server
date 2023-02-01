import { Router } from "express";
const router = Router();

// ** import controllers*/
import * as controller from '../controllers/controller.js';

// ** Questions route API*/
router.route('/questions')
        .get(controller.getQuestions) /** get request */
        .post(controller.insertQuestions) /** post request */
        .delete(controller.dropQuestions) /** Delete request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;