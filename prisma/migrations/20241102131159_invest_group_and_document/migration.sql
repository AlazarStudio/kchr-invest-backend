-- CreateTable
CREATE TABLE "InvestGroup" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "InvestGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IvestDocument" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "IvestDocument_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IvestDocument" ADD CONSTRAINT "IvestDocument_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "InvestGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
