"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const hasAccess = false;
    if (!hasAccess) {
      router.push("/");
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedPage;
