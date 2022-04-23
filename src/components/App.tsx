import './App.css';
import { SiteBlock } from './News/SiteBlock';
import { AuthPage } from './Auth/AuthPage';
import { SingIn } from './Auth/SIngIn/SingIn';
import { SingUp } from './Auth/SIngUp/SingUp';
import { PrivateRoute } from './Routers/Private/PrivateRoute';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ListNews } from './News/ListNews/ListNews';
import { CreateNew } from './News/CreateNew/CreateNew';
import { ReadNew } from './News/ReadNew/ReadNew';
import { EditPost } from './News/EditNew/EditNew';
import { Profile } from './Profile/Profile';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="">
					<Route path="" element={<Navigate to="/auth/login" />} />
					<Route path="/auth" element={<AuthPage />}>
						<Route path="login" element={<SingIn />} />
						<Route path="register" element={<SingUp />} />
					</Route>
					<Route path="/news" element={<PrivateRoute element={<SiteBlock />} />}>
						<Route path="" element={<ListNews />} />
						<Route path="create" element={<CreateNew />} />
						<Route path=":idNews" element={<ReadNew />} />
						<Route path=":idNews/edit" element={<EditPost />} />
					</Route>
					<Route path="/profile" element={<PrivateRoute element={<SiteBlock />} />}>
						<Route path="" element={<Profile />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
