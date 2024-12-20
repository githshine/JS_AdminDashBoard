import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebars from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";
import Calendar from "./scenes/calendar/Calendar";
import FAQ from "./scenes/faq/FAQ";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geography from "./scenes/geography/Geography";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    // @ts-expect-error TS(2503): Cannot find namespace 'ColorModeContext'.
    <ColorModeContext.Provider value={colorMode}>
      // @ts-expect-error TS(2749): 'ThemeProvider' refers to a value, but is being us... Remove this comment to see the full error message
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider theme>
        // @ts-expect-error TS(2749): 'CssBaseline' refers to a value, but is being used... Remove this comment to see the full error message
        <CssBaseline />
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="app">
          // @ts-expect-error TS(2749): 'Sidebars' refers to a value, but is being used as... Remove this comment to see the full error message
          <Sidebars />
          // @ts-expect-error TS(2304): Cannot find name 'main'.
          <main className="content">
            // @ts-expect-error TS(2749): 'Topbar' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Topbar />
            <Routes>
              // @ts-expect-error TS(2749): 'Route' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Route path="/" element={<Dashboard />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/team" element={<Team />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/contacts" element={<Contacts />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/invoices" element={<Invoices />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/form" element={<Form />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/calendar" element={<Calendar />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/faq" element={<FAQ />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/bar" element={<Bar />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/pie" element={<Pie />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/line" element={<Line />} />
              // @ts-expect-error TS(2304): Cannot find name 'path'.
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
