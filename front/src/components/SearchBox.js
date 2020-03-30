import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

export class SearchBox extends React.Component{
    render() {
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{width:'90%',margin:"10px 5%"}}
                />
            </div>
        )
    }
}