import { LangProvider } from './context';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

const router = createBrowserRouter(AppRouter);

export const App = () => {
  return (
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  )
}