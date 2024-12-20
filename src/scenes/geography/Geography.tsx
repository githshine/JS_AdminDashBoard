import React from "react";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
// @ts-expect-error TS(6142): Module '../../components/Header' was resolved to '... Remove this comment to see the full error message
import Header from "../../components/Header";
// @ts-expect-error TS(6142): Module '../../components/GeographyChart' was resol... Remove this comment to see the full error message
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box m={"20px"}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header title={"Geography Chart"} subtitle={"Simple Geography Chart."} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
