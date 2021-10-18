import React from "react";
import { Button, Intent, Spinner } from "@blueprintjs/core";

const Main = () => {
  return (
    <div>
      <Button intent="success" text="button content" />
      <mySpinner />
    </div>
  );
};

export default Main;
