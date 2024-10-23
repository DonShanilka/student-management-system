import { ListItemIcon } from "@mui/material";
import Home from "../../pages/home/Home";
import StudentPage from "../../pages/studentPage/StudentPage";

const route = [
    {
        name: 'home',
        path: '/home',
        element: <Home />,
        key: 'home'
    },
    {
        name: 'student',
        path: '/student',
        element: <StudentPage />,
        key: 'student',
    }
]

export default route