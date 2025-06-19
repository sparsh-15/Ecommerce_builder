import Sidebar from './Sidebar';

const AdminLayout = ({ children, onLogout }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;