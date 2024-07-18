// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/system";

// Types
export interface PageProps {
  sx?: SxProps;
  children?: React.ReactNode;
}

/**
 * Page component which wraps each app page
 */
const Page: React.FC<PageProps> = ({ sx, children }) => {
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
      {children}
    </Grid>
  );
};

export default Page;
