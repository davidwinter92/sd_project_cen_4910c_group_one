"use client";

import { useEffect, useMemo, useState } from "react";
import {
    Alert,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { supabaseClient } from "@/lib/supabaseClient";
import { Property } from "./SelectProperty";

type LogEnergyProps = {
    property: Property | null;
};

type EnergyTypeRow = {
    name: string | null;
    unit: string | null;
};

type MeterRow = {
    id: string;
    meter_number: string | null;
    property_id: string;
    energy_type_id: string | null;
    is_active: boolean | null;
    energy_types?: EnergyTypeRow | EnergyTypeRow[] | null;
};

function getEnergyType(meter: MeterRow | null): EnergyTypeRow | null {
    if (!meter?.energy_types) return null;

    if (Array.isArray(meter.energy_types)) {
        return meter.energy_types[0] ?? null;
    }

    return meter.energy_types;
}

export default function LogEnergy2({ property }: LogEnergyProps) {
    const [selectedMeterId, setSelectedMeterId] = useState("");
    const [usageStart, setUsageStart] = useState("");
    const [usageEnd, setUsageEnd] = useState("");
    const [usageAmount, setUsageAmount] = useState("");
    const [cost, setCost] = useState("");

    const [meters, setMeters] = useState<MeterRow[]>([]);
    const [metersLoading, setMetersLoading] = useState(false);

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function loadMeters() {
            setMeters([]);
            setSelectedMeterId("");
            setErrorMessage("");
            setSuccessMessage("");

            if (!property?.id) {
                return;
            }

            setMetersLoading(true);

            const { data, error } = await supabaseClient
                .from("meters")
                .select(`
                    id,
                    meter_number,
                    property_id,
                    energy_type_id,
                    is_active,
                    energy_types (
                        name,
                        unit
                    )
                `)
                .eq("property_id", property.id)
                .eq("is_active", true)
                .order("created_at", { ascending: true });

            setMetersLoading(false);

            if (error) {
                console.error("Error loading meters:", error);
                setErrorMessage(error.message || "Failed to load meters.");
                return;
            }

            const typedMeters = (data ?? []) as unknown as MeterRow[];
            setMeters(typedMeters);

            if (typedMeters.length === 1) {
                setSelectedMeterId(typedMeters[0].id);
            }
        }

        loadMeters();
    }, [property]);

    const selectedMeter = useMemo(
        () => meters.find((meter) => meter.id === selectedMeterId) ?? null,
        [meters, selectedMeterId],
    );

    const selectedEnergyType = getEnergyType(selectedMeter);

    const resetForm = () => {
        setSelectedMeterId("");
        setUsageStart("");
        setUsageEnd("");
        setUsageAmount("");
        setCost("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (!property?.id) {
            setErrorMessage("No property selected.");
            return;
        }

        if (!selectedMeterId) {
            setErrorMessage("Please select a meter.");
            return;
        }

        if (!usageStart || !usageEnd || !usageAmount || !cost) {
            setErrorMessage("Please complete all required fields.");
            return;
        }

        if (usageEnd < usageStart) {
            setErrorMessage("Usage end date cannot be earlier than usage start date.");
            return;
        }

        const parsedUsageAmount = Number(usageAmount);
        const parsedCost = Number(cost);

        if (!Number.isFinite(parsedUsageAmount) || parsedUsageAmount <= 0) {
            setErrorMessage("Usage amount must be a valid number greater than 0.");
            return;
        }

        if (!Number.isFinite(parsedCost) || parsedCost < 0) {
            setErrorMessage("Cost must be a valid number.");
            return;
        }

        setLoading(true);

        const {
            data: { user },
            error: userError,
        } = await supabaseClient.auth.getUser();

        if (userError || !user) {
            setLoading(false);
            setErrorMessage("You must be signed in to save an energy record.");
            return;
        }

        const usagePayload = {
            id: crypto.randomUUID(),
            property_id: property.id,
            meter_id: selectedMeterId,
            usage_start: usageStart,
            usage_end: usageEnd,
            usage_date: usageEnd,
            usage_amount: parsedUsageAmount,
            usage_kwh: parsedUsageAmount,
            created_by: user.id,
        };

        const billingPayload = {
            id: crypto.randomUUID(),
            meter_id: selectedMeterId,
            billing_start: usageStart,
            billing_end: usageEnd,
            cost: parsedCost,
            usage_amount: parsedUsageAmount,
            created_by: user.id,
            is_voided: false,
            void_reason: null,
        };

        const { error: usageError } = await supabaseClient
            .from("energy_usage")
            .insert([usagePayload]);

        if (usageError) {
            setLoading(false);
            console.error("Error saving energy usage:", usageError);
            setErrorMessage(usageError.message || "Failed to save energy usage.");
            return;
        }

        const { error: billingError } = await supabaseClient
            .from("energy_billing")
            .insert([billingPayload]);

        setLoading(false);

        if (billingError) {
            console.error("Error saving energy billing:", billingError);
            setErrorMessage(
                billingError.message || "Energy usage saved, but billing failed to save.",
            );
            return;
        }

        setSuccessMessage("Energy usage and billing saved successfully.");
        resetForm();
    };

    if (!property) {
        return (
            <Typography color="text.secondary">
                Select a property first.
            </Typography>
        );
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography sx={{ mb: 2 }}>
                Logging energy for{" "}
                <strong>{property.street || `Property ${property.id}`}</strong>
            </Typography>

            {successMessage ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                    {successMessage}
                </Alert>
            ) : null}

            {errorMessage ? (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {errorMessage}
                </Alert>
            ) : null}

            <FormControl fullWidth margin="normal" required>
                <InputLabel id="meter-select-label">Meter</InputLabel>
                <Select
                    labelId="meter-select-label"
                    value={selectedMeterId}
                    label="Meter"
                    onChange={(e) => setSelectedMeterId(e.target.value)}
                    disabled={metersLoading || meters.length === 0}
                >
                    {meters.map((meter) => {
                        const energyType = getEnergyType(meter);

                        return (
                            <MenuItem key={meter.id} value={meter.id}>
                                {meter.meter_number || "Unnamed Meter"}
                                {energyType?.name ? ` - ${energyType.name}` : ""}
                                {energyType?.unit ? ` (${energyType.unit})` : ""}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>

            {!metersLoading && meters.length === 0 ? (
                <Typography color="text.secondary" sx={{ mt: 1, mb: 1 }}>
                    No active meters found for this property.
                </Typography>
            ) : null}

            {selectedMeter ? (
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                    Energy type: {selectedEnergyType?.name || "Unknown"}
                </Typography>
            ) : null}

            <TextField
                fullWidth
                label="Usage Start"
                type="date"
                value={usageStart}
                onChange={(e) => setUsageStart(e.target.value)}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
            />

            <TextField
                fullWidth
                label="Usage End"
                type="date"
                value={usageEnd}
                onChange={(e) => setUsageEnd(e.target.value)}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
            />

            <TextField
                fullWidth
                label={
                    selectedEnergyType?.unit
                        ? `Usage Amount (${selectedEnergyType.unit})`
                        : "Usage Amount"
                }
                type="number"
                value={usageAmount}
                onChange={(e) => setUsageAmount(e.target.value)}
                margin="normal"
                inputProps={{ step: "any", min: "0" }}
                required
            />

            <TextField
                fullWidth
                label="Cost"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                margin="normal"
                inputProps={{ step: "0.01", min: "0" }}
                required
            />

            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, textTransform: "none" }}
                disabled={loading || metersLoading || meters.length === 0}
            >
                {loading ? "Saving..." : "Save Energy Record"}
            </Button>
        </Box>
    );
}