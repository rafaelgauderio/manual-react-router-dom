import { NavLink, useLocation } from "react-router-dom";

// passando como parametro para o NavLink o to original e mais o searchParams do link anterior

export default function QueryNavLink({ to, ...props }: any) {
    const location = useLocation();
    return (
        <NavLink to={to + location.search} {...props}></NavLink>
    );
}