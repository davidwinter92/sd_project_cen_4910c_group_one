"use client";

import * as React from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

type PropertyRow = {
    id: string;
    is_certified?: boolean | null;
    certified_at?: string | null;
};

interface CertifyPropertyProps {
    property: PropertyRow;
    onCertified?: () => void;
}

export default function CertifyProperty({
                                            property,
                                            onCertified,
                                        }: CertifyPropertyProps) {
    const [notes, setNotes] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);

    async function handleCertifyProperty() {
        if (!property?.id) {
            setError("Property ID is missing.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch("/api/properties/certify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    propertyId: property.id,
                    notes: notes.trim() || null,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to certify property.");
            }

            setSuccess("Property certified successfully.");
            setNotes("");

            if (onCertified) {
                onCertified();
            }
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong while certifying this property."
            );
        } finally {
            setLoading(false);
        }
    }

    const alreadyCertified = Boolean(property.is_certified);

    return (
        <Box>
            <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Property Certification
                </Typography>

                {alreadyCertified && (
                    <Alert severity="success">
                        This property is already certified
                        {property.certified_at
                            ? ` as of ${new Date(property.certified_at).toLocaleDateString()}`
                            : ""}
                        .
                    </Alert>
                )}

                {!alreadyCertified && (
                    <>
                        <Typography variant="body2" color="text.secondary">
                            Certify this property after reviewing the energy usage, property
                            summary, and related metrics.
                        </Typography>

                        <TextField
                            label="Certification Notes"
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                            multiline
                            minRows={3}
                            fullWidth
                            placeholder="Optional notes about this certification"
                        />

                        {error && <Alert severity="error">{error}</Alert>}
                        {success && <Alert severity="success">{success}</Alert>}

                        <Button
                            variant="contained"
                            onClick={handleCertifyProperty}
                            disabled={loading}
                            sx={{ textTransform: "none", borderRadius: 2, width: "fit-content" }}
                        >
                            {loading ? (
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <CircularProgress size={18} />
                                    <span>Certifying...</span>
                                </Stack>
                            ) : (
                                "Certify Property"
                            )}
                        </Button>
                    </>
                )}
            </Stack>
        </Box>
    );
}