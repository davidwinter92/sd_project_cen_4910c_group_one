"use client";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

export interface EnergyUsageRow {
    id: string;
    status: string;
    energyScore: number;
    electric: number;
    gas: number;
    cost: number;
    billingCycle: string;
}

interface EnergyUsageTableProps {
    rows: EnergyUsageRow[];
}

export default function EnergyUsageTable({ rows }: EnergyUsageTableProps) {
    return (
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
            <Typography sx={{ mb: 2, fontWeight: 700 }}>Historical Data:</Typography>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Energy Score Status</TableCell>
                        <TableCell>Energy Score</TableCell>
                        <TableCell>Electric</TableCell>
                        <TableCell>Gas</TableCell>
                        <TableCell>Cost</TableCell>
                        <TableCell>Billing Cycle for Month/Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.energyScore}</TableCell>
                            <TableCell>{row.electric}</TableCell>
                            <TableCell>{row.gas}</TableCell>
                            <TableCell>{row.cost}</TableCell>
                            <TableCell>{row.billingCycle}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}