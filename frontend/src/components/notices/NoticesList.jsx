import { format } from "date-fns";

const NoticesList = ({ noticias }) => {

    return (

        <div>
            <h1 className="text-6xl font-bold mb-5">Noticias</h1>
            <ul className='containerNotices flex flex-col gap-8'>
                {
                    noticias.map((noticia) =>
                        <li className="containerNoticeList" key={noticia._id} style={{ width: '80vw', height: 'fit-content' }}>
                            <div className="cImgDes flex">
                                <div className="infroNotice flex flex-col items-center">
                                    <h2>{noticia.title}</h2>
                                    <img src={`http://localhost:3000/${noticia.image}`} alt={noticia.title} width={'80%'} />
                                </div>
                                <div className="description" style={{ with: '50%' }}>
                                    <pre className="descriptionPre">{noticia.description}</pre>
                                </div>
                            </div>
                            <div className="footerNotice">
                                <p>Creado por: <b>{noticia.createby}</b></p>
                                <p>Rol: <b>{noticia.rol}</b></p>
                                <p>Fecha de Creacion: <b>{noticia.updatedAt}</b></p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default NoticesList;
