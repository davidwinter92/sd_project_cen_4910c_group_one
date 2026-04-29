"use client";

import {
    Alert,
    CircularProgress,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { OrganizationPropertiesListProps, UserOrganizationProperty } from "../types";

function buildPropertyLabel(property: UserOrganizationProperty) {
    if (property.street?.trim()) {
        return property.street.trim();
    }

    return "Unnamed Property";
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
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Properties
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
                                    primary={buildPropertyLabel(property)}
                                    secondary={
                                        [
                                            property.property_type,
                                            property.city,
                                            property.state,
                                            property.sq_ft ? `${property.sq_ft.toLocaleString()} sq ft` : null,
                                        ]
                                            .filter(Boolean)
                                            .join(" • ") || "Property details unavailable"
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
