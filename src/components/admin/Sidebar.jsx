import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Headphones,
  ShoppingBag,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Sidebar menu items data to map over
  const menuItems = [
    { icon: <LayoutDashboard />, text: 'Dashboard', active: true },
    { icon: <Package />, text: 'Products' },
    { icon: <Headphones />, text: 'Categories' },
    { icon: <ShoppingBag />, text: 'Orders' },
    { icon: <Settings />, text: 'Settings' },
  ];

  return (
    <div
      className={`bg-white shadow-md h-full flex flex-col transition-width duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header with title and toggle */}
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <h1 className="text-xl font-semibold tracking-wide">Admin Panel</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="text-gray-600 hover:bg-gray-200 rounded p-1 transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map(({ icon, text, active }, idx) => (
          <SidebarItem
            key={idx}
            icon={icon}
            text={text}
            collapsed={collapsed}
            active={active}
          />
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <button
          onClick={onLogout}
          className={`flex items-center justify-center w-full space-x-2 rounded-lg p-3 text-red-600 hover:bg-red-100 transition ${
            collapsed ? 'justify-center' : 'justify-start'
          }`}
          aria-label="Logout"
        >
          <LogOut size={20} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, collapsed, active = false }) => {
  return (
    <div
      className={`flex items-center cursor-pointer p-3 rounded-lg mb-1 transition-colors duration-200
      ${active ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}
      ${collapsed ? 'justify-center' : ''}
      `}
      title={collapsed ? text : ''}
      tabIndex={0} // For keyboard navigation
      role="button"
    >
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      {!collapsed && <span className="ml-4">{text}</span>}
    </div>
  );
};

export default Sidebar;
