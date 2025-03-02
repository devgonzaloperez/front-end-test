import { useParams } from "react-router";

export const ProductDetailsPage = () => {

    const { id } = useParams();

    return (
        <div>Product Page {id}</div>
    )

};
