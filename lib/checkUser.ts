import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  // Ensure Clerk middleware context is available and user is authenticated
  try {
    const { userId } = await auth();
    if (!userId) return null;

    const user = await currentUser();
    if (!user) return null;
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (loggedInUser) {
      return loggedInUser;
    }
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
        name: `${user.firstName} ${user.lastName}`,
      },
    });
    return newUser;
  } catch (error) {
    // If Clerk context isn't available or any other error occurs, fail gracefully
    console.log("checkUser error:", error);
    return null;
  }
};
