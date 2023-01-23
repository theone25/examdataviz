import React, { Component } from 'react';
import { Card } from 'antd';
import './card.css';

export default class Card4 extends Component {
    render() {
        let {info} = this.props;
        if (info === null) {
            info = "null";
        }
        return (
            <Card title="Failure" bordered={true}>
                <span style={{fontSize:'20px'}}>{info} </span> 
            </Card>
        )
    }
}
