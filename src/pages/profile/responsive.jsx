import React from "react";
import { useMediaQuery } from "react-responsive";

const Responsive = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isDesktop && <></>}
      {isTablet && <></>}
      {isMobile && <></>}
    </div>
  );
};

export default Responsive;