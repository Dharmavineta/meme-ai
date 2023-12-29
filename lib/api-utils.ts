import { auth } from "@clerk/nextjs";
import prismaDB from "./db";

export const MAX_FREE_COUNTS = 5;
const DAY_IN_MS = 86_400_000;

export const incrementAPIlimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApilimit = await prismaDB.apiLimit.findUnique({
    where: {
      userId,
    },
  });
  if (userApilimit) {
    await prismaDB.apiLimit.update({
      where: {
        userId,
      },
      data: {
        count: userApilimit.count + 1,
      },
    });
  } else {
    await prismaDB.apiLimit.create({
      data: { userId, count: 1 },
    });
  }
};

export const checkAPILimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismaDB.apiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else return false;
};

export const getApiLimitCount = async () => {
  const { userId } = auth();
  if (!userId) {
    return;
  }

  const userApiLimitCount = await prismaDB.apiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimitCount) {
    return 0;
  }
  return userApiLimitCount.count;
};

export const checkSubscription = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  const userSub = await prismaDB.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeCustomerId: true,
      stripePriceId: true,
      stripeSubscriptionEnd: true,
      stripeSubscriptionId: true,
    },
  });

  if (!userSub) {
    return false;
  }

  const isValid =
    userSub.stripePriceId &&
    userSub.stripeSubscriptionEnd?.getTime()! + DAY_IN_MS > Date.now();

  return !!isValid;
};
