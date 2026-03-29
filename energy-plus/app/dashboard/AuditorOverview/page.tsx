"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";

import SelectOrganizations from "./components/SelectOrganizations";
import SelectProperties, {
    Property,
} from "./components/SelectProperties";
import RadialDial from "./components/RadialDial";
import EnergyUsageTable, {
    EnergyUsageRow,
} from "./components/EnergyUsageTable";
import Graph, { GraphPoint } from "./components/Graph";

type Organization = {
    id: string;
    name: string;
    jurisdiction_id: string | null;
};

export default function AuditorOverviewPage() {
    const router = useRouter();

    const [jurisdictionId, setJurisdictionId] = React.useState<string>("");
    const [jurisdictionName, setJurisdictionName] = React.useState<string>("");

    const [selectedOrganization, setSelectedOrganization] =
        React.useState<Organization | null>(null);
    const [selectedProperty, setSelectedProperty] =
        React.useState<Property | null>(null);

    const [tableRows, setTableRows] = React.useState<EnergyUsageRow[]>([]);
    const [graphData, setGraphData] = React.useState<GraphPoint[]>([]);
    const [score, setScore] = React.useState<number>(0);

    React.useEffect(() => {
        const savedJurisdictionId = localStorage.getItem("auditorJurisdictionId");
        const savedJurisdictionName = localStorage.getItem("auditorJurisdictionName");

        if (!savedJurisdictionId) {
            router.push("/dashboard/auditor");
            return;
        }

        setJurisdictionId(savedJurisdictionId);
        setJurisdictionName(savedJurisdictionName || "");
    }, [router]);

    React.useEffect(() => {
        async function loadSelectedPropertyVisuals() {
            if (!selectedProperty) {
                setScore(0);
                setTableRows([]);
                setGraphData([]);
                return;
            }

            const { data, error } = await supabaseClient
                .from("energy_scores")
                .select("*")
                .eq("property_id", selectedProperty.id)
                .order("created_at", { ascending: true });

            if (error || !data || data.length === 0) {
                setScore(0);
                setTableRows([]);
                setGraphData([]);
                return;
            }

            const latest = data[data.length - 1];

            setScore(Math.round(latest.score ?? 0));

            setTableRows(
                data.map((row: any, index: number) => ({
                    id: row.id ?? `${selectedProperty.id}-${index}`,
                    status: (row.score ?? 0) >= 75 ? "Passing" : "Failing",
                    energyScore: row.score ?? 0,
                    electric: row.electric ?? 0,
                    gas: row.gas ?? 0,
                    cost: row.cost ?? 0,
                    billingCycle: row.billing_cycle ?? "N/A",
                }))
            );

            setGraphData(
                data.map((row: any, index: number) => ({
                    month: row.billing_cycle ?? `Row ${index + 1}`,
                    electric: row.electric ?? 0,
                    gas: row.gas ?? 0,
                }))
            );
        }

        loadSelectedPropertyVisuals();
    }, [selectedProperty]);

    const handleChangeJurisdiction = () => {
        localStorage.removeItem("auditorJurisdictionId");
        localStorage.removeItem("auditorJurisdictionName");
        localStorage.removeItem("auditorJurisdictionType");
        router.push("/dashboard/auditor");
    };

    return (
        <Stack spacing={3}>
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Auditor Overview
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {jurisdictionName
                        ? `Current jurisdiction: ${jurisdictionName}`
                        : "No jurisdiction selected"}
                </Typography>

                <Button variant="outlined" onClick={handleChangeJurisdiction}>
                    Change Jurisdiction
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SelectOrganizations
                        jurisdictionId={jurisdictionId}
                        selectedOrganization={selectedOrganization}
                        onOrganizationSelect={setSelectedOrganization}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <SelectProperties
                        jurisdictionId={jurisdictionId}
                        selectedProperty={selectedProperty}
                        selectedOrganizationId={selectedOrganization?.id ?? null}
                        onPropertySelect={setSelectedProperty}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <RadialDial value={score} />
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Graph data={graphData} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <EnergyUsageTable rows={tableRows} />
                </Grid>
            </Grid>
        </Stack>
    );
}