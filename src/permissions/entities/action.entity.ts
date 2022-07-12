import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { RoleActionSubject } from './role-action-subject.entity';

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(
    () => RoleActionSubject,
    (roleActionSubject) => roleActionSubject.action,
  )
  @JoinTable({
    name: 'role_action_subject',
  })
  roleActionSubjects: RoleActionSubject[];
}
