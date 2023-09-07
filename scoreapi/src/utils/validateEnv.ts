import {
    cleanEnv, port, str,
  } from 'envalid';
  
  function validateEnv() {
    cleanEnv(process.env, {
      JWT_SECRET: str(),
      POSTGRES_USER: str(),
      POSTGRES_PASSWORD: str(),
      POSTGRES_DB: str(),
      POSTGRES_HOST: str(),
      POSTGRES_PORT: port(),
      PORT: port(),
    });
  }
  
  export default validateEnv;