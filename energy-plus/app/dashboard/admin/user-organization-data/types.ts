export type OrganizationPropertyType =
    | "string"
    | "number"
    | "boolean"
    | "date"
    | "json"
    | "unknown";

export type OrganizationProperty = {
    id: string;
    key: string;
    label: string;
    value: string | number | boolean | null;
    description?: string;
    type?: OrganizationPropertyType;
    updatedAt?: string;
};

export type UserOrganization = {
    id: string;
    name: string;
    properties: OrganizationProperty[];
};

export type UserOrganizationDataResponse = {
    user: {
        id: string;
        name: string;
    };
    organizations: UserOrganization[];
};

export type AdminUserOption = {
    id: string;
    name: string;
    email: string;
};

export type UserDisplayProps = {
    users: AdminUserOption[];
    selectedUserId: string | null;
    userName: string;
    onSelectUser: (userId: string | null) => void;
    isLoading?: boolean;
};

export type OrganizationOption = {
    id: string;
    name: string;
};

export type OrganizationSearchProps = {
    organizations: OrganizationOption[];
    selectedOrganizationId: string | null;
    onSelectOrganization: (organizationId: string | null) => void;
    isLoading?: boolean;
};

export type OrganizationPropertiesListProps = {
    properties: OrganizationProperty[];
    selectedPropertyId: string | null;
    onSelectProperty: (propertyId: string | null) => void;
    isLoading?: boolean;
    emptyMessage?: string;
};

export type ViewPropertyButtonProps = {
    selectedPropertyId: string | null;
    onClick: () => void;
    disabled?: boolean;
};

export type UserOrganizationDataContentProps = {
    users: AdminUserOption[];
    selectedUserId: string | null;
    userName: string;
    organizations: UserOrganization[];
    loading: boolean;
    error: string | null;
    selectedOrganizationId: string | null;
    selectedPropertyId: string | null;
    onRetry: () => Promise<void>;
    onSelectOrganization: (organizationId: string | null) => void;
    onSelectProperty: (propertyId: string | null) => void;
    onViewProperty: () => void;
    selectedProperty: OrganizationProperty | null;
    detailOpen: boolean;
    onCloseDetail: () => void;
    onSelectUser: (userId: string | null) => void;
};
