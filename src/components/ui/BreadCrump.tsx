//@ts-nocheck
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function BreadCrump({ title, breadCrumpLinks }) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center list-none space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="flex items-center">
          <Link
            href="/"
            className="inline-flex no-underline items-center text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Home className="w-3 h-3 me-2.5" />
            Home
          </Link>
        </li>
        <li>
          {breadCrumpLinks.map((item, i) => {
            return (
              <div key={i} className="flex items-center">
                <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                <Link
                  href={item.href}
                  className="ms-1 text-sm no-underline font-medium text-gray-700 hover:text-green-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              {title} Details
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
