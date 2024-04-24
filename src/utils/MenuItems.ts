import { MdDashboard } from "react-icons/md";

export const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: '/dashboard',
                icon: MdDashboard,
            },
            {
                title: "Users",
                path: '/dashboard/users',
                icon: MdDashboard,
            },
            {
                title: "Products",
                path: '/dashboard/products',
                icon: MdDashboard,
            },
            {
                title: "Transactions",
                path: '/dashboard/transaction',
                icon: MdDashboard,
            }

        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: '/dashboard/revenue',
                icon: MdDashboard,
            },
            {
                title: "Reports",
                path: '/dashboard/report',
                icon: MdDashboard,
            },
            {
                title: "Teams",
                path: '/dashboard/teams',
                icon: MdDashboard,
            },
        ]
    }
]