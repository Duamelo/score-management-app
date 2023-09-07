import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Tournament from './tournament.model';
import Match from './match.model';
 
@Entity()
class Phase {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column({ unique: true })
  public name: string;
 
  @Column()
  public description: string;

  @OneToMany(() => Match, (match: Match) => match.phase)
  public matches: Match[];

  @ManyToOne(() => Tournament, (tournament: Tournament) => tournament.phases)
  public tournament: Tournament;
}
 
export default Phase;