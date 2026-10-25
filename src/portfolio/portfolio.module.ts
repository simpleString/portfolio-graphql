import { Module } from '@nestjs/common';
import { PortfolioResolverLoaders } from './loaders.service.js';
import { PortfolioResolver } from './portfolio.resolver.js';
import { PortfolioService } from './portfolio.service.js';

@Module({
  providers: [PortfolioResolver, PortfolioService, PortfolioResolverLoaders],
})
export class PortfolioModule {}
