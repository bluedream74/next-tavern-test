"use client";

import ClientOnly from "./ClientOnly";
import FooterColumn from "./FooterColumn";

type Props = {};

function Footer({}: Props) {
  const itemData = [
    ["ABOUT", "Item1", "Item2", "Item3", "Item4"],
    ["Support", "Item1", "Item2", "Item3", "Item4"],
    ["Community", "Item1", "Item2", "Item3", "Item4"],
    ["Hosting","Item1","Item2","Item3","Item4"],
  ];

  const footerColumns = itemData.map((item, index) => (
    <FooterColumn key={`FooterColumn_${index}`} index={index} data={item} />
  ))

  return (
    <ClientOnly>
      <div 
        className="
          sm:static
          md:fixed
          left-0
          bottom-0
          w-full
          text-center
          grid
          grid-cols-1
          md:grid-cols-4
          gap-y-10
          px-32
          py-14
          bg-gray-100
          text-gray-600
        "
      >
        {footerColumns}
      </div>
    </ClientOnly>
  );
}

export default Footer;