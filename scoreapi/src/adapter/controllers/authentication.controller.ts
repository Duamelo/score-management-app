import * as express from 'express';
import CreateAccountDTO from 'domain/dto/account.dto';
import LogInDto from 'domain/dto/login.dto';
 
export default class AuthenticationController{
  public path = '/authentication';
  public router = express.Router();
  private readonly authenticationService;
 
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/register`, this.registration);
    this.router.post(`${this.path}/login`, this.loggingIn);
    this.router.post(`${this.path}/logout`, this.loggingOut);
  }
 
  private registration = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const accountData: CreateAccountDTO = request.body;
    return response.send(this.authenticationService.registration(accountData));      
  }
 
  private loggingIn = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const account: LogInDto = request.body;
    const {cookie, user} = await this.authenticationService.loggingIn(account);
    response.setHeader('Set-Cookie', [cookie]);
    response.send({cookie, user});
  }

  private loggingOut = (request: express.Request, response: express.Response) => {
    response.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
    response.sendStatus(200);
  }
}