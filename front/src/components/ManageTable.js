import React from 'react';
import MaterialTable from 'material-table';
import { getBooks } from "../services/bookService";

export default function ManageTable() {
    let [state, setState] = React.useState({
        columns: [
            {title: 'Name', field: 'name'},
            {title: 'Author', field: "author"},
            {title: 'Image', field: "img"},
            {title: 'ISBN', field: 'inventory'},
            {title: 'Inventory', field: 'inventory'},
        ],
        data: getBooks(),
    });

    return (
        <MaterialTable
            options={{
                grouping: true,
                selection: true,
                filtering: true
            }}
            title="Manage Books"
            columns={state.columns}
            data={state.data}
            style={{ width: "auto", tableLayout: "auto", textAlign: "center" }}
            detailPanel={rowData => {
                return (
                    <iframe
                        width="100%"
                        height="300"
                        src={rowData.img}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                )
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}

