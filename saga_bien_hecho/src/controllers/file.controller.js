import xml2js from 'xml2js';
import path from 'path';
import User from '../models/user.model.js'; 

const parseXmlToJson = async (xmlString) => {

    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlString, { explicitArray: false }, async (err, result) => {
            if (err) {
                reject('Error al parsear XML: ' + err.message);
            } else {
                const rows = result.Rows.Row;
                const jsonData = [];

                if (Array.isArray(rows)) {
                    for (const row of rows) {
                        const cells = row.Cell;
                        if (Array.isArray(cells) && cells.length >= 7) {
                            const tipo = cells[0].Data._;
                            const cc = cells[1].Data._;
                            const nombre = cells[2].Data._;
                            const apellido = cells[3].Data._;
                            let telefono = cells[4].Data;
                            const password = '12345678'
                            const email = cells[5].Data._;
                            const estado = cells[6].Data._;
                            const rol = 'aprendiz'
                            const avatar = 'http://localhost:3000/avatars/userdefault.jpg'
                            

                            telefono = telefono ? telefono._ : 0;

                            if(estado == 'EN FORMACION' || estado == 'INDUCCION'){
                                jsonData.push({
                                    tipo,
                                    cc,
                                    username: nombre + ' ' + apellido,
                                    telefono: telefono === 0 ? 0 : telefono,
                                    password,
                                    email,
                                    estado,
                                    rol,
                                    avatar
                                });
                            } else {

                            }

                        } else {
                            // Log o manejo del error para filas con número incorrecto de celdas
                            console.error('Fila con estructura incorrecta:', row);
                        }
                    }
                } else {
                    // Si solo hay una fila, también la procesamos
                    const cells = rows.Cell;
                    if (Array.isArray(cells) && cells.length >= 7) {
                        const cc = cells[0].Data._;
                        const numero = cells[1].Data._;
                        const nombre = cells[2].Data._;
                        const apellido = cells[3].Data._;
                        const telefono = cells[4].Data._;
                        const email = cells[5].Data._;
                        const estado = cells[6].Data._;

                        jsonData.push({
                            cc,
                            numero,
                            nombre,
                            apellido,
                            telefono,
                            email,
                            estado,
                            barcodeSVG: await generateBarcodeSVG(cc), // Generar código de barras para cc
                        });
                    } else {
                        // Log o manejo del error para la fila con número incorrecto de celdas
                        console.error('Fila con estructura incorrecta:', rows);
                    }
                }
                resolve(jsonData);
            }
        });
    });
};

export const CargarXml = async (req, res) => {
    try {
        const xmlFile = req.files.xmlFile; // * Nombre del campo del archivo en la solicitud

        if (!xmlFile) {
            return res.status(400).json({ error: 'No se proporcionó ningún archivo XML' });
        }

        const contenidoXML = xmlFile.data.toString();

        const fileName = path.basename(xmlFile.name, path.extname(xmlFile.name));
        const [_, fichaNumero, fichaNombre] = fileName.match(/Ficha (\d+) \((.*?)\)/);

        const arryParseXml = await parseXmlToJson(contenidoXML).then(jsonData => jsonData).catch(error => {
            console.error(error);
        });

        // Consultar si los datos ya existen en la base de datos
        const existingData = await User.find({ fichaNumero, fichaNombre });

        if (existingData.length > 0) {
            // Si los datos ya existen, devolver la data existente
            return res.status(200).json({
                msg: 'Datos ya existentes en la base de datos',
                data: existingData,
                fichaNumero,
                fichaNombre
            });
        }

        // Agregar fichaNumero y fichaNombre a cada objeto en el array jsonData
        const jsonDataWithFicha = arryParseXml.map(item => ({
            ...item,
            fichaNumero,
            fichaNombre
        }));

        // Guardar jsonDataWithFicha en la base de datos
        await User.insertMany(jsonDataWithFicha);

        res.status(200).json({
            msg: 'Archivo XML recibido y parseado correctamente',
            data: jsonDataWithFicha,
            fichaNumero,
            fichaNombre
        });
    } catch (error) {
        console.error('Este archivo contiene datos ya subidos', error);
        res.status(500).json({ error: 'Error al cargar el archivo XML' });
    }
};


export const nada = (req, res) => {
    res.status(200).json({ msg: ' OK ' })
}