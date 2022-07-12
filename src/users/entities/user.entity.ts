import { Role } from 'src/permissions/entities/role.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from '../enums/Genre';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    name: 'first_name',
  })
  firstName: string;

  @Column({
    nullable: false,
    name: 'last_name',
  })
  lastName: string;

  @Column({
    nullable: false,
    name: 'email',
  })
  email: string;

  @Column({
    nullable: false,
    name: 'password',
  })
  password: string;

  @Column({
    type: 'datetime',
    nullable: false,
    name: 'birth_date',
  })
  birthDate: Date;

  @Column({
    type: 'int',
    nullable: false,
    name: 'genre',
  })
  genre: Genre;

  @Column({
    nullable: true,
    name: 'avatar',
  })
  avatar: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'user_role',
  })
  roles: Role[];
}
