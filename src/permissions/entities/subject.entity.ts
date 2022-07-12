import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { RoleActionSubject } from './role-action-subject.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(
    () => RoleActionSubject,
    (roleActionSubject) => roleActionSubject.subject,
  )
  @JoinTable({
    name: 'role_action_subject',
  })
  roleActionSubjects: RoleActionSubject[];
}
