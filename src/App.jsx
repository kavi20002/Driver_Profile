import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DailyWaste, DriverDashboard, DriverDashboardlayout, DriverProfile, EditDailyWaste } from './pages/index';


function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <DriverDashboardlayout/>,
      children: [
        {
          index: true,
          element: <DriverDashboard/>,
        },
        {
          path: "driver-profile",
          element: <DriverProfile/>,
        },
        {
          path: "daily-waste",
          element: <DailyWaste/>,
        },
        {
          path: "EditDailyWaste",
          element: <EditDailyWaste/>
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>
}

export default App;
