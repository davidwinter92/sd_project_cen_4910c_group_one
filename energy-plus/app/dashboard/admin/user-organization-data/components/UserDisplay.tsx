"use client";

import * as React from "react";
import { Autocomplete, Paper, Stack, TextField, Typography } from "@mui/material";

import { UserDisplayProps } from "../types";

export default function UserDisplay({
    users,
    selectedUserId,
    userName,
    onSelectUser,
    isLoading = false,
}: UserDisplayProps) {
    const displayName = userName.trim() || "Unknown user";
    const selectedUser = React.useMemo(
        () => users.find((user) => user.id === selectedUserId) ?? null,
        [selectedUserId, users],
    );

    return (
        <Paper
            variant="outlined"
            sx={{
                minWidth: { xs: "100%", md: 240 },
                px: 3,
                py: 2.5,
                borderRadius: 3,
            }}
        >
            <Stack spacing={1.5}>
                <Typography variant="overline" color="text.secondary">
                    User
                </Typography>
                <Autocomplete
                    options={users}
                    value={selectedUser}
                    loading={isLoading}
                    disabled={isLoading || !users.length}
                    onChange={(_event, value) => onSelectUser(value?.id ?? null)}
                    getOptionLabel={(option) =>
                        option.email ? `${option.name} (${option.email})` : option.name
                    }
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText="No users found."
                    renderOption={(props, option) => (
                        <li {...props} key={option.id}>
                            {option.email ? `${option.name} (${option.email})` : option.name}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Select user"
                            fullWidth
                        />
                    )}
                />
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 700,
                        overflowWrap: "anywhere",
                    }}
                >
                    {displayName}
                </Typography>
            </Stack>
        </Paper>
    );
}
