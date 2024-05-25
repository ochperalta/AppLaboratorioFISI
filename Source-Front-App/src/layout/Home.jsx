import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import './layout.css'
import { Link, Outlet } from 'react-router-dom';

export function Home() {
  const [sidebar, setSidebar] = useState(null)
  const [statebtnSidebar, setstatebtnSidebar] = useState(false);

  useEffect(() => {
    setSidebar(document.querySelector('#sidebar'));
    if (window.innerWidth < 600) {
      document.querySelector('#sidebar').classList.add('active')
    }
    const handleResize = () => {
      setstatebtnSidebar(true);
      console.log(window.innerWidth)
      if (window.innerWidth < 600){
        document.querySelector('#sidebar').classList.add('active')        
      }
      // if (window.innerWidth >= 600 && !statebtnSidebar){
      //   document.querySelector('#sidebar').classList.remove('active')        
      // }
      //else if(!statebtnSidebar){
      //   document.querySelector('#sidebar').classList.remove('active')        
      // }
      //console.log(windowWidth)
    };

    // Agregar un event listener para el evento 'resize'
    window.addEventListener('resize', handleResize);

    // Limpieza: remover el event listener cuando el componente se desmonte
    return () => {
      //window.removeEventListener('resize', handleResize);
    };
  }, [statebtnSidebar])

  function handleToggle() {
    setstatebtnSidebar(!statebtnSidebar)
    sidebar.classList.toggle('active')
  }

  function handleHover() {
    sidebar.classList.remove('active')
    //sidebar.classList.add('hover-span')
  }

  function handleHoverLeave() {
    if (statebtnSidebar)
      sidebar.classList.add('active')
    //sidebar.classList.remove('hover-span')

  }


  return (
    <>
      <div className="l-container">
        <header className="l-header">
          <Navbar></Navbar>
        </header>
        <aside id="sidebar" className="l-sidebar">
          <header>
            <div className="sidebar-title">FISI</div>
            <i id="btnSidebar" className='bx bx-menu sidebar-icon-header' onClick={handleToggle}></i>
          </header>
          <section className="sidebar-content" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
            <Link className="link-option" to="laboratorios">
              <button className="sidebar-option">
                <i className='bx bx-server' ></i><span>Laboratorios</span>
              </button>
            </Link>
            <Link className="link-option" to="mobiliario">
              <button className="sidebar-option">
                <i className='bx bx-desktop'></i><span>Mobiliario</span>
              </button>
            </Link>
            <Link className="link-option" to="aplicaciones">
              <button className="sidebar-option">
                <i className='bx bxs-pyramid'></i><span>Aplicaciones</span>
              </button>
            </Link>
            <Link className="link-option" to="soporte">
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
            <p className="text-center w-full text-slate-400">© 2024 - FISI</p>
          </section>

        </footer>
      </div>
    </>
  );
}
