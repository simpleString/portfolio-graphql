import { Module } from '@nestjs/common';
import { PortfolioResolver } from './portfolio.resolver.js';
import { PortfolioService } from './portfolio.service.js';

@Module({
  providers: [PortfolioResolver, PortfolioService],
})
export class PortfolioModule {}
