import { useRoutes } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard/Dashboard.page';
import HistoryPage from '../pages/History/History.page';
import User from '../pages/Profile/User';

const RoutesComponent = () => {
    const routes = useRoutes([
        {path: '/', element:<DashboardPage />},
        {path: '/history', element:<HistoryPage />},
        {path: '/user', element:<User />},
    ])
    return routes; 
}

export default RoutesComponent; 