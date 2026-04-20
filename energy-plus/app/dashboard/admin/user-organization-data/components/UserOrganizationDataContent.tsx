"use client";

import {
    Alert,
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import {
    UserOrganizationDataContentProps,
    UserOrganizationProperty,
} from "../types";
import OrganizationPropertiesList from "./OrganizationPropertiesList";
import OrganizationSearch from "./OrganizationSearch";
import UserDisplay from "./UserDisplay";
import ViewPropertyButton from "./ViewPropertyButton";

function getPropertiesEmptyMessage(
    selectedOrganizationId: string | null,
    properties: UserOrganizationProperty[],
) {
    if (!selectedOrganizationId) {
        return "Select an organization to view its properties.";
    }

    if (!properties.length) {
        return "This organization has no properties to display.";
    }

    return undefined;
}

function formatPropertyLabel(property: UserOrganizationProperty) {
    if (property.street?.trim()) {
        return property.street.trim();
    }

    return "Unnamed Property";
}

function formatPropertyLocation(property: UserOrganizationProperty) {
    return [property.city, property.state, property.zip?.toString()]
        .filter((value): value is string => Boolean(value?.trim()))
        .join(", ");
}

function formatPropertyAddress(property: UserOrganizationProperty) {
    return [property.street, property.city, property.state, property.zip?.toString()]
        .filter((value): value is string => Boolean(value?.trim()))
        .join(", ");
}

function renderValue(value: string | number | null | undefined) {
    if (value === null || value === undefined || value === "") {
        return "—";
    }

    return String(value);
}

export default function UserOrganizationDataContent({
    users,
    selectedUserId,
    userName,
    organizations,
    loading,
    error,
    selectedOrganizationId,
    selectedPropertyId,
    onRetry,
    onSelectOrganization,
    onSelectProperty,
    onViewProperty,
    selectedProperty,
    detailOpen,
    onCloseDetail,
    onSelectUser,
}: UserOrganizationDataContentProps) {
    const selectedOrganization = organizations.find(
        (organization) => organization.id === selectedOrganizationId,
    );

    const properties = selectedOrganization?.properties ?? [];
    const propertiesEmptyMessage = loading
        ? undefined
        : getPropertiesEmptyMessage(selectedOrganizationId, properties);
    const showPropertyAction = Boolean(selectedPropertyId);

    return (
        <Stack spacing={3.5}>
            <Box>
                <Typography
                    variant="h3"
                    sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 700 }}
                >
                    User Organization Data
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                    View all user organizations and properties for data validation inquiries.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
                    <Chip label={`${users.length} Users`} size="small" variant="outlined" />
                    <Chip label={`${organizations.length} Organizations`} size="small" variant="outlined" />
                    <Chip label={`${properties.length} Properties`} size="small" variant="outlined" />
                </Stack>
            </Box>

            {error ? (
                <Alert
                    severity="error"
                    action={
                        <Button color="inherit" size="small" onClick={() => void onRetry()}>
                            Retry
                        </Button>
                    }
                >
                    {error}
                </Alert>
            ) : null}

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <UserDisplay
                        users={users}
                        selectedUserId={selectedUserId}
                        userName={userName}
                        onSelectUser={onSelectUser}
                        isLoading={loading}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <OrganizationSearch
                        organizations={organizations.map((organization) => ({
                            id: organization.id,
                            name: organization.name,
                        }))}
                        selectedOrganizationId={selectedOrganizationId}
                        onSelectOrganization={onSelectOrganization}
                        isLoading={loading}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: showPropertyAction ? 8.5 : 12 }}>
                    <OrganizationPropertiesList
                        properties={properties}
                        selectedPropertyId={selectedPropertyId}
                        onSelectProperty={onSelectProperty}
                        isLoading={loading}
                        emptyMessage={
                            !loading && !organizations.length
                                ? "No organizations found for this user."
                                : propertiesEmptyMessage
                        }
                    />
                </Grid>
                {showPropertyAction ? (
                    <Grid size={{ xs: 12, md: 3.5 }}>
                        <ViewPropertyButton
                            selectedProperty={selectedProperty}
                            onClick={onViewProperty}
                            disabled={!selectedPropertyId}
                        />
                    </Grid>
                ) : null}
            </Grid>

            <Dialog open={detailOpen} onClose={onCloseDetail} fullWidth maxWidth="sm">
                <DialogTitle>{selectedProperty ? formatPropertyLabel(selectedProperty) : "Property Details"}</DialogTitle>
                <DialogContent dividers>
                    {selectedProperty ? (
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    Jurisdiction
                                </Typography>
                                <Typography variant="body1">
                                    {selectedProperty.jurisdiction_name
                                        ? selectedProperty.jurisdiction_name
                                        : renderValue(selectedProperty.jurisdiction_id)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    Address
                                </Typography>
                                <Typography variant="body1">
                                    {renderValue(formatPropertyAddress(selectedProperty))}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    Property Type
                                </Typography>
                                <Typography variant="body1">
                                    {renderValue(selectedProperty.property_type)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    Square Feet
                                </Typography>
                                <Typography variant="body1">
                                    {renderValue(selectedProperty.sq_ft)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    ZIP
                                </Typography>
                                <Typography variant="body1">{renderValue(selectedProperty.zip)}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    Organization ID
                                </Typography>
                                <Typography variant="body1">{selectedProperty.organization_id}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    Location Details
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {renderValue(formatPropertyLocation(selectedProperty))}
                                </Typography>
                            </Box>
                            {selectedProperty.created_at ? (
                                <Box>
                                    <Typography variant="overline" color="text.secondary">
                                        Created At
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {new Date(selectedProperty.created_at).toLocaleString()}
                                    </Typography>
                                </Box>
                            ) : null}
                        </Stack>
                    ) : (
                        <Alert severity="error">Unable to load property details.</Alert>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDetail}>Close</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    );
}
