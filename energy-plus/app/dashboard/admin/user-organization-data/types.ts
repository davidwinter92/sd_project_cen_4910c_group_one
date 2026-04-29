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

export type UserOrganizationProperty = {
    id: string;
    organization_id: string;
    jurisdiction_id: string | null;
    jurisdiction_name?: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    zip: number | null;
    sq_ft: number | null;
    property_type: string | null;
    created_at: string | null;
};

export type UserOrganization = {
    id: string;
    name: string;
    slug?: string | null;
    createdBy?: string | null;
    createdAt?: string | null;
    properties: UserOrganizationProperty[];
};

export type UserOrganizationDataResponse = {
    user: {
        id: string;
        name: string;
    };
    organizations: UserOrganization[];
};

export type Notice = {
    type: "success" | "error";
    message: string;
} | null;

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
    properties: UserOrganizationProperty[];
    selectedPropertyId: string | null;
    onSelectProperty: (propertyId: string | null) => void;
    isLoading?: boolean;
    emptyMessage?: string;
};

export type ViewPropertyButtonProps = {
    selectedProperty: UserOrganizationProperty | null;
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
    selectedProperty: UserOrganizationProperty | null;
    detailOpen: boolean;
    onCloseDetail: () => void;
    onSelectUser: (userId: string | null) => void;
};
