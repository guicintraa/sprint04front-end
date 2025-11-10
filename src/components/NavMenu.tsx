import { NavLink, Link, useLocation } from "react-router-dom";

export default function NavMenu() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md font-semibold transition-colors duration-200
     ${location.pathname === path ? "bg-blue-700 text-white" : "text-white hover:bg-blue-500"}`;

  return (
    <nav className="bg-blue-600">
      <ul className="container mx-auto flex gap-3 p-3">
        <li><Link to="/" className={linkClasses("/")}>Início</Link></li>
        <li><NavLink to="/lembretes" className={linkClasses("/lembretes")}>Lembretes</NavLink></li>
        <li><Link to="/integrantes" className={linkClasses("/integrantes")}>Integrantes</Link></li>
        <li><Link to="/faq" className={linkClasses("/faq")}>FAQ</Link></li>
        <li><Link to="/contato" className={linkClasses("/contato")}>Contato</Link></li>
      </ul>
    </nav>
  );
}
