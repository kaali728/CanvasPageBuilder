import React from "react";
import HeaderImageUrl from "./global/HeaderImageUrl";
import BeschreibungBox from "./layout2/BeschreibungBox";
import InhaltUebersicht from "./layout2/InhaltUebersicht";
import MetroPlan from "./layout2/MetroPlan";

export default function Layout2() {
  return (
    <div>
      <HeaderImageUrl />
      <BeschreibungBox />
      <MetroPlan />
      <InhaltUebersicht />
    </div>
  );
}
