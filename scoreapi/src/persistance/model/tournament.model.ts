import { Column, Entity, ManyToMany, OneToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import Team from './team.model';
import Group from './group.model';
import Phase from './phase.model';
 
@Entity()
class Tournament {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public name: string;
 
  @Column()
  public description: string;

  @Column()
  public start_date: Date;

  @Column()
  public end_date: Date;
  

  @ManyToMany(() => Team)
  @JoinTable()
  participants: Team[];


  @OneToMany(() => Group, (group: Group) => group.tournament)
  public groups: Group[];

  @OneToMany(() => Phase, (phase: Phase) => phase.tournament)
  public phases: Phase[];
}
 
export default Tournament;