import { Outlet } from 'react-router-dom';
import { Galery, Navbar } from '../components';

export const MainLayout = () => {
  return (
    <div className='container'>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <Outlet />
        <Galery />
      </main>
    </div>
  )
}
