"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ContactsIcon from "@mui/icons-material/Contacts";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { supabaseClient } from "@/lib/supabaseClient";

export default function MenuContent() {
    const router = useRouter();
    const pathname = usePathname();
    const [accountType, setAccountType] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProfile() {
            const {
                data: { user },
            } = await supabaseClient.auth.getUser();

            if (!user) return;

            const { data, error } = await supabaseClient
                .from("profiles")
                .select("account_type")
                .eq("id", user.id)
                .single();

            if (!error && data) {
                setAccountType(data.account_type);
            }
        }

        fetchProfile();
    }, []);

    const overviewPath =
        accountType === "auditor"
            ? "/dashboard/AuditorOverview"
            : "/dashboard/overview";

    const mainListItems = [
        { text: "Overview", icon: <HomeIcon />, path: overviewPath },

        // USER MENU
        ...(accountType !== "auditor"
            ? [
                {
                    text: "Organizations",
                    icon: <PersonIcon />,
                    path: "/dashboard/organizations",
                },
                {
                    text: "Log Energy",
                    icon: <FlashOnIcon />,
                    path: "/dashboard/energy",
                },
                {
                    text: "Contacts",
                    icon: <ContactsIcon />,
                    path: "/dashboard/contacts",
                },
                {
                    text: "Analytics",
                    icon: <AnalyticsIcon />,
                    path: "/dashboard/analytics",
                },
                {
                    text: "Properties",
                    icon: <AnalyticsIcon />,
                    path: "/dashboard/properties",
                },
            ]
            : []),

        // AUDITOR MENU
        ...(accountType === "auditor"
            ? [
                {
                    text: "Organizations",
                    icon: <PersonIcon />,
                    path: "/dashboard/AuditorOverview",
                },
                {
                    text: "Properties",
                    icon: <AnalyticsIcon />,
                    path: "/dashboard/AuditorOverview",
                },
            ]
            : []),

        // ADMIN + AUDITOR
        ...(accountType === "admin" || accountType === "auditor"
            ? [
                {
                    text: "Users",
                    icon: <PeopleIcon />,
                    path: "/dashboard/users",
                },
            ]
            : []),
    ];

    const secondaryListItems = [
        { text: "Settings", icon: <SettingsRoundedIcon />, path: "/dashboard/settings" },
    ];

    const isSelected = (itemPath: string) => pathname === itemPath;

    if (!accountType) return null;

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            selected={isSelected(item.path)}
                            onClick={() => router.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            selected={isSelected(item.path)}
                            onClick={() => router.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}