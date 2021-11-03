import {  useParams } from "react-router-dom";


function Details() {

    // const showDetails = () => {

    //     <p>{value}</p>

    // }

    const { id } = useParams();
    return (

    <p>{id}</p>

    )
}

export default Details;