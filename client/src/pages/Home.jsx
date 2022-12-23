import React from 'react';
import '../styles/Home.css';
import {TodoContext} from "../TodoContext";
import Card from "../components/Card";
const Home =  () => {

    const { info, data } = React.useContext(TodoContext);


    return (
        <div className="container-main">
            <div className="container-cards">
                {
                    info.length === 0 ?
                        data.map(card => (
                            <Card
                                key={card.id}
                                id={card.id}
                                image={card.img1}
                                empresa={card.empresa}
                                modelo={card.modelo}
                                precio={card.precio}
                            />
                        )):
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
        </div>
    );
};

export default Home;