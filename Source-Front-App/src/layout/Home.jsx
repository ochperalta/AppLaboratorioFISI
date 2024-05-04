import Navbar from "./Navbar.jsx";
import './layout.css'
import { Link, Outlet } from 'react-router-dom';

export function Home() {

  return (
    <>
      <div className="l-container">
        <header className="l-header">
          <Navbar></Navbar>
        </header>
        <aside className="l-sidebar">
          <header>
            <div className="sidebar-title">FISI</div>
            <i className='bx bx-menu sidebar-icon-header'></i>
          </header>
          <section className="sidebar-content">
            <Link to="laboratorios">
              <button className="sidebar-option">
              <i className='bx bx-server' ></i><span>Laboratorios</span>
              </button>
            </Link>
            <Link to="mobiliario">
              <button className="sidebar-option">
                <i className='bx bx-desktop'></i><span>Mobiliario</span>
              </button>
            </Link>
            <Link to="aplicaciones">
              <button className="sidebar-option">
              <i className='bx bxs-pyramid'></i><span>Aplicaciones</span>
              </button>
            </Link>
            <Link to="soporte">
              <button className="sidebar-option">
              <i className='bx bx-support' ></i><span>Soporte</span>
              </button>
            </Link>
          </section>
        </aside>
        <main className="l-main">
          <Outlet />
        </main>
        <footer className="l-footer">
          <section className="flex items-center h-full">
            <p className="text-center w-full text-slate-400">®2024</p>
          </section>
        
        </footer>
      </div>
    </>
  );
}
