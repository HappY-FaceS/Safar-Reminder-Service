const express = require('express');
const bodyParser = require('body-parser');

const { PORT,EMAIL_ID } = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        
        // sendBasicEmail(
        //     'EMAIL_ID',
        //     'rishavkumarcgc12@gmail.com',
        //     'Project : Safar',
        //     'Hey, how are you, I hope you like the support'
        // );

        // cron.schedule('*/1 * * * *', () => {
         //   console.log('running a task every one minutes');
        //  }); 
          
        
    });
}

setupAndStartServer();