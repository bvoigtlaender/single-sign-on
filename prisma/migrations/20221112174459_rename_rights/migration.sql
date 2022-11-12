/*
  Warnings:

  - You are about to drop the `AccessRight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AccessRightsOnUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AccessRightsOnUser" DROP CONSTRAINT "AccessRightsOnUser_accessRightId_fkey";

-- DropForeignKey
ALTER TABLE "AccessRightsOnUser" DROP CONSTRAINT "AccessRightsOnUser_userId_fkey";

-- DropTable
DROP TABLE "AccessRight";

-- DropTable
DROP TABLE "AccessRightsOnUser";

-- CreateTable
CREATE TABLE "Right" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Right_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RightToUser" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RightToUser_AB_unique" ON "_RightToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RightToUser_B_index" ON "_RightToUser"("B");

-- AddForeignKey
ALTER TABLE "_RightToUser" ADD CONSTRAINT "_RightToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Right"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RightToUser" ADD CONSTRAINT "_RightToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
