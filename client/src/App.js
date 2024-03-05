// App.js
import React from 'react';
import AppRoutes from './Routes';
import { MyComponent } from "./Vanta";


function App() {
  return (
    <div className="App">
      <AppRoutes />
      <MyComponent/>
      
    </div>
  );
}

export default App;
