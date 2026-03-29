"use client";

import { Paper, Stack, Typography } from "@mui/material";

export interface GraphPoint {
    month: string;
    electric: number;
    gas: number;
}

interface GraphProps {
    data: GraphPoint[];
}

export default function Graph({ data }: GraphProps) {
    const maxValue =
        data.length > 0
            ? Math.max(...data.flatMap((item) => [item.electric, item.gas]), 1)
            : 1;

    return (
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
            <Typography sx={{ mb: 2 }}>
                Stack chart to display monthly gas/kWh usage
            </Typography>

            <Stack direction="row" spacing={1} alignItems="end" sx={{ height: 140 }}>
                {data.map((item) => {
                    const electricHeight = (item.electric / maxValue) * 100;
                    const gasHeight = (item.gas / maxValue) * 100;

                    return (
                        <Stack key={item.month} spacing={1} alignItems="center">
                            <Stack direction="row" spacing={0.5} alignItems="end" sx={{ height: 110 }}>
                                <BoxLike height={electricHeight} />
                                <BoxLike height={gasHeight} />
                            </Stack>
                            <Typography variant="caption">{item.month}</Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Paper>
    );
}

function BoxLike({ height }: { height: number }) {
    return (
        <div
            style={{
                width: 16,
                height: `${height}px`,
                borderRadius: 4,
                background: "#4f8cff",
            }}
        />
    );
}