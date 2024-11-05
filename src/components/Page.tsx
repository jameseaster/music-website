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
  // Use transition if endHeight is specified
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
      justifyContent="center"
      sx={{
        mx: "auto",
        width: "100%",
        height: "100%",
        minHeight: "70vh",
        maxWidth: "1400px",
        mt: { xs: 4, sm: 0 },
        ...sx,
      }}
    >
      {childComponents}
    </Grid>
  );
};

export default Page;
