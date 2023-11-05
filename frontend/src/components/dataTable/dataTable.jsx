import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';

const DataTableComponent = ( {data} ) => {
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [columnFilters, setColumnFilters] = useState({
        user_name: '',
        ficha: '',
        entrada: '',
        salida: '',
    });
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const arrayExample = [
        ...data
    ];

    arrayExample.reverse()

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

    const filteredGlobal = filterGlobal(arrayExample, globalFilterValue);
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
        <div className='table-container' style={{ marginTop: '3em' }}>
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>

            <DataTable value={visibleData} tableStyle={{ width: '100%', height: '70vh' }}>
                <Column
                    field="user_name"
                    header={
                        <div className="p-d-flex p-ai-center">
                            Nombre
                            <InputText
                                value={columnFilters.user_name}
                                onChange={(e) => onColumnFilterChange('user_name', e.target.value)}
                                placeholder="Buscar"
                                className="p-ml-2"
                                style={{ width: 'fit-content' }}
                            />
                        </div>
                    }
                />
                <Column
                    field="ficha"
                    header={
                        <div className="p-d-flex p-ai-center">
                            Ficha
                            <InputText
                                value={columnFilters.ficha}
                                onChange={(e) => onColumnFilterChange('ficha', e.target.value)}
                                placeholder="Buscar"
                                className="p-ml-2"
                                style={{ width: '13ch', maxWidth: '13ch', overflow: 'hidden', textOverflow: 'ellipsis' }}
                            />
                        </div>
                    }
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
                                className="p-ml-2"
                                type='date'
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
                                className="p-ml-2"
                                type='date'
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
