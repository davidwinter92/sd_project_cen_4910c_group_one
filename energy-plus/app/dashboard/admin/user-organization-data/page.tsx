"use client";

import * as React from "react";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Snackbar,
    Typography,
} from "@mui/material";

import EditOrganizationDialog from "@/app/dashboard/organizations/components/EditOrganizationDialog";
import UserOrganizationDataContent from "./components/UserOrganizationDataContent";
import {
    AdminUserOption,
    Notice,
    OrganizationProperty,
    UserOrganization,
    UserOrganizationDataResponse,
} from "./types";

export default function UserOrganizationDataPage() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const routeUserId = searchParams.get("userId");

    const [data, setData] = React.useState<UserOrganizationDataResponse | null>(null);
    const [users, setUsers] = React.useState<AdminUserOption[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [usersLoading, setUsersLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    const [detailOpen, setDetailOpen] = React.useState(false);
    const [notice, setNotice] = React.useState<Notice>(null);
    const [selectedUserId, setSelectedUserId] = React.useState<string | null>(routeUserId);
    const [selectedOrganizationId, setSelectedOrganizationId] = React.useState<string | null>(null);
    const [selectedPropertyId, setSelectedPropertyId] = React.useState<string | null>(null);
    const [editOpen, setEditOpen] = React.useState(false);
    const [editLoading, setEditLoading] = React.useState(false);
    const [editOrganizationName, setEditOrganizationName] = React.useState("");
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [deleteLoading, setDeleteLoading] = React.useState(false);
    const hasAutoSelectedInitialUser = React.useRef(false);
    const shouldAutoSelectOrganization = React.useRef(Boolean(routeUserId));

    React.useEffect(() => {
        setSelectedUserId(routeUserId);
    }, [routeUserId]);

    const resetSelection = React.useCallback(() => {
        setSelectedOrganizationId(null);
        setSelectedPropertyId(null);
        setDetailOpen(false);
    }, []);

    const handleSelectOrganization = React.useCallback((organizationId: string | null) => {
        setSelectedOrganizationId(organizationId);
        setSelectedPropertyId(null);
        setDetailOpen(false);

        if (!organizationId) {
            shouldAutoSelectOrganization.current = false;
        }
    }, []);

    const handleSelectProperty = React.useCallback((propertyId: string | null) => {
        setSelectedPropertyId(propertyId);
    }, []);

    const handleSelectUser = React.useCallback((userId: string | null) => {
        setSelectedUserId(userId);
        resetSelection();
        shouldAutoSelectOrganization.current = Boolean(userId);

        const nextParams = new URLSearchParams(searchParams.toString());

        if (userId) {
            nextParams.set("userId", userId);
        } else {
            nextParams.delete("userId");
        }

        const nextQuery = nextParams.toString();
        router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname);
    }, [pathname, resetSelection, router, searchParams]);

    React.useEffect(() => {
        const loadUsers = async () => {
            setUsersLoading(true);

            try {
                const response = await axios.get<{ users?: Array<{ id: string; name?: string; email?: string }> }>(
                    "/api/admin/users",
                    { headers: { "Cache-Control": "no-cache" } },
                );

                const nextUsers = (response.data.users ?? []).map((user) => ({
                    id: user.id,
                    name: user.name?.trim() || user.email?.trim() || "Unknown user",
                    email: user.email ?? "",
                }));

                setUsers(nextUsers);

                if (
                    !routeUserId
                    && !selectedUserId
                    && nextUsers.length
                    && !hasAutoSelectedInitialUser.current
                ) {
                    hasAutoSelectedInitialUser.current = true;
                    handleSelectUser(nextUsers[0].id);
                }
            } catch (requestError) {
                const message = axios.isAxiosError(requestError)
                    ? (requestError.response?.data as { error?: string } | undefined)?.error
                        || requestError.message
                    : requestError instanceof Error
                        ? requestError.message
                        : "Unable to load users.";

                setError(message || "Unable to load users.");
                setUsers([]);
            } finally {
                setUsersLoading(false);
            }
        };

        void loadUsers();
    }, [handleSelectUser, routeUserId, selectedUserId]);

    const loadData = React.useCallback(async () => {
        if (!selectedUserId) {
            setData(null);
            setLoading(false);
            resetSelection();
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get<UserOrganizationDataResponse>(
                `/api/admin/users/${selectedUserId}/organization-data`,
                { headers: { "Cache-Control": "no-cache" } },
            );

            setData(response.data);
        } catch (requestError) {
            const message = axios.isAxiosError(requestError)
                ? (requestError.response?.data as { error?: string } | undefined)?.error
                    || requestError.message
                : requestError instanceof Error
                    ? requestError.message
                    : "Unable to load user organization data.";

            setData(null);
            setError(message || "Unable to load user organization data.");
            resetSelection();
        } finally {
            setLoading(false);
        }
    }, [resetSelection, selectedUserId]);

    React.useEffect(() => {
        void loadData();
    }, [loadData]);

    const organizations = React.useMemo(
        () => data?.organizations ?? [],
        [data],
    );

    React.useEffect(() => {
        if (!organizations.length) {
            resetSelection();
            return;
        }

        if (!selectedOrganizationId && shouldAutoSelectOrganization.current) {
            const nextOrganization = organizations[0];

            setSelectedOrganizationId(nextOrganization.id);
            setSelectedPropertyId(null);
            setDetailOpen(false);
            shouldAutoSelectOrganization.current = false;
            return;
        }

        if (
            selectedOrganizationId
            && !organizations.some((organization) => organization.id === selectedOrganizationId)
        ) {
            resetSelection();
        }
    }, [organizations, resetSelection, selectedOrganizationId]);

    const selectedOrganization = React.useMemo<UserOrganization | null>(
        () =>
            organizations.find((organization) => organization.id === selectedOrganizationId) ?? null,
        [organizations, selectedOrganizationId],
    );
    const selectedOrganizationPropertyCount = selectedOrganization?.properties.length ?? 0;

    const selectedProperty = React.useMemo<OrganizationProperty | null>(
        () =>
            selectedOrganization?.properties.find((property) => property.id === selectedPropertyId)
            ?? null,
        [selectedOrganization, selectedPropertyId],
    );

    const handleViewProperty = React.useCallback(() => {
        if (!selectedPropertyId) {
            return;
        }

        setDetailOpen(true);
    }, [selectedPropertyId]);

    const handleCloseDetail = React.useCallback(() => {
        setDetailOpen(false);
    }, []);

    const handleOpenEditOrganization = React.useCallback(() => {
        if (!selectedOrganization) {
            setNotice({ type: "error", message: "Select an organization to edit." });
            return;
        }

        setEditOrganizationName(selectedOrganization.name);
        setEditOpen(true);
    }, [selectedOrganization]);

    const handleEditOrganization = React.useCallback(async () => {
        const name = editOrganizationName.trim();

        if (!selectedOrganization) {
            setNotice({ type: "error", message: "Select an organization to edit." });
            return;
        }

        if (!name) {
            setNotice({ type: "error", message: "Organization name is required." });
            return;
        }

        if (
            organizations.some(
                (organization) =>
                    organization.id !== selectedOrganization.id
                    && organization.name.trim().toLowerCase() === name.toLowerCase(),
            )
        ) {
            setNotice({ type: "error", message: "An organization with that name already exists for this user." });
            return;
        }

        setEditLoading(true);

        try {
            await axios.patch("/api/organizations", {
                organizationId: selectedOrganization.id,
                name,
            });

            await loadData();
            setSelectedOrganizationId(selectedOrganization.id);
            setEditOpen(false);
            setNotice({ type: "success", message: "Organization updated successfully." });
        } catch (requestError) {
            const message = axios.isAxiosError(requestError)
                ? (requestError.response?.data as { error?: string } | undefined)?.error
                    || requestError.message
                : requestError instanceof Error
                    ? requestError.message
                    : "Failed to update organization.";

            setNotice({ type: "error", message });
        } finally {
            setEditLoading(false);
        }
    }, [editOrganizationName, loadData, organizations, selectedOrganization]);

    const handleDeleteOrganization = React.useCallback(async () => {
        if (!selectedOrganization) {
            setNotice({ type: "error", message: "Select an organization to delete." });
            return;
        }

        if (selectedOrganizationPropertyCount > 0) {
            setNotice({
                type: "error",
                message: "This organization cannot be deleted because it still has assigned properties.",
            });
            setDeleteOpen(false);
            return;
        }

        setDeleteLoading(true);

        try {
            await axios.delete("/api/organizations", {
                data: { organizationId: selectedOrganization.id },
            });

            await loadData();
            setSelectedOrganizationId(null);
            setSelectedPropertyId(null);
            setDetailOpen(false);
            shouldAutoSelectOrganization.current = true;
            setDeleteOpen(false);
            setNotice({ type: "success", message: "Organization deleted successfully." });
        } catch (requestError) {
            const message = axios.isAxiosError(requestError)
                ? (requestError.response?.data as { error?: string } | undefined)?.error
                    || requestError.message
                : requestError instanceof Error
                    ? requestError.message
                    : "Failed to delete organization.";

            setNotice({ type: "error", message });
        } finally {
            setDeleteLoading(false);
        }
    }, [loadData, selectedOrganization, selectedOrganizationPropertyCount]);

    return (
        <>
            <UserOrganizationDataContent
                users={users}
                selectedUserId={selectedUserId}
                userName={data?.user.name ?? "Unknown user"}
                organizations={organizations}
                loading={loading || usersLoading}
                error={error}
                selectedOrganizationId={selectedOrganizationId}
                selectedPropertyId={selectedPropertyId}
                onRetry={loadData}
                onSelectOrganization={handleSelectOrganization}
                onSelectProperty={handleSelectProperty}
                onViewProperty={handleViewProperty}
                selectedProperty={selectedProperty}
                detailOpen={detailOpen}
                onCloseDetail={handleCloseDetail}
                onSelectUser={handleSelectUser}
                onEditOrganization={handleOpenEditOrganization}
                onDeleteOrganization={() => setDeleteOpen(true)}
                organizationActionsDisabled={loading || usersLoading || !selectedUserId}
                deleteDisabled={selectedOrganizationPropertyCount > 0}
                deleteHelperText={
                    selectedOrganization && selectedOrganizationPropertyCount > 0
                        ? "Delete is only available when the organization has no assigned properties."
                        : undefined
                }
            />

            <EditOrganizationDialog
                open={editOpen}
                loading={editLoading}
                value={editOrganizationName}
                onClose={() => setEditOpen(false)}
                onChange={setEditOrganizationName}
                onSubmit={() => void handleEditOrganization()}
            />

            <Dialog open={deleteOpen} onClose={deleteLoading ? undefined : () => setDeleteOpen(false)}>
                <DialogTitle>Delete Organization?</DialogTitle>
                <DialogContent>
                    <Typography>
                        {selectedOrganizationPropertyCount > 0
                            ? "This organization cannot be deleted because it still has assigned properties."
                            : "This organization has no properties. Delete it permanently?"}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)} disabled={deleteLoading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => void handleDeleteOrganization()}
                        color="error"
                        variant="contained"
                        disabled={deleteLoading || selectedOrganizationPropertyCount > 0}
                    >
                        {deleteLoading ? "Deleting..." : "Delete Organization"}
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={Boolean(notice)}
                autoHideDuration={4000}
                onClose={() => setNotice(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert severity={notice?.type ?? "success"} onClose={() => setNotice(null)}>
                    {notice?.message}
                </Alert>
            </Snackbar>
        </>
    );
}
