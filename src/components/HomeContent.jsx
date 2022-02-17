import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const HomeContentHeader = () => {
  return (
    <header>
      <h2>Some Heading Here</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure labore
        eligendi voluptate debitis illum, ut eveniet esse animi deleniti tempore
        consequatur ea, fuga incidunt! Illum adipisci quia temporibus vero
        optio.
      </p>
    </header>
  );
};

const HomeContent = () => {
  return (
    <main className="home">
      <section className="home__content">
        <HomeContentHeader />
        <ProductList />
      </section>

      <Sidebar />
    </main>
  );
};

export default HomeContent;
