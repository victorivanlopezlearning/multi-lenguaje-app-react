import { MainLayout } from '../layouts/MainLayout';
import { ExplorePage, HomePage, ProfilePage } from '../pages';


export const AppRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'explore',
        element: <ExplorePage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      }
    ],
  },
]
