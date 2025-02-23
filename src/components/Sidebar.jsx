import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import logo from "C:/Users/dhars/OneDrive/Desktop/draww/my-app/src/img/draw.png";

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const iconClasses = [
        "fa-solid fa-square",
        "fa-solid fa-circle",
        "fa-solid fa-star",
        "fa-solid fa-bookmark",
        "fa-solid fa-file",
        "fa-solid fa-heart",
        "fa-solid fa-folder",
        "fa-solid fa-xmark",
        "fa-solid fa-arrow-up-from-bracket",
        "fa-solid fa-rotate-right",
        "fa-solid fa-plus",
        "fa-solid fa-slash",
        "fa-solid fa-arrows-up-down",
        "fa-solid fa-map",
        "fa-solid fa-square-full",
        "fa-solid fa-minus",
        "fa-solid fa-shield",
        "fa-solid fa-right-left",
        "fa-solid fa-ellipsis",
        "fa-solid fa-arrow-trend-up",
        "fa-solid fa-star-of-life",
        "fa-solid fa-diamond",
        "fa-solid fa-check",
        "fa-solid fa-cube",
        "fa-solid fa-play"
    ];

    const shapeNames = [
        "Square",
        "Circle",
        "Star",
        "Bookmark",
        "File",
        "Heart",
        "Folder",
        "Close",
        "Upload",
        "Rotate",
        "Plus",
        "Slash",
        "Arrows",
        "Map",
        "Full Square",
        "Minus",
        "Shield",
        "Right Left",
        "Ellipsis",
        "Trend Up",
        "Star of Life",
        "Diamond",
        "Check",
        "Cube",
        "Play"
    ];

    const filteredIcons = shapeNames
        .map((name, index) => ({ name, iconClass: iconClasses[index] }))
        .filter(icon => icon.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div style={styles.sidebar}>
            <div style={styles.header}>
                <img src={logo} alt="Logo" style={styles.logo} />
                <h2 style={styles.title}>Draw ARCH</h2>
            </div>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search shapes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchBar}
            />

            {/* General Shapes Label */}
            <div
                style={{
                    ...styles.generalShapes,
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : styles.sidebar.backgroundColor,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowIcons(!showIcons)} // Toggle icon visibility
            >
                General Shapes
            </div>

            {/* Icons appear only when showIcons is true */}
            {showIcons && (
                <div style={styles.iconContainer}>
                    {filteredIcons.map((icon, index) => (
                        <div
                            key={index}
                            style={styles.iconWrapper}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                        >
                            <i className={icon.iconClass} style={styles.icon}></i>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Styles for the sidebar
const styles = {
    sidebar: {
        width: "250px",
        height: "100vh",
        backgroundColor: "#007bff",
        color: "white",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
        boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.2)",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
    },
    logo: {
        width: "40px",
        height: "40px",
        marginRight: "10px",
    },
    title: {
        margin: 0,
        fontSize: "24px",
    },
    searchBar: {
        width: "90%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
    },
    generalShapes: {
        display: "flex",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "bold",
        padding: "19px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        marginTop: "20px",
    },
    iconContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "2px",
        padding: "11px",
        backgroundColor: "#0056b3",
        borderRadius: "5px",
        marginTop: "10px",
    },
    icon: {
        fontSize: "23px",
        color: "white",
        transition: "transform 0.2s ease, color 0.2s ease",
    },
    iconWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        padding: "10px",
        borderRadius: "5px",
    },
    "icon:hover": {
        color: "#ffdd57",
        transform: "scale(1.2)",
    },
};

export default Sidebar;
