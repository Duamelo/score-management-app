import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import Tournament from './tournament.model';
import Team from './team.model';
 
@Entity()
class TeamStatTournament {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column({ default: 0 })
  public points: number;

  @OneToOne(()=> Team)
  @JoinColumn()
  public team: Team;

  @OneToOne(()=> Tournament)
  @JoinColumn()
  public tournament: Tournament;
}
export default TeamStatTournament;