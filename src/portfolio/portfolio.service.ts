import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service.js';

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) {}

  async getFirstUser() {
    return this.prisma.user.findFirst();
  }

  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
