
import 'reflect-metadata';
import 'dotenv/config';
import {DatabaseConfig} from './persistance/ormconfig';
import validateEnv from './utils/validateEnv';
import * as jwt from 'jsonwebtoken';
import AuthenticationController from './adapter/controllers/authentication.controller';
import AuthenticationService from './domain/services/authentication.service';
import { accountRepository } from './persistance/repository';
import App from './app';
 
validateEnv();
 
(async () => {
  try {
    await DatabaseConfig.initialize();

  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }

  // Services instanciation
  const authenticationService = new AuthenticationService(accountRepository, jwt);

  const app = new App(
    [
        new AuthenticationController(authenticationService)
    ],
    process.env.PORT
  );
  app.listen();
})();