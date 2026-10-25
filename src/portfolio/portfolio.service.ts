import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service.js';

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserInfo() {
    return this.prisma.user.findMany();
  }
}
