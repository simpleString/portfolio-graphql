/*
  Warnings:

  - Added the required column `achievements` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "achievements" TEXT NOT NULL,
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "link" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "links" TEXT[];
