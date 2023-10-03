import express from 'express';
import  * as reminderController from './../controllers/reminder-controller.js';
// importing express
// imporing reminderController.js file
const router = express.Router();
// For functions which doesn't take parameters
router.route('/')
       .post(reminderController.post)
       .get(reminderController.index);
       //.delete(reminderController.removerem)
      // .put(reminderController.updaterem);

// for functions which need parameters

       router.route('/:id')
              .get(reminderController.find)
              .put(reminderController.updaterem)
              .delete(reminderController.removerem);
              //.delete(reminderController.find);

             
export default router;       
    