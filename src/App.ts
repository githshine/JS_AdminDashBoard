import { Routes, Route } from "react-router-dom";
// @ts-expect-error TS(6142): Module './scenes/global/Topbar' was resolved to '/... Remove this comment to see the full error message
import Topbar from "./scenes/global/Topbar";
// @ts-expect-error TS(6142): Module './scenes/global/Sidebar' was resolved to '... Remove this comment to see the full error message
import Sidebars from "./scenes/global/Sidebar";
// @ts-expect-error TS(6142): Module './scenes/dashboard/index' was resolved to ... Remove this comment to see the full error message
import Dashboard from "./scenes/dashboard/index";
// @ts-expect-error TS(6142): Module './scenes/team/Team' was resolved to '/User... Remove this comment to see the full error message
import Team from "./scenes/team/Team";
// @ts-expect-error TS(6142): Module './scenes/contacts/Contacts' was resolved t... Remove this comment to see the full error message
import Contacts from "./scenes/contacts/Contacts";
// @ts-expect-error TS(6142): Module './scenes/invoices/Invoices' was resolved t... Remove this comment to see the full error message
import Invoices from "./scenes/invoices/Invoices";
// @ts-expect-error TS(6142): Module './scenes/form/Form' was resolved to '/User... Remove this comment to see the full error message
import Form from "./scenes/form/Form";
// @ts-expect-error TS(6142): Module './scenes/calendar/Calendar' was resolved t... Remove this comment to see the full error message
import Calendar from "./scenes/calendar/Calendar";
// @ts-expect-error TS(6142): Module './scenes/faq/FAQ' was resolved to '/Users/... Remove this comment to see the full error message
import FAQ from "./scenes/faq/FAQ";
// @ts-expect-error TS(6142): Module './scenes/bar/Bar' was resolved to '/Users/... Remove this comment to see the full error message
import Bar from "./scenes/bar/Bar";
// @ts-expect-error TS(6142): Module './scenes/pie/Pie.jsx' was resolved to '/Us... Remove this comment to see the full error message
import Pie from "./scenes/pie/Pie.jsx";
// @ts-expect-error TS(6142): Module './scenes/line/Line' was resolved to '/User... Remove this comment to see the full error message
import Line from "./scenes/line/Line";
// @ts-expect-error TS(6142): Module './scenes/geography/Geography' was resolved... Remove this comment to see the full error message
import Geography from "./scenes/geography/Geography";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    // @ts-expect-error TS(2503): Cannot find namespace 'ColorModeContext'.
    <ColorModeContext.Provider value={colorMode}>
      // @ts-expect-error TS(2749): 'ThemeProvider' refers to a value, but is being us... Remove this comment to see the full error message
      <ThemeProvider theme={theme}>
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
