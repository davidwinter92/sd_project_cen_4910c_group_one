(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/energy-plus/app/dashboard/users/Users.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/x-data-grid/esm/DataGrid/DataGrid.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function toErrorMessage(err, fallback) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err)) {
        const apiMessage = err.response?.data?.error;
        return apiMessage || err.message || fallback;
    }
    if (err instanceof Error) {
        return err.message;
    }
    return fallback;
}
function UsersContent() {
    _s();
    const isMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const [users, setUsers] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [saving, setSaving] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [deletingId, setDeletingId] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [editingId, setEditingId] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [dialogOpen, setDialogOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [gridReady, setGridReady] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [notice, setNotice] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [email, setEmail] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [password, setPassword] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [username, setUsername] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [firstName, setFirstName] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [lastName, setLastName] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const isEditing = Boolean(editingId);
    __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "UsersContent.useEffect": ()=>{
            isMountedRef.current = true;
            setGridReady(true);
            return ({
                "UsersContent.useEffect": ()=>{
                    isMountedRef.current = false;
                }
            })["UsersContent.useEffect"];
        }
    }["UsersContent.useEffect"], []);
    const clearForm = ()=>{
        setEmail("");
        setPassword("");
        setUsername("");
        setFirstName("");
        setLastName("");
        setEditingId(null);
        setDialogOpen(false);
    };
    const loadUsers = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "UsersContent.useCallback[loadUsers]": async ()=>{
            if (isMountedRef.current) {
                setLoading(true);
            }
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/admin/users", {
                    headers: {
                        "Cache-Control": "no-cache"
                    }
                });
                if (isMountedRef.current) {
                    setUsers(response.data.users ?? []);
                }
            } catch (err) {
                if (isMountedRef.current) {
                    setNotice({
                        type: "error",
                        message: toErrorMessage(err, "Could not load users.")
                    });
                }
            } finally{
                if (isMountedRef.current) {
                    setLoading(false);
                }
            }
        }
    }["UsersContent.useCallback[loadUsers]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "UsersContent.useEffect": ()=>{
            loadUsers();
        }
    }["UsersContent.useEffect"], [
        loadUsers
    ]);
    const onSubmit = async (event)=>{
        event.preventDefault();
        if (!firstName.trim() || !lastName.trim() || !username.trim() || !email || !isEditing && !password) {
            setNotice({
                type: "error",
                message: "First name, last name, username, and email are required. Password is required only for new users."
            });
            return;
        }
        setSaving(true);
        try {
            const endpoint = "/api/admin/users";
            const method = isEditing ? "PUT" : "POST";
            const derivedName = `${firstName.trim()} ${lastName.trim()}`.trim();
            const body = isEditing ? {
                id: editingId,
                name: derivedName,
                username: username.trim(),
                first_name: firstName.trim(),
                last_name: lastName.trim(),
                email,
                ...password ? {
                    password
                } : {}
            } : {
                name: derivedName,
                username: username.trim(),
                first_name: firstName.trim(),
                last_name: lastName.trim(),
                email,
                password
            };
            if (method === "PUT") {
                await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(endpoint, body);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(endpoint, body);
            }
            if (!isMountedRef.current) return;
            clearForm();
            setNotice({
                type: "success",
                message: isEditing ? "User updated." : "User created."
            });
            await loadUsers();
        } catch (err) {
            if (isMountedRef.current) {
                setNotice({
                    type: "error",
                    message: toErrorMessage(err, "Could not save user.")
                });
            }
        } finally{
            if (isMountedRef.current) {
                setSaving(false);
            }
        }
    };
    const startEdit = (user)=>{
        setEditingId(user.id);
        setEmail(user.email || "");
        setPassword("");
        const [first = "", ...rest] = (user.name || "").split(" ");
        setUsername(user.username || "");
        setFirstName(user.first_name || first);
        setLastName(user.last_name || rest.join(" "));
        setDialogOpen(true);
    };
    const startCreate = ()=>{
        setEditingId(null);
        setEmail("");
        setPassword("");
        setUsername("");
        setFirstName("");
        setLastName("");
        setDialogOpen(true);
    };
    const onDialogClose = (_event, reason)=>{
        if (reason === "backdropClick") {
            return;
        }
        clearForm();
    };
    const onDelete = async (id)=>{
        setDeletingId(id);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/api/admin/users", {
                data: {
                    id
                }
            });
            if (editingId === id && isMountedRef.current) {
                clearForm();
            }
            if (!isMountedRef.current) return;
            setNotice({
                type: "success",
                message: "User deleted."
            });
            await loadUsers();
        } catch (err) {
            if (isMountedRef.current) {
                setNotice({
                    type: "error",
                    message: toErrorMessage(err, "Could not delete user.")
                });
            }
        } finally{
            if (isMountedRef.current) {
                setDeletingId(null);
            }
        }
    };
    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 160,
            valueGetter: (_, row)=>row.name || "N/A"
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1.2,
            minWidth: 220,
            valueGetter: (_, row)=>row.email || "N/A"
        },
        {
            field: "created_at",
            headerName: "Created",
            flex: 1,
            minWidth: 220,
            valueGetter: (_, row)=>row.created_at ? new Date(row.created_at).toLocaleString() : "N/A",
            sortable: false
        },
        {
            field: "last_sign_in_at",
            headerName: "Last Sign In",
            flex: 1,
            minWidth: 220,
            valueGetter: (_, row)=>row.last_sign_in_at ? new Date(row.last_sign_in_at).toLocaleString() : "Never",
            sortable: false
        },
        {
            field: "actions",
            headerName: "Actions",
            minWidth: 200,
            flex: 0.8,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            align: "right",
            headerAlign: "right",
            renderCell: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    direction: "row",
                    spacing: 1,
                    justifyContent: "flex-end",
                    sx: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "small",
                            onClick: ()=>startEdit(params.row),
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                            lineNumber: 299,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "small",
                            color: "error",
                            onClick: ()=>onDelete(params.row.id),
                            disabled: deletingId === params.row.id,
                            children: deletingId === params.row.id ? "Deleting..." : "Delete"
                        }, void 0, false, {
                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                            lineNumber: 302,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                    lineNumber: 293,
                    columnNumber: 17
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        spacing: 5,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "h3",
                sx: {
                    fontSize: {
                        xs: "2.2rem",
                        md: "2.8rem"
                    },
                    fontWeight: 700
                },
                children: "Admin User Management"
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "outlined",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        p: 4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            direction: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            sx: {
                                mb: 2.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "h5",
                                    sx: {
                                        fontSize: {
                                            xs: "1.6rem",
                                            md: "1.9rem"
                                        }
                                    },
                                    children: "All Users"
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                    lineNumber: 332,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    direction: "row",
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "contained",
                                            size: "large",
                                            onClick: startCreate,
                                            sx: {
                                                fontSize: "1rem"
                                            },
                                            children: "Create User"
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 339,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "text",
                                            size: "large",
                                            onClick: loadUsers,
                                            sx: {
                                                fontSize: "1rem"
                                            },
                                            children: "Refresh"
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 347,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                    lineNumber: 338,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                            lineNumber: 326,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                width: "100%"
                            },
                            children: gridReady ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataGrid"], {
                                autoHeight: true,
                                rows: users,
                                columns: columns,
                                loading: loading,
                                getRowId: (row)=>row.id,
                                disableRowSelectionOnClick: true,
                                rowHeight: 72,
                                columnHeaderHeight: 72,
                                pageSizeOptions: [
                                    5,
                                    10,
                                    25
                                ],
                                initialState: {
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 10,
                                            page: 0
                                        }
                                    }
                                },
                                sx: {
                                    fontSize: 17,
                                    "& .MuiDataGrid-columnHeaders": {
                                        fontSize: 18,
                                        fontWeight: 700
                                    },
                                    "& .MuiDataGrid-columnHeader": {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%"
                                    },
                                    "& .MuiDataGrid-columnHeaderTitleContainerContent": {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    "& .MuiDataGrid-cell": {
                                        py: 1.2,
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    "& .MuiButton-root": {
                                        fontSize: "0.95rem"
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                lineNumber: 360,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    height: 280
                                }
                            }, void 0, false, {
                                fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                lineNumber: 405,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                            lineNumber: 358,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                    lineNumber: 325,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                lineNumber: 324,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: dialogOpen,
                onClose: onDialogClose,
                fullWidth: true,
                maxWidth: "md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    elevation: 0,
                    sx: {
                        p: 2,
                        minHeight: 520
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                display: "flex",
                                justifyContent: "flex-end",
                                px: 1,
                                pt: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "aria-label": "Close user form",
                                onClick: clearForm,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                    lineNumber: 417,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                lineNumber: 416,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                            lineNumber: 413,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            component: "form",
                            onSubmit: onSubmit,
                            autoComplete: "off",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "h5",
                                            sx: {
                                                mb: 3,
                                                fontSize: {
                                                    xs: "1.6rem",
                                                    md: "1.9rem"
                                                }
                                            },
                                            children: isEditing ? "Edit User" : "Create User"
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 422,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "fake-username",
                                            autoComplete: "username",
                                            style: {
                                                display: "none"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 428,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            name: "fake-password",
                                            autoComplete: "new-password",
                                            style: {
                                                display: "none"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 434,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            spacing: 3,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    label: "Username",
                                                    name: isEditing ? "username" : "create-user-username",
                                                    value: username,
                                                    onChange: (e)=>setUsername(e.target.value),
                                                    autoComplete: "off",
                                                    required: true,
                                                    fullWidth: true,
                                                    size: "medium",
                                                    sx: {
                                                        "& .MuiInputBase-input": {
                                                            fontSize: "1.2rem",
                                                            py: 1.8
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    direction: {
                                                        xs: "column",
                                                        sm: "row"
                                                    },
                                                    spacing: 2,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            label: "First Name",
                                                            name: isEditing ? "first_name" : "create-user-first-name",
                                                            value: firstName,
                                                            onChange: (e)=>setFirstName(e.target.value),
                                                            autoComplete: "off",
                                                            required: true,
                                                            fullWidth: true,
                                                            size: "medium",
                                                            sx: {
                                                                "& .MuiInputBase-input": {
                                                                    fontSize: "1.2rem",
                                                                    py: 1.8
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            label: "Last Name",
                                                            name: isEditing ? "last_name" : "create-user-last-name",
                                                            value: lastName,
                                                            onChange: (e)=>setLastName(e.target.value),
                                                            autoComplete: "off",
                                                            required: true,
                                                            fullWidth: true,
                                                            size: "medium",
                                                            sx: {
                                                                "& .MuiInputBase-input": {
                                                                    fontSize: "1.2rem",
                                                                    py: 1.8
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    label: "Email",
                                                    type: "email",
                                                    name: isEditing ? "email" : "create-user-email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    autoComplete: "off",
                                                    required: true,
                                                    fullWidth: true,
                                                    size: "medium",
                                                    sx: {
                                                        "& .MuiInputBase-input": {
                                                            fontSize: "1.2rem",
                                                            py: 1.8
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    label: isEditing ? "Password (leave blank to keep current)" : "Password",
                                                    type: "password",
                                                    name: isEditing ? "password" : "create-user-password",
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    autoComplete: "new-password",
                                                    required: !isEditing,
                                                    fullWidth: true,
                                                    size: "medium",
                                                    sx: {
                                                        "& .MuiInputBase-input": {
                                                            fontSize: "1.2rem",
                                                            py: 1.8
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 440,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                    lineNumber: 421,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        px: 3,
                                        pb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "outlined",
                                            size: "large",
                                            onClick: clearForm,
                                            sx: {
                                                px: 3,
                                                fontSize: "1rem"
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 517,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "submit",
                                            variant: "contained",
                                            size: "large",
                                            disabled: saving,
                                            sx: {
                                                px: 3,
                                                fontSize: "1rem"
                                            },
                                            children: saving ? "Saving..." : isEditing ? "Update User" : "Create User"
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                            lineNumber: 525,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                                    lineNumber: 516,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                            lineNumber: 420,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                    lineNumber: 412,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                lineNumber: 411,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: Boolean(notice),
                autoHideDuration: 4000,
                onClose: ()=>setNotice(null),
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    severity: notice?.type ?? "success",
                    onClose: ()=>setNotice(null),
                    variant: "filled",
                    children: notice?.message
                }, void 0, false, {
                    fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                    lineNumber: 549,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
                lineNumber: 543,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/users/Users.tsx",
        lineNumber: 316,
        columnNumber: 9
    }, this);
}
_s(UsersContent, "05kmxgFzKmoNAJrZJgOTPuqSc8M=");
_c = UsersContent;
var _c;
__turbopack_context__.k.register(_c, "UsersContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=energy-plus_app_dashboard_users_Users_tsx_5a11d1cf._.js.map