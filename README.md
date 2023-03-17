# Safar : An Application for booking flight Tickets & services related to AirTravel

# Safar-Reminder-Service : 

-> This Project is solely for making a reminder service which sents notification/reminder after booking!

[DESIGN DOC](https://docs.google.com/document/d/18Az_VeNbd9sjkZpcMkdjBM1kimqoFTH1mbOeB14Z0Ow/edit?usp=sharing)


## Project Setup:
 - clone the project on your local ( git clone ... )
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following environment variable.
    - `PORT=5000`
    - `EMAIL_ID=<your gamil>`
    - `EMAIL_PASS=<app passwd>`
    - `EXCHANGE_NAME=<any string>`
    - `REMINDER_BINDING_KEY=<any string>`
    - `MESSAGE_BROKER_URL='amqp://localhost'`
    ( for getting the app password go to your gamil => open manage your google account => go to security =>scroll below turn on 2 step verification => go to App passwords => select app as mail & device as other and generate the passwd and copy paste it in you env )
    
 - Inside the `src/config` folder , create a new file `config.json` and then add the following piece of json or run command "npx sequelize init" inside src 

 ```
 "development": {
    "username": <Your_DB_LOGIN_NAME>,
    "password": <Your_DB_PASSWORD>,
    "database": "Reminder_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

 ```

 - Once you've added your DB config as listed above,go to the src folder from your terminal and excute the command `npx sequelize db:create`
 and then execute 

 after than run "npx sequelize db:migrate"


