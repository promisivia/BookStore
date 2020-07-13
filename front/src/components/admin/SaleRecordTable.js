import React from 'react';
import MaterialTable from 'material-table';
import {Link} from "react-router-dom";

export default function SaleRecordTable({props}) {
    const {data} = props;
    const [columns] = React.useState([
        {title: 'rank',render: rowData => rowData.tableData.id+1},
        {title: '销量', field: "quantity"},
        {title: 'Image', field: "image",
            render: data=>
                <Link key={data.id} to={{pathname: '/details', search: '?id=' + data.id, target:"_blank"}} >
                    <img alt={data.id} src={data.image} style={{height: "50px", width: '50px'}}/>
                </Link>
        },
        {title: 'ISBN', field: 'isbn', type:'numeric'},
        {title: 'Name', field: 'name'},
        {title: 'Type', field: 'type'},
        {title: 'Author', field: "author"},
    ]);

    return (
        <MaterialTable
            options={{
                search: false,
            }}
            title="热销榜"
            columns={columns}
            data={data}
            style={{
                marginTop: 8,
                paddingLeft: 10,
                width: "auto",
                tableLayout: "auto",
                textAlign: "center",
                fontSize: "12",
            }}
        />
    );
}