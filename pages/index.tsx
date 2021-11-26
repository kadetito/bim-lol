import type { NextPage } from "next";
import Image from "next/image";
import BasicLayout from "../layouts/BasicLayout";
import { useLang } from "../hooks/useLang";

const Home: NextPage = () => {
  const { t } = useLang();
  return (
    <BasicLayout>
      <h2>{t.HOME.title}</h2>
    </BasicLayout>
  );
};

export default Home;
