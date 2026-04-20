"use client";

import {
    Alert,
    Box,
    CircularProgress,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { OrganizationPropertiesListProps, OrganizationProperty } from "../types";

function formatPropertyValue(property: OrganizationProperty) {
    const { value, type } = property;

    if (value === null || value === "") {
        return "No value";
    }

    if (type === "date" && typeof value === "string") {
        const parsedDate = new Date(value);

        if (!Number.isNaN(parsedDate.getTime())) {
            return parsedDate.toLocaleString();
        }
    }

    if (typeof value === "boolean") {
        return value ? "True" : "False";
    }

    return String(value);
}

export default function OrganizationPropertiesList({
    properties,
    selectedPropertyId,
    onSelectProperty,
    isLoading = false,
    emptyMessage,
}: OrganizationPropertiesListProps) {
    return (
        <Paper
            variant="outlined"
            sx={{
                minHeight: 420,
                borderRadius: 3,
                px: 2,
                py: 1.5,
            }}
        >
            <Stack spacing={0.5} sx={{ px: 1, pb: 1.5 }}>
                <Typography variant="overline" color="text.secondary">
                    Properties
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Organization Properties
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Select a property row to inspect its value in more detail.
                </Typography>
            </Stack>

            {isLoading ? (
                <Stack alignItems="center" justifyContent="center" spacing={1.5} sx={{ minHeight: 260 }}>
                    <CircularProgress size={28} />
                    <Typography variant="body2" color="text.secondary">
                        Loading organization data...
                    </Typography>
                </Stack>
            ) : properties.length ? (
                <List
                    aria-label="Organization properties"
                    sx={{
                        pr: 0.5,
                    }}
                >
                    {properties.map((property) => (
                        <ListItem key={property.id} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                selected={selectedPropertyId === property.id}
                                onClick={() => onSelectProperty(property.id)}
                                aria-selected={selectedPropertyId === property.id}
                                sx={{
                                    borderRadius: 2,
                                    alignItems: "flex-start",
                                    border: "1px solid",
                                    borderColor:
                                        selectedPropertyId === property.id ? "primary.main" : "divider",
                                }}
                            >
                                <ListItemText
                                    primary={property.label}
                                    secondary={
                                        <Box component="span" sx={{ display: "block", mt: 0.5 }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ display: "block", fontWeight: 600 }}
                                            >
                                                {formatPropertyValue(property)}
                                            </Typography>
                                            <Typography
                                                component="span"
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{ display: "block", mt: 0.5 }}
                                            >
                                                {property.key}
                                                {property.description ? ` • ${property.description}` : ""}
                                            </Typography>
                                        </Box>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Stack justifyContent="center" sx={{ minHeight: 260, px: 2 }}>
                    <Alert severity="info" variant="outlined">
                        {emptyMessage}
                    </Alert>
                </Stack>
            )}
        </Paper>
    );
}
