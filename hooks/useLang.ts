import { useRouter } from "next/router";
import { es, en, fr } from "../languages/index";

export const useLang = () => {
  const { asPath, locale, locales, defaultLocale } = useRouter();
  let t: any =
    locale === "en" ? en : locale === "es" ? es : locale === "fr" ? fr : "en";
  return { t, locales, asPath };
};
