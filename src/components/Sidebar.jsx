const Sidebar = (props) => {
  const totalPrice = props.selectedProducts.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <aside className="sidebar">
      <div>
        <h4>Tax Information</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          accusantium eos nisi voluptas ipsum corporis mollitia corrupti nihil
          ad minus. Dignissimos aliquid eos, facilis quis ex sequi
          exercitationem voluptatem adipisci.
        </p>
      </div>
      <button>Checkout ${totalPrice}</button>
    </aside>
  );
};

export default Sidebar;
