"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

interface AdminUser {
  id: string;
  clerkUserId: string;
  email: string;
  role: string;
  // Add other user fields as needed
}

type AdminResponse =
  | { authorized: true; user: AdminUser }
  | { authorized: false; reason: "not-admin" | "unauthorized" };

export async function getAdmin(): Promise<AdminResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { authorized: false, reason: "unauthorized" };
    }

    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user || user.role !== "ADMIN") {
      return { authorized: false, reason: "not-admin" };
    }

    return { 
      authorized: true, 
      user: {
        id: user.id,
        clerkUserId: user.clerkUserId,
        email: user.email,
        role: user.role,
        // Map other necessary user fields
      }
    };
  } catch (error) {
    console.error("Admin access error:", error);
    return { authorized: false, reason: "unauthorized" };
  }
}
