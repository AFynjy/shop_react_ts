import { useEffect, useState } from "react";
import { IProducts } from "../models";
import axios, { AxiosError } from "axios";

export function useProducts() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addProduct = (product: IProducts) => {
    setProducts(prevState => [...prevState, product])
  }

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProducts[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      setLoading(false);
      const error = e as AxiosError;
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { loading, products, error, addProduct};
}

export default useProducts
