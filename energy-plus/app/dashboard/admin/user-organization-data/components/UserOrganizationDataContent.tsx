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
    OrganizationProperty,
} from "../types";
import OrganizationPropertiesList from "./OrganizationPropertiesList";
import OrganizationSearch from "./OrganizationSearch";
import UserDisplay from "./UserDisplay";
import ViewPropertyButton from "./ViewPropertyButton";

function getPropertiesEmptyMessage(
    selectedOrganizationId: string | null,
    properties: OrganizationProperty[],
) {
    if (!selectedOrganizationId) {
        return "Select an organization to view its properties.";
    }

    if (!properties.length) {
        return "This organization has no properties to display.";
    }

    return undefined;
}

function formatDetailValue(property: OrganizationProperty) {
    const { value, type } = property;

    if (value === null || value === "") {
        return "No value";
    }

    if (type === "date" && typeof value === "string") {
        const parsedDate = new Date(value);

        if (!Number.isNaN(parsedDate.getTime())) {
            return parsedDate.toLocaleString();
        }
    }

    if (type === "json" && typeof value === "string") {
        try {
            return JSON.stringify(JSON.parse(value), null, 2);
        } catch {
            return value;
        }
    }

    if (typeof value === "boolean") {
        return value ? "True" : "False";
    }

    return String(value);
}

function getDetailValueTitle(label: string) {
    return label.replace(/^Linked\s+/i, "").trim();
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
    onEditOrganization,
    onDeleteOrganization,
    organizationActionsDisabled = false,
    deleteDisabled = false,
    deleteHelperText,
}: UserOrganizationDataContentProps) {
    const selectedOrganization = organizations.find(
        (organization) => organization.id === selectedOrganizationId,
    );

    const properties = selectedOrganization?.properties ?? [];
    const propertiesEmptyMessage = loading
        ? undefined
        : getPropertiesEmptyMessage(selectedOrganizationId, properties);
    const showPropertyAction = Boolean(selectedPropertyId);
    const showOrganizationActions = Boolean(selectedOrganizationId);

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
                    View all user organizations and inspect organization field values for data validation inquiries.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
                    <Chip label={`${users.length} users`} size="small" variant="outlined" />
                    <Chip label={`${organizations.length} organizations`} size="small" variant="outlined" />
                    <Chip label={`${properties.length} properties`} size="small" variant="outlined" />
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

                {showOrganizationActions ? (
                    <Grid size={{ xs: 12 }}>
                        <Stack
                            direction="column"
                            spacing={1.5}
                            alignItems="flex-start"
                        >
                            <Button
                                variant="outlined"
                                onClick={onEditOrganization}
                                disabled={organizationActionsDisabled || !selectedOrganizationId}
                            >
                                Edit Organization Name
                            </Button>
                        </Stack>
                    </Grid>
                ) : null}

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
                            selectedPropertyId={selectedPropertyId}
                            onClick={onViewProperty}
                            disabled={!selectedPropertyId}
                        />
                    </Grid>
                ) : null}

                {showOrganizationActions ? (
                    <Grid size={{ xs: 12 }}>
                        <Stack spacing={1.5} alignItems="flex-start">
                            {deleteHelperText ? (
                                <Typography variant="body2" color="text.secondary">
                                    {deleteHelperText}
                                </Typography>
                            ) : null}
                            <Button
                                color="error"
                                variant="outlined"
                                onClick={onDeleteOrganization}
                                disabled={
                                    organizationActionsDisabled
                                    || !selectedOrganizationId
                                    || deleteDisabled
                                }
                            >
                                Delete Selected Organization
                            </Button>
                        </Stack>
                    </Grid>
                ) : null}
            </Grid>

            <Dialog open={detailOpen} onClose={onCloseDetail} fullWidth maxWidth="sm">
                <DialogTitle>{selectedProperty?.label ?? "Property details"}</DialogTitle>
                <DialogContent dividers>
                    {selectedProperty ? (
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="overline" color="text.secondary">
                                    {getDetailValueTitle(selectedProperty.label)}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}
                                >
                                    {formatDetailValue(selectedProperty)}
                                </Typography>
                            </Box>
                            {selectedProperty.description ? (
                                <Box>
                                    <Typography variant="overline" color="text.secondary">
                                        Description
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {selectedProperty.description}
                                    </Typography>
                                </Box>
                            ) : null}
                            {selectedProperty.updatedAt ? (
                                <Box>
                                    <Typography variant="overline" color="text.secondary">
                                        Created At
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {new Date(selectedProperty.updatedAt).toLocaleString()}
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
