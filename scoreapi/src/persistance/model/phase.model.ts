import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Tournament from './tournament.model';
 
@Entity()
class Phase {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public name: string;
 
  @Column()
  public description: string;

  @ManyToOne(() => Tournament, (tournament: Tournament) => tournament.phases)
  public tournament: Tournament;
}
 
export default Phase;