import SideBar from './SideBar';
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  const handleHide = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={handleHide} />
        content
      </div>
    </div>
  );
}

export default Admin;
