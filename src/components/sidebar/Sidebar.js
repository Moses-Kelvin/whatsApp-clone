import React from "react";
import Rooms from "./Rooms/Rooms";
import './Sidebar.css';
import SidebarForm from "./SidebarForm";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
    return (
        <section className="sidebar_section">
            <SidebarHeader />
            <SidebarForm />
            <Rooms />
        </section>
    )
};

export default Sidebar;