import React from 'react';
import Card from "../components/Card";
import axios from "axios";


import '../styles/Home.css';
const Home =  () => {
    const [info, setInfo] = React.useState([]);
    React.useEffect(() => {
       axios.get('http://localhost:3006/productos').then((response) =>  {
           setInfo(response.data)
       });

    }, [])


    return (
        <div className="container-cards">
            {
                info.map(card => (
                    <Card
                        key={card.id}
                        image={card.img1}
                        empresa={card.empresa}
                        modelo={card.modelo}
                        precio={card.precio}
                    />
                ))
            }
        </div>
    );
};

export default Home;