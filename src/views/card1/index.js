import React, { Component } from 'react';
import { Card } from 'antd';
import './card.css';

export default class Card1 extends Component {
    render() {
        let {info} = this.props;
        if (info === null) {
            info = "null";
        }
        return (
            <Card title="Temperature (Kelvin)" bordered={true}>
                <span style={{fontSize:'20px'}}>{info} °K</span> 
            </Card>
        )
    }
}
