import React from "react";
import { SvgProps } from "../types";

const LogoDFHWithText: React.FC<SvgProps> = ({ ...props }) => {
  return <img src="/images/logo-with-text.png" alt="logo-with-text.png" {...props} />;
};

export default LogoDFHWithText;
