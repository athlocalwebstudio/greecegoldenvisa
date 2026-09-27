"use client";

import Link from "next/link";
import { useLanguage } from "@/app/LanguageContext";
import { localizedPath } from "@/app/utils/localizedPath";

export default function LocalizedLink({
  href,
  children,
  ...props
}) {
  const { language } = useLanguage();

  const localizedHref =
    typeof href === "string"
      ? localizedPath(language, href)
      : href;

  return (
    <Link
      href={localizedHref}
      {...props}
    >
      {children}
    </Link>
  );
}   