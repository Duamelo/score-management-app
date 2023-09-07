import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Team from './team.model';
import Match from './match.model';
 
@Entity()
class TeamMatchInfo {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public date: Date;

  @Column()
  public score: number;
 
  @Column()
  public duration: number;

  @Column()
  public type: string; // back and forth

  @OneToOne(()=> Match)
  @JoinColumn()
  public match: Match;

  @OneToOne(() => Team)
  @JoinColumn()
  public team: Team;
}
 
export default TeamMatchInfo;