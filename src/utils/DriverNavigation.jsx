import { FaChartBar, FaPortrait, FaTable } from "react-icons/fa";


export const DRIVER_DASHBOARD_SIDEBAR_UPPER_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '.',
        icon: <FaTable/>
    },
    {
        key: 'driver-profile',
        lable: 'Profile',
        path: 'driver-profile',
        icon: <FaPortrait/>
    },
    {
        key: 'daily-waste',
        label: 'Daily-Waste',
        path: 'daily-waste',
        icon: <FaChartBar/>
    }
]