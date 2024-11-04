// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/system";
import AnimatedTrail from "./AnimatedTrail";

// Types
export interface PageProps {
  sx?: SxProps;
  endHeight?: number;
  children?: React.ReactNode;
}

/**
 * Page component which wraps each app page
 */
const Page: React.FC<PageProps> = ({ sx, children, endHeight }) => {
  const childComponents = endHeight ? (
    <AnimatedTrail open={true} endHeight={endHeight}>
      {children}
    </AnimatedTrail>
  ) : (
    children
  );
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        mx: "auto",
        width: "100%",
        height: "100%",
        maxWidth: "1400px",
        ...sx,
      }}
    >
      {childComponents}
    </Grid>
  );
};

export default Page;
