// App.js
import React from 'react';
import AppRoutes from './Routes';
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <div className="App">
      <AppRoutes />
      <SpeedInsights />
    </div>
  );
}

export default App;
