import React, { Component } from 'react';
import { Card } from 'antd';
import './card.css';

export default class Card3 extends Component {
    render() {
        let {info} = this.props;
        if (info === null) {
            info = "null";
        }
        return (
            <Card title="Tool wear (Min)" bordered={true}>
                <span style={{fontSize:'20px'}}>{info} Minutes</span>  
            </Card>
        )
    }
}
