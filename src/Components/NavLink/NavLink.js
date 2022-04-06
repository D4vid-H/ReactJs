export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkActive
      {...props}
      className={({ isActive }) => {
        return isActive ? "is-Active" : undefined;
      }}
      to={to}
    >
      {children}
    </NavLinkActive>
  );
};
