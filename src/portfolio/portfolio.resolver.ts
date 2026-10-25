import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PortfolioResolverLoaders } from './loaders.service.js';
import { Experience } from './models/experience.model.js';
import { Project } from './models/project.model.js';
import { Skill } from './models/skill.model.js';
import { User } from './models/user.model.js';
import { PortfolioService } from './portfolio.service.js';

@Resolver(() => User)
export class PortfolioResolver {
  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly loader: PortfolioResolverLoaders,
  ) {}

  @Query(() => User, { nullable: true })
  async getUserById(@Args('id') id: string) {
    return this.portfolioService.getUserById(id);
  }

  @Query(() => [User], { nullable: true, name: 'profile' })
  async getUser() {
    return this.portfolioService.getUsers();
  }

  @ResolveField('skills', () => [Skill])
  async getSkills(@Parent() user: User) {
    return this.loader.skillsByUser.load(user.id);
  }

  @ResolveField('projects', () => [Project])
  async getProjects(@Parent() user: User) {
    return this.loader.projectsByUser.load(user.id);
  }

  @ResolveField('experiences', () => [Experience])
  async getExperiences(@Parent() user: User) {
    return this.loader.experiencesByUser.load(user.id);
  }
}
