/*
  Warnings:

  - You are about to drop the `InnvestGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InvestDocument" DROP CONSTRAINT "InvestDocument_groupId_fkey";

-- DropTable
DROP TABLE "InnvestGroup";

-- CreateTable
CREATE TABLE "InvestGroup" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "InvestGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvestDocument" ADD CONSTRAINT "InvestDocument_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "InvestGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
