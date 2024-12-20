import React from "react";
import { Box } from "@mui/material";
// @ts-expect-error TS(6142): Module '../../components/Header' was resolved to '... Remove this comment to see the full error message
import Header from "../../components/Header";
// @ts-expect-error TS(6142): Module '../../components/PieChart' was resolved to... Remove this comment to see the full error message
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box m={"20px"}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header title={"Pie Chart"} subtitle={"Simple Pie Chart."} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box height="75vh">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
