import { LangProvider } from './context';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

const router = createHashRouter(AppRouter);

export const App = () => {
  return (
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  )
}