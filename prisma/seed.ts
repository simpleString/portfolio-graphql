import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/generated/prisma/client.js';
import {
  ExperienceCreateInput,
  ProjectCreateInput,
  SkillCreateInput,
  UserCreateInput,
} from 'src/generated/prisma/models.js';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const user: UserCreateInput = {
  name: 'Dmitry',
  description: 'Разработчик',
};

const skills: SkillCreateInput[] = [
  {
    name: '',
  },
];

const experiences: ExperienceCreateInput[] = [
  {
    company: 'Torgbox',
    position: 'Fullstack dev',
  },
];

const projects: ProjectCreateInput[] = [
  {
    name: 'Torgbox',
  },
];

async function main() {
  await prisma.user.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();

  await prisma.user.create({
    data: {
      experiences: {
        createMany: {
          data: experiences,
        },
      },
      projects: {
        createMany: {
          data: projects,
        },
      },
      skills: {
        createMany: {
          data: skills,
        },
      },
      ...user,
    },
  });
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    prisma.$disconnect();
  });
