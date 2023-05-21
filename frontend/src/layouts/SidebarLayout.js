import { Outlet } from 'react-router-dom';
import SideBar from '../components/Sidebar/Sidebar';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);
export default SidebarLayout;