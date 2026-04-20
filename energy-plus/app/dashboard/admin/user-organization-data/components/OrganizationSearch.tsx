"use client";

import * as React from "react";
import { Autocomplete, Paper, Stack, TextField, Typography } from "@mui/material";

import { OrganizationSearchProps } from "../types";

export default function OrganizationSearch({
    organizations,
    selectedOrganizationId,
    onSelectOrganization,
    isLoading = false,
}: OrganizationSearchProps) {
    const selectedOrganization = React.useMemo(
        () => organizations.find((organization) => organization.id === selectedOrganizationId) ?? null,
        [organizations, selectedOrganizationId],
    );

    return (
        <Paper
            variant="outlined"
            sx={{
                flex: 1,
                px: 3,
                py: 2.5,
                borderRadius: 3,
            }}
        >
            <Stack spacing={1.5}>
                <Typography variant="overline" color="text.secondary">
                    Organization
                </Typography>
                <Autocomplete
                    options={organizations}
                    value={selectedOrganization}
                    loading={isLoading}
                    disabled={isLoading || !organizations.length}
                    onChange={(_event, value) => onSelectOrganization(value?.id ?? null)}
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText={
                        organizations.length
                            ? "No matching organizations."
                            : "No organizations found for this user."
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search organizations"
                            placeholder="Find an organization"
                            fullWidth
                        />
                    )}
                />
            </Stack>
        </Paper>
    );
}
