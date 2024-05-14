import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const getColor = (status) => {
    switch (status) {
        case "success":
            return '#9ADE7B'
        case 'error':
            return "#EE4266"
        case "warning":
            return "#FDA403"
        case "info":
            return "#008DDA"

        default:
            return "#008DDA"
    }
}
const GetIcon = ({ status }) => {
    switch (status) {
        case "success":
            return <CheckCircleOutlineIcon style={{ fontSize: "85px", color: getColor(status) }} />
        case 'error':
            return <ErrorOutlineIcon style={{ fontSize: "85px", color: getColor(status) }} />
        case "warning":
            return <HelpOutlineIcon style={{ fontSize: "85px", color: getColor(status) }} />
        case "info":
            return <InfoOutlinedIcon style={{ fontSize: "85px", color: getColor(status) }} />

        default:
            return <InfoOutlinedIcon style={{ fontSize: "85px", color: getColor(status) }} />
    }
}

const ConfirmationModal = ({ onClose, type = 'info', text, onConfirm, onCancel, cancelText = "Cancel", confirmText = "Ok" }) => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "500px",
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "18px",
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            }}
        >
            <GetIcon status={type} />
            <p style={{ fontSize: "20px" }}>{text}</p>
            <div style={{ width: "100%", display: "flex", gap: "8px", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <button style={{ fontSize: "15px", backgroundColor: "#FFF", padding: "5px 15px", color: "#000", border: "1px #000 solid" }} onClick={onCancel}>
                    {cancelText}
                </button>
                <button style={{ fontSize: "15px", backgroundColor: getColor(type), padding: "5px 15px", color: "#FFF" }} onClick={onConfirm}>
                    {confirmText}
                </button>
            </div>
        </div>
    )
}

export default ConfirmationModal
