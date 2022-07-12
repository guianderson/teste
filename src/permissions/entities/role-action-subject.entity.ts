import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
import { Action } from './action.entity';
import { Role } from './role.entity';
import { Subject } from './subject.entity';

@Entity()
export class RoleActionSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, {
    nullable: false,
  })
  @JoinTable({
    name: 'role',
  })
  role: Role[];

  @ManyToOne(() => Subject, {
    nullable: false,
  })
  @JoinTable({
    name: 'subject',
  })
  subject: Subject[];

  @ManyToOne(() => Action, {
    nullable: false,
  })
  @JoinTable({
    name: 'action',
  })
  action: Action[];
}
