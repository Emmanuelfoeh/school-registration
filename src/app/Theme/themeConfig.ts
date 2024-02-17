// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#6C63FF",
    // colorPrimary: "#52c41a",

    // activeBorderColor: "red",
    // components: {
    //   // activeBorderColor,
    // },
  },
  components: {
    Input: {
      activeBorderColor: "#6C63FF",
      hoverBorderColor: "#6C63FF",
    },
    Select: {
      // multipleItemBg:"yellow",
    },
    Steps: {
      navArrowColor:"#6C63FF",
    },
  },
};

export default theme;
