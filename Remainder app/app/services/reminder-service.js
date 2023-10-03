import Reminder from './../models/reminder.js';
// importing the file remindr.js



// method to save new reminder
export const save =async(newReminder) => {
 const reminder = new Reminder(newReminder);
 return reminder.save();



}

// method to update the reminder
export const update = async (id, updatedReminder)=>{
    const reminder = Reminder
                     .findByIdAndUpdate(id, updatedReminder)
                     
                     .exec();

                return updatedReminder;     

}
// method to get the data 
export const get = async (id)=>{
    
    const reminder = Reminder
                     .findById(id)
                      .exec();
                return reminder;     

}
// method to delete the data
export const remove = async (id)=> {
    const reminder = Reminder
                     .findByIdAndDelete(id)
                     .exec();
                
                return reminder;     

}
// method to search by parameters
   export const search = async (params) => {
    const reminders = Reminder.find(params)
                              .exec();
    return reminders;
}

