import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/generated/prisma/client.js';
import {
  ExperienceUncheckedCreateInput,
  ProjectUncheckedCreateInput,
  SkillUncheckedCreateInput,
  UserCreateInput,
} from 'src/generated/prisma/models.js';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const USER_ID = '00000000-0000-4000-8000-000000000001';

const user: UserCreateInput = {
  id: USER_ID,
  name: 'Dmitry Volkov',
  links: [
    'https://github.com/simplestring',
    'https://hh.ru/resume/d7a6a92dff0ba9eb320039ed1f505975706878',
  ],
  description: 'Fullstack node/react dev',
};

const skills: SkillUncheckedCreateInput[] = [
  {
    id: '00000000-0000-4000-8000-000000000001',
    name: 'nodejs',
    userId: USER_ID,
  },
  {
    id: '00000000-0000-4000-8000-000000000002',
    name: 'react',
    userId: USER_ID,
  },
  {
    id: '00000000-0000-4000-8000-000000000003',
    name: 'nestjs',
    userId: USER_ID,
  },
  {
    id: '00000000-0000-4000-8000-000000000004',
    name: 'docker',
    userId: USER_ID,
  },
  {
    id: '00000000-0000-4000-8000-000000000005',
    name: 'postgresql',
    userId: USER_ID,
  },
];

const experiences: ExperienceUncheckedCreateInput[] = [
  {
    id: '00000000-0000-4000-8000-000000000001',
    company: 'Sibdev',
    position: 'Frontend dev',
    achievements:
      'maintenance inner ui toolkit, supporting with outsource sites',
    startTime: new Date('2022-04-02'),
    endTime: new Date('2022-10-03'),
    userId: USER_ID,
  },
  {
    id: '00000000-0000-4000-8000-000000000002',
    company: 'Torgbox',
    position: 'Fullstack dev',
    achievements:
      'move to typescript, creating microservices, refactoring legacy modules',
    startTime: new Date('2023-03-02'),
    endTime: new Date('2024-10-01'),
    userId: USER_ID,
  },
  {
    id: '00000000-0000-4000-8000-000000000003',
    company: 'Synapex',
    position: 'Fullstack dev',
    achievements:
      'linking telegram to yandex matriks for analytics, creating and maintained ord scripts for telegram, add max messager support, add google sheet analytics export',
    startTime: new Date('2025-01-17'),
    endTime: new Date('2026-05-14'),
    userId: USER_ID,
  },
];

const projects: ProjectUncheckedCreateInput[] = [
  {
    id: '00000000-0000-4000-8000-000000000001',
    name: 'Torgbox',
    link: 'https://torgbox.ru',
    userId: USER_ID,
  },
  {
    id: '00000000-0000-4000-8000-000000000002',
    name: 'Synapex.ai',
    link: 'https://synapex.cloud',
    userId: USER_ID,
  },
];

async function main() {
  await prisma.user.createMany({ data: user, skipDuplicates: true });
  await prisma.skill.createMany({ data: skills, skipDuplicates: true });
  await prisma.experience.createMany({
    data: experiences,
    skipDuplicates: true,
  });
  await prisma.project.createMany({ data: projects, skipDuplicates: true });
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    prisma.$disconnect();
  });
