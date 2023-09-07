import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Player from './player.model';
import Group from './group.model';
 
@Entity()
class Team {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public name: string;
 
  @Column()
  public country: string;

  @OneToMany(() => Player, (player: Player) => player.team)
  public players: Player[];

  @ManyToOne(() => Group, (group: Group) => group.teams)
  public group: Group;
}
 
export default Team;