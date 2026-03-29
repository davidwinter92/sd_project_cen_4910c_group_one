"use client";

import { Box, Paper, Typography } from "@mui/material";

interface RadialDialProps {
    value: number;
    label?: string;
}

export default function RadialDial({
                                       value,
                                       label = "current status",
                                   }: RadialDialProps) {
    const safeValue = Math.max(0, Math.min(100, value));
    const angle = (safeValue / 100) * 360;

    return (
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Typography sx={{ mb: 2 }}>{label}</Typography>

            <Box
                sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: `conic-gradient(#4f8cff ${angle}deg, rgba(255,255,255,0.12) ${angle}deg)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                }}
            >
                <Box
                    sx={{
                        width: 88,
                        height: 88,
                        borderRadius: "50%",
                        bgcolor: "background.paper",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h5">{safeValue}</Typography>
                </Box>
            </Box>
        </Paper>
    );
}