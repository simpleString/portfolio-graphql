import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { PrismaService } from '../prisma/prisma.service.js';
import { Experience } from './models/experience.model.js';
import { Project } from './models/project.model.js';
import { Skill } from './models/skill.model.js';

@Injectable({ scope: Scope.REQUEST })
export class PortfolioResolverLoaders {
  skillsByUser: DataLoader<string, Skill[]>;
  experiencesByUser: DataLoader<string, Experience[]>;
  projectsByUser: DataLoader<string, Project[]>;

  constructor(private readonly prisma: PrismaService) {
    this.skillsByUser = new DataLoader((ids) => this.batchSkills(ids));
    this.experiencesByUser = new DataLoader((ids) =>
      this.batchExperiences(ids),
    );
    this.projectsByUser = new DataLoader((ids) => this.batchProjects(ids));
  }

  private async batchSkills(userIds: readonly string[]) {
    const skills = await this.prisma.skill.findMany({
      where: { userId: { in: [...userIds] } },
    });
    return userIds.map((id) => skills.filter((s) => s.userId === id));
  }

  private async batchExperiences(userIds: readonly string[]) {
    const experiences = await this.prisma.experience.findMany({
      where: { userId: { in: [...userIds] } },
    });
    return userIds.map((id) => experiences.filter((e) => e.userId === id));
  }

  private async batchProjects(userIds: readonly string[]) {
    const projects = await this.prisma.project.findMany({
      where: { userId: { in: [...userIds] } },
    });
    return userIds.map((id) => projects.filter((p) => p.userId === id));
  }
}
