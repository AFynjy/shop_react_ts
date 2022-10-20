import React, { useState } from "react";
import Products from "./components/Products";
import useProducts from "./hooks/products";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import { IProducts } from "./models";

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProducts) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loading />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Products product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button onClick={() => setModal(true)} className="fixed bottom-5 right-5 rounded-full bg-red-600 text-white text-2xl px-4 py-4">
        Add
      </button>
    </div>
  );
}

export default App;
