import xml2js from 'xml2js';


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

        const contenidoXML = xmlFile.data.toString()

        const arryParseXml = await parseXmlToJson(contenidoXML)
            .then(jsonData => {
                return jsonData
            })
            .catch(error => {
                console.error(error);
            });

            
        // Envía una respuesta de éxito
        xml2js.parseString(contenidoXML, (err, result) => {
            if (err) {
                console.error('Error al parsear XML:', err);
                return res.status(500).json({ error: 'Error al parsear el archivo XML' });
            }   
            res.status(200).json({
                msg: 'Archivo XML recibido y parseado correctamente',
                data: arryParseXml
            });
        });
    } catch (error) {
        console.error('Error al cargar el archivo XML:', error);
        res.status(500).json({ error: 'Error al cargar el archivo XML' });
    }
};


export const nada = (req, res) => {
    res.status(200).json({ msg: ' OK ' })
}