import React from 'react';
import MaterialTable from 'material-table';
import { getBooks, addBook, editBook, deleteBook, checkBook } from "../../services/BookService";
import { message, Upload } from "antd";

export default function BookManageTable() {
    const [columns] = React.useState([
        {title: 'ISBN', field: 'isbn', type:'numeric'},
        {title: 'Name', field: 'name', searchable: true, filtering: true},
        {title: 'Type', field: 'type',searchable: false, filtering: false,},
        {title: 'Author', field: "author",searchable: false, filtering: false,},
        {title: 'Price', field: "price", searchable: false, filtering: false, type:'numeric'},
        {title: 'Description', field: "description",width:"600px",searchable: false, filtering: false,},
        {title: 'Inventory', field: 'inventory', searchable: false, filtering: false, type:'numeric'},
        {title: 'Image', field: "image", searchable: false, filtering: false,
            editComponent: props => {
                return (
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        beforeUpload={beforeUpload.bind(this, props.rowData, props.onChange)}
                    >
                        <img alt='暂无图片' src={props.value} style={{height: "100px", width: '100px'}}/>
                    </Upload>)
            },
            render: data=>
                <img alt={data.id} src={data.image} style={{height: "100px", width: '100px'}}/>,
        },
    ]);

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getBooks(data => setData(data)).catch();
    }, []);

    function beforeUpload(oldData, changeData, file) {
        console.log(oldData, changeData, file)
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
            return false;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            changeData(reader.result);
        }
    }

    return (
        <MaterialTable
            options={{
                grouping: true,
            }}
            title="Manage Books"
            columns={columns}
            data={data}
            style={{
                width: "auto",
                tableLayout: "auto",
                textAlign: "center",
                fontSize: "12",
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (checkBook(newData)){
                                addBook(newData,(book)=>{
                                    setData([...data, book]);
                                }).catch();
                                resolve();
                            }else{
                                reject();
                            }
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (checkBook(newData)) {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                editBook(newData, (book) => {
                                    dataUpdate[index] = book;
                                    setData([...dataUpdate]);
                                }).catch();
                                resolve();
                            }else{
                                reject();
                            }
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);
                            deleteBook(oldData.id).catch();
                            resolve();
                        }, 1000)
                    }),
            }}
        />
    );
}


