"use client";

import { usePathname } from "next/navigation";
import { links } from "@/utils/SideLinks";

import Link from "next/link";

const Sidebar = () => {
  // =========== Pathname ============
  const pathname = usePathname();

  // =========== Rendering ============
  return (
    <nav className="h-screen bg-gray-800 text-white w-64">
      <ul className="space-y-4 p-4">
        {links.map((link) => (
          <li
            key={link.name}
            className={`p-2 rounded ${
              pathname === link.path ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
