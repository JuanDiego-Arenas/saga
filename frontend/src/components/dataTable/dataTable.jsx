import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import { BiSearchAlt } from 'react-icons/bi'

const DataTableComponent = ({ data }) => {
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [columnFilters, setColumnFilters] = useState({
        user_name: '',
        ficha: '',
        entrada: '',
        salida: '',
    });
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const asistencias = [
        ...data
    ];


    const onColumnFilterChange = (field, value) => {
        setColumnFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
        setFirst(0); // Resetear la paginación al buscar
    };

    const filterGlobal = (array, text) => {
        const searchText = text.toLowerCase();
        return array.filter((item) =>
            Object.values(item).some((value) => {
                if (value) {
                    const itemText = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
                    return itemText.includes(searchText);
                }
                return false;
            })
        );
    };

    const filterLocal = (array, field, text) => {
        const searchText = text.toLowerCase();
        return array.filter((item) => {
            const itemValue = item[field] ? item[field].toString().toLowerCase() : '';
            return itemValue.includes(searchText);
        });
    };

    const onGlobalFilterChange = (e) => {
        setGlobalFilterValue(e.target.value);
        setFirst(0); // Resetear la paginación al buscar
    };

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const filteredGlobal = filterGlobal(asistencias, globalFilterValue);
    const filteredArray = filterLocal(
        filterLocal(
            filterLocal(
                filterLocal(filteredGlobal, 'user_name', columnFilters.user_name),
                'ficha',
                columnFilters.ficha
            ),
            'entrada',
            columnFilters.entrada
        ),
        'salida',
        columnFilters.salida
    );
    const totalRecords = filteredArray.length;
    const visibleData = filteredArray.slice(first, first + rows);

    return (
        <div className='table-container mt-9'>
            <div className="flex justify-content-end search mt-9">
                <BiSearchAlt style={{ color: 'green', fontSize: '1.6em' }} />
                <span className="p-input-icon-left">
                    <InputText style={{ outline: 'none', borderBottom: '2px solid #4CAF50' }} value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Busqueda Global" />
                    <span className='ml-5'>Asistencias Totales: { data.length }</span>
                </span>
            </div>

            <DataTable value={visibleData} tableStyle={{ width: '98%', height: '70vh', margin: 'auto' }}>
                <Column
                    field="tipo"
                    header="Tipo"
                />
                <Column
                    field="cedula"
                    header="Cedula" 
                />
                <Column
                    field="user_name"
                    header={
                        <div className="p-d-flex p-ai-center flex gap-4">
                            Nombre
                            <InputText
                                value={columnFilters.user_name}
                                onChange={(e) => onColumnFilterChange('user_name', e.target.value)}
                                placeholder="Buscar"
                                className="p-ml-2"
                                style={{ outline: 'none', borderBottom: '2px solid #4CAF50' }}
                            />
                        </div>
                    }
                    style={{ width: '40%' }}
                />
                <Column
                    field="ficha"
                    header={
                        <div className="p-d-flex p-ai-center flex gap-4">
                            Ficha
                            <InputText
                                value={columnFilters.ficha}
                                onChange={(e) => onColumnFilterChange('ficha', e.target.value)}
                                placeholder="Buscar"
                                className="p-ml-2 outline-none"
                                style={{ outline: 'none', borderBottom: '2px solid #4CAF50', width: '13ch' }}
                            />
                        </div>
                    }
                    style={{ width: '20ch' }}
                />
                <Column
                    field="entrada"
                    header={
                        <div className="p-d-flex p-ai-center">
                            Entrada
                            <InputText
                                value={columnFilters.entrada}
                                onChange={(e) => onColumnFilterChange('entrada', e.target.value)}
                                placeholder="Buscar"
                                className="p-ml-2 ml-2"
                                type='text'
                                style={{ outline: 'none', borderBottom: '2px solid #4CAF50', width: '8ch' }}
                            />
                        </div>
                    }
                />
                <Column
                    field="salida"
                    header={
                        <div className="p-d-flex p-ai-center">
                            Salida
                            <InputText
                                value={columnFilters.salida}
                                onChange={(e) => onColumnFilterChange('salida', e.target.value)}
                                placeholder="Buscar"
                                className="p-ml-2 ml-2"
                                type='text'
                                style={{ outline: 'none', borderBottom: '2px solid #4CAF50', width: '8ch' }}
                            />
                        </div>
                    }
                />
            </DataTable>

            <Paginator first={first} rows={rows} totalRecords={totalRecords} onPageChange={onPageChange} />
        </div>
    );
};

export default DataTableComponent;
