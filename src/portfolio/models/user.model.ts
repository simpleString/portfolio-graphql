import { Field, ObjectType } from '@nestjs/graphql';
import { Experience } from './experience.model.js';
import { Project } from './project.model.js';
import { Skill } from './skill.model.js';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [String])
  links: string[];

  @Field()
  description: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experiences: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
