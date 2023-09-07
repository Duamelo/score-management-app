import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Tournament from './tournament.model';
import Team from './team.model';
 
@Entity()
class Group {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column({ unique: true })
  public name: string;

  @ManyToOne(() => Tournament, (tournament: Tournament) => tournament.groups)
  public tournament: Tournament;

  @OneToMany(() => Team, (team: Team) => team.group)
  public teams: Team[];
}
 
export default Group;