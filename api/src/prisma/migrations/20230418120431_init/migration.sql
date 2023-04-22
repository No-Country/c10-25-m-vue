/*
  Warnings:

  - You are about to drop the column `phone` on the `Vet` table. All the data in the column will be lost.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "petImage" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vet" DROP COLUMN "phone";
