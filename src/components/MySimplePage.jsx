/* eslint-disable no-unused-vars */
import React from "react";

import { FullName, CopyrightAndYear } from "./MySimpleComponents";

function MySimplePage() {
  return (
    <div>
      <FullName fName="Cong" lName="Huynh" />
      <CopyrightAndYear />
    </div>
  );
}

export default MySimplePage;
