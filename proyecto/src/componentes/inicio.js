import React from 'react'
import styles from './css/inicio.css';




const  inicio = () => {
    return(
        <section id='inicio' className='inicio'>
            <div className='contenedorinicio'>
            <h2>inicio</h2> 
            <article className='Inicio1'>
            <h3>El árbitro de futbol Federico Puerta no ve muy lejos la "B" profesional.</h3> 
            <p>Federico es un arbitro que lleva incorporado en el colegio de arbitros de la AAA 8 años.
            En los ultimos años a destacado bastante y por eso el no se ve lejos de alcanzar la B profesional del futbol profesional colombiana. Su disciplina y constancia lo han llevado hasta donde esta ahora.
            </p>
                <figure>
                    <a href="#">
                    <img className="herramienta"  alt=""/>
                    </a>
                </figure>
            </article>

            <article className='inicio2'>
            <h3>En el 2022 la academia de arbitros AAA cumple 13 años. </h3> 
            <p>Asi es, este año la academia antioqueña de arbitros cumple 13 años al servicio del juzgamiento deportivo, ya lleva mucho tiempo prestando este servicio, cada dia aportando en el proceso de cada uno de los arbitros que perteneces a este gran colegio</p>
                <figure>
                    <a href="#">
                    <img className="" alt=""/>
                    </a>
                </figure>
            </article>

            <article className='inicio3'>
            <h3>Un poco de historia.</h3> 
            <p>A lo largo del tiempo, esta academia fue cogiendo fuerza y logro conseguir torneos para mandar a sus diferentes arbitros a impartir justicia, y asi fue consiguiendo mas y mas, actualmente dirigen 6 torneos </p>
                <figure>
                    <a href="#">
                    <img className="" alt="g"/>
                    </a>
                </figure>
            </article>
            </div>
        </section>
    );
}

export default inicio;