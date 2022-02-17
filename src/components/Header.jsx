import Basket from "./Basket";

const Menu = (props) => (
  <ul>
    <li>Home</li>
    <li>Categories</li>
    <li>About us</li>
  </ul>
);

const Header = () => {
  return (
    <header className="header">
      <h1>My Shop</h1>
      <section className="header__menu">
        <Menu />
        <Basket />
      </section>
    </header>
  );
};

export default Header;
