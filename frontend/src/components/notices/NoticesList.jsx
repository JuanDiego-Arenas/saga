import { format } from "date-fns";

const NoticesList = ({noticias}) => {

    return (

        <div>
            <h1>Noticas</h1>
            <ul className='flex flex-col'>
                {
                    noticias.map((noticia) =>
                        <li key={noticia._id} style={{ width: '80vw', height: 'fit-content' }}>
                            <h2>{noticia.title}</h2>
                            <img src={`http://localhost:3000/${noticia.image}`} alt={noticia.title} width={'300px'} height={'300px'} />
                            <p>{noticia.description}</p>
                            <p>Creado por: {noticia.createby}</p>
                            <p>Fecha de Creacion: {noticia.updatedAt}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default NoticesList;
