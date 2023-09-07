import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { AccountDTO } from 'domain/dto/account.dto';
import { accountRepository } from 'persistance/repository';
import { DataStoredInToken } from 'domain/dto/token.dto';
 
export interface RequestWithUser extends Request {
  user: AccountDTO;
}
 
async function authenticationMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
  const cookies = request.cookies;
  if (!cookies || !cookies.Authorization)
    throw new Error("Cookie is missing");

    const secret = process.env.JWT_SECRET;
    try {
        const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
        const username = verificationResponse.username;
        const account = await accountRepository.findBy({username: username});
        if (!account) 
        throw new Error("The account does not exist");
        request.user = account;
        next();
    } 
    catch (error) {
        console.log(error);
    }
}
 
export default authenticationMiddleware;