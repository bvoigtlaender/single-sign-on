-- CreateTable
CREATE TABLE "AccessRight" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AccessRight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessRightsOnUser" (
    "accessRightId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AccessRightsOnUser_pkey" PRIMARY KEY ("accessRightId","userId")
);

-- AddForeignKey
ALTER TABLE "AccessRightsOnUser" ADD CONSTRAINT "AccessRightsOnUser_accessRightId_fkey" FOREIGN KEY ("accessRightId") REFERENCES "AccessRight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessRightsOnUser" ADD CONSTRAINT "AccessRightsOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
