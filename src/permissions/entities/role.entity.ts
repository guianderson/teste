import { RoleActionSubject } from './role-action-subject.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(() => User, (user) => user.roles)
  users: User[];

  @OneToMany(
    () => RoleActionSubject,
    (roleActionSubject) => roleActionSubject.role,
  )
  @JoinTable({
    name: 'role_action_subject',
  })
  roleActionSubjects: RoleActionSubject[];
}
