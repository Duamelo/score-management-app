import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class Account {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column({ unique: true })
    public username: string;

    @Column()
    public password: string;

    @Column()
    public profil: string;

    @Column({ unique: true })
    public email: string;
}
 
export default Account;
