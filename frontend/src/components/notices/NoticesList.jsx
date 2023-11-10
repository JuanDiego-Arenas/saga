import { format } from "date-fns";

const NoticesList = ({ noticias }) => {

    return (

        <div>
            <h1>Noticas</h1>
            <ul className='containerNotices flex flex-col gap-2'>
                {
                    noticias.map((noticia) =>
                        <li className="containerNoticeLzist" key={noticia._id} style={{ width: '80vw', height: 'fit-content' }}>
                            <div className="flex">
                                <div className="infroNotice flex flex-col items-center">
                                    <h2>{noticia.title}</h2>
                                    <img src={`http://localhost:3000/${noticia.image}`} alt={noticia.title} width={'80%'} />
                                </div>
                                <div className="description" style={{ with: '50%' }}>
                                    <pre className="descriptionPre">{noticia.description}</pre>
                                </div>
                            </div>
                            <div className="footerNotice">
                                <p>Creado por: {noticia.createby}</p>
                                <p>Fecha de Creacion: {noticia.updatedAt}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default NoticesList;
