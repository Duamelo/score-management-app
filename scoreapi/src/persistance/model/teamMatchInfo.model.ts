import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Team from './team.model';
import Match from './match.model';
 
@Entity()
class TeamMatchInfo {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column({ type: 'date' })
  public date: String;

  @Column()
  public score: number;

  @OneToOne(()=> Match)
  @JoinColumn()
  public match: Match;

  @OneToOne(() => Team)
  @JoinColumn()
  public team: Team;
}
 
export default TeamMatchInfo;