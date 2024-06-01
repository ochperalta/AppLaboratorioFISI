import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { UseAuth } from "../context/AuthContext.jsx";
import { useLocation } from "react-router-dom";
import { capitalize } from "../app/utils.js";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { logout, user } = UseAuth();
  const { pathname } = useLocation();
  const [pathValue, setPathValue] = useState('')

  console.log(user);

  const convertPath = (pathname) => {
    let list = pathname.split('/')
    list = Array.from(list).shift()
    Array.from(list).forEach(element => {
      element = capitalize(element)
    });
    setPathValue(Array.from(list).join('/'))
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    let list = pathname.split('/')
    list.shift();
    for (let index = 0; index < list.length; index++) {
      list[index] = capitalize(list[index]);
      list[index] = decodeURIComponent(list[index]);
    }
    let path = list.join(' / ')
    setPathValue(path);
  }, [pathname]);

  return (
    <nav className="flex items-center h-full">
      <section className="basis-10/12 text-xl px-6">Plataforma de Gestión de Logística - {pathValue}</section>
      <section className="basis-2/12 flex justify-end px-6">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="O"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Registrado como</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
            <DropdownItem key="configurations">Configuración</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>
    </nav>
  )
}
