import { Resolver, Query } from '@nestjs/graphql';
import { PortfolioService } from './portfolio.service.js';
import { Injectable } from '@nestjs/common';

@Resolver()
@Injectable()
export class PortfolioResolver {
  constructor(private portfolioService: PortfolioService) {}

  @Query(() => String)
  hello(): string {
    return this.portfolioService.getHello();
  }
}
