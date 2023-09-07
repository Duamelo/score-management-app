import { Column, Entity, OneToOne, JoinColumn,PrimaryGeneratedColumn } from 'typeorm';
import Team from './team.model';
 
@Entity()
class Match {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public date: Date;
 
  @Column()
  public venue: string;

  @Column()
  public code: string;

  @OneToOne(() => Team)
  @JoinColumn()
  public team1: Team;

  @OneToOne(() => Team)
  @JoinColumn()
  public team2: Team;
}
 
export default Match;