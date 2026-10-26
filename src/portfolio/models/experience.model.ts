import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field()
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field()
  achievements: string;
}
