interface CreateAccountDTO {
    username: string;
    password: string;
    email: string;
    profil: string;
}   
export default CreateAccountDTO;

export interface AccountDTO{
    username: string;
    profil: string;
}