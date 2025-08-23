import { currentUser } from "@clerk/nextjs/server";

export type AppUser = {
  id: string;
  email?: string;
  name?: string;
  role?: "ADMIN" | "USER" | string;
};

export async function checkUser(): Promise<AppUser | null> {
  const user = await currentUser();
  if (!user) return null;

  const role =
    (user.publicMetadata?.role as string | undefined) ??
    (user.privateMetadata?.role as string | undefined) ??
    "USER";

  return {
    id: user.id,
    email: user.emailAddresses?.[0]?.emailAddress,
    name:
      user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : user.username || undefined,
    role,
  };
}
