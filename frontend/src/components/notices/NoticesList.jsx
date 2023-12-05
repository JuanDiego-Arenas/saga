import { DateTime } from 'luxon'
import '../../styles/NoticesPageStyles.css'

const NoticesList = ({ noticias, handleEliminarNoticia, handleEditarNoticia }) => {

    return (

        <div>
            <h1 id='Noth1' className="font-bold mb-5">Noticias</h1>
            <ul className='containerNotices flex flex-col gap-8'>
                {
                    noticias.map((noticia) =>
                        <li className="containerNoticeList" key={noticia._id} style={{ width: '80vw', height: 'fit-content' }}>
                            <div className="cImgDes flex">
                                <div className="infroNotice flex flex-col items-center">
                                    <h2>{noticia.title}</h2>
                                    <img src={`${import.meta.env.VITE_BASE_URL}/${noticia.image}`} alt={noticia.title} width={'80%'} />
                                </div>
                                <div className="description" style={{ with: '50%' }}>
                                    <pre className="descriptionPre">{noticia.description}</pre>
                                </div>
                            </div>
                            <div className="footerNotice">
                                <p>Creado por: <b>{noticia.createby}</b></p>
                                <p>Rol: <b>{noticia.rol}</b></p>
                                <p>Fecha de Creacion: <b>{DateTime.fromISO(noticia.updatedAt).toLocaleString(DateTime.DATE_FULL)}</b></p>

                                <button id='edit' onClick={() => handleEditarNoticia(noticia)}>Editar</button>
                                <button id='delete' onClick={() => handleEliminarNoticia(noticia._id)}>Eliminar</button>

                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default NoticesList;
