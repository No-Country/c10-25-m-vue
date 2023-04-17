export interface RouterLink {
  name: string;
  path: string;
  title: string;
}

export const routeLink: RouterLink[] = [
  {
    path: "/user/home",
    name: "home",
    title: "Inicio",
  },
  {
    path: "/user/profile",
    name: "profile",
    title: "Mi Perfil",
  },
  {
    path: "/user/my-pets",
    name: "pets",
    title: "Mis mascotas",
  },
  {
    path: "/user/my-turns",
    name: "turns",
    title: "Mis turnos",
  },
];
