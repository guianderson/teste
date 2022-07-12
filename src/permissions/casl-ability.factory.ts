import { Subject } from './entities/subject.entity';
import { Action } from './entities/action.entity';
import { Role } from './entities/role.entity';
import { Ability, AbilityBuilder, AbilityClass } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { RoleActionSubject } from './entities/role-action-subject.entity';

export type AppAbility = Ability<[string, string]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[string, string]>
    >(Ability as AbilityClass<AppAbility>);

    const roles = user.roles;
    roles.forEach((role: Role) => {
      const roleActionSubjects = role.roleActionSubjects;
      roleActionSubjects.forEach((roleActionSubject) => {
        const subject = roleActionSubject.subject;
        const action = roleActionSubject.action;
        can(action['description'], subject['description']);
      });
    });
    return build();
  }
}
