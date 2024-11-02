-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "expected_income" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "investment_indicators" TEXT NOT NULL,
    "production_volume" TEXT NOT NULL,
    "annual_revenue" INTEGER NOT NULL,
    "financing_structure" TEXT NOT NULL,
    "taxes_and_insurance" TEXT NOT NULL,
    "jobs" TEXT NOT NULL,
    "social_effect" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
