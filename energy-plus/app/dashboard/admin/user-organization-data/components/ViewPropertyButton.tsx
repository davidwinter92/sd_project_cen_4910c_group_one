"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";

import { ViewPropertyButtonProps } from "../types";

export default function ViewPropertyButton({
  selectedProperty,
  onClick,
  disabled = false,
}: ViewPropertyButtonProps) {
  if (!selectedProperty) {
    return null;
  }

  const propertyTitle = selectedProperty.street?.trim() || "Unnamed Property";

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
          {propertyTitle}
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
