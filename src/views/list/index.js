import React, { Component } from 'react';
import { List  } from 'antd';
import './list.css';

export default class ListViz extends Component {
    selectMachine = (machine) => {
        this.props.changeSelectMachine(machine);
    }

    render() {
        let {list_data} = this.props;
        if (list_data === null) {
            list_data = [];
        }
        
        return (
            <List
                size="large"
                bordered
                dataSource={list_data}
                renderItem={(item) => <List.Item onClick = {() => this.selectMachine(item["Product ID"])}>
                    {<a style={{color:'black', fontWeight:'bold', fontSize: '20px'}}>{item["Product ID"]}:    
                    <span style={{color:'black', fontWeight:'normal', fontSize: '20px'}}> {item["Failure Type"]}</span></a>}
                    </List.Item>}
            />
        )
    }
}
