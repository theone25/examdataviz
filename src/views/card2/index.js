import React, { Component } from 'react';
import { Card } from 'antd';
import './card.css';

export default class Card2 extends Component {
    render() {
        let {info} = this.props;
        if (info === null) {
            info = "null";
        }
        return (
            <Card title="Rotational Speed (RPM)" bordered={true}>
                <span style={{fontSize:'20px'}}>{info} RPM</span>  
            </Card>
        )
    }
}
