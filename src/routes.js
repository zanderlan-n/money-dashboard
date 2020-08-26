import Dashboard from '@material-ui/icons/Dashboard';
import DashboardPage from 'views/Dashboard/Dashboard.js';
import Person from '@material-ui/icons/Person';
import Accounts from 'views/Account/Accounts.js';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
  },

  {
    path: '/accounts',
    name: 'Contas',
    icon: Person,
    component: Accounts,
    layout: '/admin',
  },
];

export default dashboardRoutes;
