import { Column, Entity, OneToOne, ManyToOne, JoinColumn,PrimaryGeneratedColumn } from 'typeorm';
import Team from './team.model';
import Phase from './phase.model';
import Tournament from './tournament.model';
 
@Entity()
class Match {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column({ type: 'date' })
  public date: string;
 
  @Column()
  public venue: string;

  @Column({ unique: true })
  public code: string;

  @Column()
  public duration: number;

  @Column({ nullable: true })
  public winner?: string;

  @ManyToOne(() => Phase, (phase: Phase) => phase.matches)
  public phase: Phase;

  @OneToOne(() => Team)
  @JoinColumn()
  public team1: Team;

  @OneToOne(() => Team)
  @JoinColumn()
  public tournament: Tournament;

  @OneToOne(() => Team)
  @JoinColumn()
  public team2: Team;
}
 
export default Match;