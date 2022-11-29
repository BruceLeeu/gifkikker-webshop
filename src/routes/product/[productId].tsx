import { Title, useParams } from "solid-start";
import Counter from "~/components/Counter";

export default function Product() {
    const params: {productId: string} = useParams();
  return (
    <main>
      <p>This is product with ID: {params.productId}</p>
    </main>
  );
}
