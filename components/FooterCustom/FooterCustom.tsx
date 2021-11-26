import React from "react";
import { useLang } from "../../hooks/useLang";
import Link from "next/link";

export default function FooterCustom() {
  const { t, locales, asPath } = useLang();
  return (
    <div>
      <ul>
        {locales?.map((loc) => (
          <li key={loc}>
            <Link href={asPath} locale={loc}>
              <a>{loc}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
