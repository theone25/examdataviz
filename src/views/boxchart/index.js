import React, { Component } from 'react';
import BarChart from '../../vizs/Box_Chart';
import './boxchart.css';

export default class BoxChart extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='boxChart1' className='pane'>
                <div className='header'>Rotational Speed per Machine (last 10) </div>
                <div >
                    <BoxChart data={data} width={740} height={300}/>
                </div>                
            </div>
        )
    }
}