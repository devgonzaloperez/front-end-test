import { useParams } from "react-router";

export const ProductPage = () => {

    const { id } = useParams();

    return (
        <div>Product Page {id}</div>
    )

};
