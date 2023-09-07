import { DataStoredInToken } from "domain/dto/token.dto";

export interface IJwt{
    verify(authorization: String, secret: string);
    sign(data: DataStoredInToken, secret: string, expirationTime: Object);
}