import React from "react";
import './Sidebar.css';
import SidebarForm from "./SidebarForm";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
    return (
        <section className="sidebar_section">
            <SidebarHeader />
            <SidebarForm />
        </section>
    )
};

export default Sidebar;