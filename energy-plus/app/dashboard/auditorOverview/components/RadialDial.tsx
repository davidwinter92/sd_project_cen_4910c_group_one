"use client";

import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";
import { Property } from "./SelectProperties";
import CertifyProperty from "../../auditorOrganizations/components/CertifyProperty";

interface RadialDialProps {
    property: Property | null;
    label?: string;
}

export default function RadialDial({
                                       property,
                                       label = "Current Status",
                                   }: RadialDialProps) {
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        async function fetchScore() {
            if (!property?.id) {
                setScore(0);
                return;
            }

            const { data, error } = await supabaseClient
                .from("energy_scores")
                .select("score, billing_month")
                .eq("property_id", property.id)
                .order("billing_month", { ascending: false })
                .limit(1);

            if (error) {
                console.error("Error fetching score:", error.message);
                setScore(0);
                return;
            }

            if (!data || data.length === 0) {
                setScore(0);
                return;
            }

            setScore(Math.round(data[0].score ?? 0));
        }

        fetchScore();
    }, [property]);

    const safeValue = Math.max(0, Math.min(100, score));
    const angle = (safeValue / 100) * 360;

    return (
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Typography sx={{ mb: 2 }}>{label}</Typography>

            {!property ? (
                <Typography color="text.secondary">
                    Select a property to view status.
                </Typography>
            ) : (
                <>
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

                    <Box sx={{ mt: 1.5, textAlign: "center" }}>
                        <Typography
                            variant="caption"
                            sx={{
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                bgcolor: property.is_certified
                                    ? "success.light"
                                    : "grey.200",
                                color: property.is_certified
                                    ? "success.dark"
                                    : "text.secondary",
                                fontWeight: 600,
                                display: "inline-block",
                            }}
                        >
                            {property.is_certified ? "Certified" : "Not Certified"}
                        </Typography>

                        {property.is_certified && property.certified_at && (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mt: 1 }}
                            >
                                Certified on{" "}
                                {new Date(property.certified_at).toLocaleDateString()}
                            </Typography>
                        )}
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <CertifyProperty property={property} />
                    </Box>
                </>
            )}
        </Paper>
    );
}