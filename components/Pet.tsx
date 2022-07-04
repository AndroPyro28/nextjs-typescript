import Image, { StaticImageData } from "next/image";
import React from "react";

type PetProps = {
  imgPath: StaticImageData;
};

function Pet({ imgPath }: PetProps) {
  return (
    <div>
      <Image src={imgPath} placeholder="blur" alt="pet" width="280" height="420"  />
    </div>
  );
}

export default Pet;
