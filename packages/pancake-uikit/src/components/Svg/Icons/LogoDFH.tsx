import React from "react";
import { SvgProps } from "../types";

const LogoDFH: React.FC<SvgProps> = (props) => {
  return <img src="/logo.png" alt="logo.png" {...props} />;
};

export default LogoDFH;
