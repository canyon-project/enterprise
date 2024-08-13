/*
  Warnings:

  - You are about to drop the column `nextPaymentDue` on the `License` table. All the data in the column will be lost.
  - You are about to drop the column `seatsPurchased` on the `License` table. All the data in the column will be lost.
  - Added the required column `next_payment_due` to the `License` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats_purchased` to the `License` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "License" DROP COLUMN "nextPaymentDue",
DROP COLUMN "seatsPurchased",
ADD COLUMN     "next_payment_due" INTEGER NOT NULL,
ADD COLUMN     "seats_purchased" TIMESTAMP(3) NOT NULL;
