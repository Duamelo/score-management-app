import { Column, Entity, ManyToMany, OneToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import Team from './team.model';
import Group from './group.model';
import Phase from './phase.model';
 
@Entity()
class Tournament {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column({ unique: true })
  public name: string;
 
  @Column()
  public description: string;

  @Column({ type: 'date' })
  public start_date: String;

  @Column({ type: 'date' })
  public end_date: String;
  

  @ManyToMany(() => Team)
  @JoinTable()
  participants: Team[];


  @OneToMany(() => Group, (group: Group) => group.tournament)
  public groups: Group[];

  @OneToMany(() => Phase, (phase: Phase) => phase.tournament)
  public phases: Phase[];
}
export default Tournament;