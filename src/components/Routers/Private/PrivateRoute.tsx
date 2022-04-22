import { Navigate, useLocation } from 'react-router-dom';
import { LocalStorageService } from '../../../services/storage/LocalStorage';
import { PrivateRouterProps } from './Types';

export const PrivateRoute = ({ element }: PrivateRouterProps) => {
	const location = useLocation();

	return LocalStorageService.get('user') ? element : <Navigate to="/auth/login" state={{ from: location }} />;
};
