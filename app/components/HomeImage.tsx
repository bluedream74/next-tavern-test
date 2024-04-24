'use client';

import Image from "next/image";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Heading from "./Heading";

const HomeImage = () => {
  const handle = useFullScreenHandle();

  return (
    <div
      className="
        max-w-[700px]
        w-full
        mx-auto
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <FullScreen handle={handle}>
        <Image
          width={0}
          height={0}
          className="
            rounded
            shadow-sm
            hover:shadow-lg
            w-full
            h-full
          "
          alt="Main"
          src={'/images/main.webp'}
          sizes="100vw"
          onClick={handle.enter}
        />
      </FullScreen>
      <div
        className="
          px-4
          sm:px-8
          py-8
        "
      >
        <Heading
          title="人々が求めるものを、思い描き、実現する"
          subtitle="何よりもまず、人々が心から求めるものを提供することが大切だと考えています。
          そのために、日々理想の未来を想像し、現実の世界を観察し、情報収集を重ね、必要なものを発見し、高スピードで実装します。"
        />
      </div>
    </div>
  );
}

export default HomeImage;