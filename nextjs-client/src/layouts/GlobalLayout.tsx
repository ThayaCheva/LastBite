import { users } from "@/data/data";
import { DashboardStore } from "@/zustand/dashboard";
import { GeneralStore } from "@/zustand/general";
import { Box } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const setUser = GeneralStore((state) => state.setCurrentUser);
  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId) {
      const user = users.find((u) => u.id === userId);
      if (user) {
        console.log("setting user from local");
        setUser(user);
      }
    }
  }, []);

  return (
    <Box bg="orange.1">
      <main className="page">{children}</main>
    </Box>
  );
}
