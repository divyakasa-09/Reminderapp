import reminderRouter from './reminder-route.js';
// importing reminder-route.js file

const route = (app) => {
    app.use('/reminders',reminderRouter);

}
// exporting route object
export default route;