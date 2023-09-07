import * as bcrypt from 'bcrypt';
import CreateAccountDTO from 'domain/dto/account.dto';
import LogInDto from 'domain/dto/login.dto';
import { DataStoredInToken, TokenData } from 'domain/dto/token.dto';
import { IJwt } from 'domain/interfaces/jwt.interface';
import IRepository from 'domain/interfaces/repository.interface';
 
export default class AuthenticationService {
  private accountRepository: IRepository;
  private readonly jwt: IJwt;
 
  constructor(accountRepository: IRepository, jwt: IJwt) {
    this.accountRepository = accountRepository;
    this.jwt = jwt;
  }


  public registration = async (account: CreateAccountDTO): Promise<CreateAccountDTO> => {

    let isAccountExist = await this.accountRepository.findBy({username: account.username});
    console.log(isAccountExist);
    if (isAccountExist.length) 
        throw new Error("This account with that username already exist");

    const hashedPassword = await bcrypt.hash(account.password, 10);
    account.password = hashedPassword;
    const user = await this.accountRepository.save(account);
    user.password = undefined;
    return account;
  }
 
  public loggingIn = async (credential: LogInDto): Promise<Object> => {
    const account = await this.accountRepository.findBy({ username: credential.username });
    if (account.length == 0)
        throw new Error('this account does not exist');
        await bcrypt.compare(credential.password, account.password, function(err, res) {
            if(err) {
                console.log('Comparison error: ', err);
            }
        });

    account.password = undefined;
    const tokenData = this.createToken(account);
    return {
        cookie:  this.createCookie(tokenData),
        user: account.username
    };
  }


  public createToken(account: CreateAccountDTO): TokenData {
    const expiresIn = 60 * 60; // an hour
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
      username: account.username,
      profil: account.profil
    };
    return {
      expiresIn,
      token: this.jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }

  private createCookie(tokenData: TokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  }
}