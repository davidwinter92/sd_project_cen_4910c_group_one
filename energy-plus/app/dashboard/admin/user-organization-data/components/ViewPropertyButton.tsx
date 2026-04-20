"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";

import { ViewPropertyButtonProps } from "../types";

export default function ViewPropertyButton({
    selectedPropertyId,
    onClick,
    disabled = false,
}: ViewPropertyButtonProps) {
    if (!selectedPropertyId) {
        return null;
    }

    return (
        <Paper
            variant="outlined"
            sx={{
                borderRadius: 3,
                p: 3,
                height: "fit-content",
            }}
        >
            <Stack spacing={2}>
                <Typography variant="overline" color="text.secondary">
                    Selected Property
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Inspect details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Open the currently selected property field in a detail dialog.
                </Typography>
                <Button
                    variant="contained"
                    onClick={onClick}
                    disabled={disabled}
                    sx={{ alignSelf: { xs: "stretch", md: "flex-start" } }}
                >
                    View property
                </Button>
            </Stack>
        </Paper>
    );
}
