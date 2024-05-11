import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { UseAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { logout, user } = UseAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <nav className="flex items-center h-full">
      <section className="basis-10/12 text-xl px-6">Plataforma de Gestión de Logística</section>
      <section className="basis-2/12 flex justify-end px-6">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://yt3.ggpht.com/ytc/AIdro_k63hxNaym7o7XHBFip_GlgbEYCtcaIVS7oac5PdTO1zFbyUM1FWY_IKcO0pMDJ756b2Q=s88-c-k-c0x00ffffff-no-rj"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Registrado como</p>
              <p className="font-semibold">oscar.chumpitaz2@unmsm.edu.pe</p>
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
