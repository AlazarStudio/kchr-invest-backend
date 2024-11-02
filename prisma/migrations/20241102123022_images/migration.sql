/*
  Warnings:

  - You are about to drop the column `img` on the `SupportMeasures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SupportMeasures" DROP COLUMN "img",
ADD COLUMN     "images" TEXT[];
