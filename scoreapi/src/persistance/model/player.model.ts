import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Team from './team.model';
 
@Entity()
class Player {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column({ unique: true })
  public username: string;
 
  @Column()
  public role: string;

  @ManyToOne(() => Team, (team: Team) => team.players)
  public team: Team;
}
 
export default Player;