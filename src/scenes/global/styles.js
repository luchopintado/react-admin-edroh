const getDataGridStyles = (colors) => ({
    "& .MuiDataGrid-root": {
        border: "none"
    },
    "& .MuiDataGrid-cell": {
        borderBottom: "none"
    },
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.blueAccent[700]
    },
    "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[500]
    },
    "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blueAccent[700]
    },
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        color: `${colors.grey[100]}!important`
    },
    "& .MuiCheckBox-root": {
        color: `${colors.grey[400]}!important`
    },
    "& .Mui-checked": {
        color: "unset"
    },
    "& .name-column--cell": {
        color: `${colors.greenAccent[200]}!important`
    },
});

export default getDataGridStyles;
