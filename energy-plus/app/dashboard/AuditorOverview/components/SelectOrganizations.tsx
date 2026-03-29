"use client";

import { useEffect, useState } from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";

export interface Organization {
    id: string;
    name: string;
    jurisdiction_id: string | null;
}

interface SelectOrganizationsProps {
    jurisdictionId: string;
    onOrganizationSelect: (organization: Organization) => void;
    selectedOrganization?: Organization | null;
}

export default function SelectOrganizations({
                                                jurisdictionId,
                                                onOrganizationSelect,
                                                selectedOrganization,
                                            }: SelectOrganizationsProps) {
    const [open, setOpen] = useState(false);
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        async function fetchOrganizations() {
            if (!jurisdictionId) {
                setOrganizations([]);
                return;
            }

            setLoading(true);
            setErrorText("");

            const { data, error } = await supabaseClient
                .from("organizations")
                .select("id, name, jurisdiction_id")
                .eq("jurisdiction_id", jurisdictionId)
                .order("name", { ascending: true });

            if (error) {
                setErrorText(error.message);
                setOrganizations([]);
                setLoading(false);
                return;
            }

            setOrganizations((data ?? []) as Organization[]);
            setLoading(false);
        }

        fetchOrganizations();
    }, [jurisdictionId]);

    const handleSelect = (organization: Organization) => {
        onOrganizationSelect(organization);
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)} sx={{ minWidth: 220, textTransform: "none" }}>
                {selectedOrganization?.name || "Search Organizations"}
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Select Organization</DialogTitle>

                <DialogContent dividers>
                    {errorText ? <Alert severity="error" sx={{ mb: 2 }}>{errorText}</Alert> : null}

                    {loading ? (
                        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : organizations.length === 0 ? (
                        <Typography color="text.secondary">
                            No organizations found for this jurisdiction.
                        </Typography>
                    ) : (
                        <List>
                            {organizations.map((organization) => (
                                <ListItemButton key={organization.id} onClick={() => handleSelect(organization)}>
                                    <ListItemText primary={organization.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}