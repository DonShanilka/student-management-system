import { Home } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const sideBar = [
    {
        link: '/home',
        button:
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
            </ListItemButton>

    },
    {
        link: '/student',
        button:
            <ListItemButton>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary={"Student"} />
            </ListItemButton>

    },
]


export default sideBar