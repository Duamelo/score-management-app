
import 'reflect-metadata';
import 'dotenv/config';
import App from './app';
import {DatabaseConfig} from './persistance/ormconfig';
import TeamController from './adapter/controllers/team';
import validateEnv from './utils/validateEnv';
 
validateEnv();
 
(async () => {
  try {
    await DatabaseConfig.initialize();

  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new TeamController(),
    ],
    process.env.PORT
  );
  app.listen();
})();