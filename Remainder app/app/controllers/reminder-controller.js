//import * as reminderService from './../services/reminder-service.js';


import { response } from 'express';
import { save,
         get,
         remove,
         update,
         search
} from './../services/reminder-service.js';

// method to create data
export const post = async (request,response) => {
  // using try catch method to handle errors
    try{
    const newReminder =  request.body;
    const savedReminder = await save(newReminder);
     setSuccessfuResponse(savedReminder,response);
    }catch(err){
        setErrorResponse(err,response);
    }
}
// method to get data using id
 export const index = async(request,response) => {
   // using try catch method to handle errors
  try{
    const params = {};
    const reminders = await search(params);
    setSuccessfuResponse(reminders,response);
  }catch(err)
  {
    setErrorResponse(err,response);
  }
 }
//  method to update the data
 export const updaterem = async (request,response) => {
    try{
        // using try catch method to handle errors
        //const savedReminder = await save(newReminder);
        
         const id = request.params.id;
         const reminderToUpdate = await get(id);
         const newReminder = request.body;
        
        const updatedReminder = await update(reminderToUpdate, newReminder);
       // const savedReminder = await save(updatedReminder);
     setSuccessfuResponse(updatedReminder,response);
    }catch(err){
        setErrorResponse(err,response);
    }
}
// method to delete the data
 export const removerem = async(request,response) => {
   // using try catch method to handle errors
    try{
      const params = request.params.id;
      const reminder = await remove(params);

      setSuccessfuResponse(reminder,response);
    }catch(err)
    {
      setErrorResponse(err,response);
    }
   }

//  method to find data when parameter is passed
 export const find = async(request,response) => {
    try{
      const params = request.params.id;
      const reminders = await get(params);
      setSuccessfuResponse(reminders,response);
    }catch(err)
    {
      setErrorResponse(err,response);
    }
   }
// method to return success message
const setSuccessfuResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}
// method to return failure method
const setErrorResponse = (err, response) =>
{
    response.status(500);
    response.json({
        error:{
            message: err
        }
    })
}