-- CreateTable
CREATE TABLE "SupportMeasures" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "SupportMeasures_pkey" PRIMARY KEY ("id")
);
