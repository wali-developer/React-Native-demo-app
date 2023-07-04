import React from "react";

import defaultStyle from "../config/style";
import AppTextinput from "./AppTextinput";

const AppText = ({ children, style, ...rest }) => {
  return (
    <AppText style={[defaultStyle.text, style]} {...rest}>
      {children}
    </AppText>
  );
};

export default AppText;
