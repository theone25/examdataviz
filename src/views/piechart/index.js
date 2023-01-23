import React, { Component } from 'react';
import PieChart from '../../vizs/Pie_Chart';
import './piechart.css';

export default class PieChart1 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='pieChart1' className='pane'>
                <div className='header'>Failed/No failure Pie Chart </div>
                <div >
                    <PieChart data={data} width={740} height={300}/>
                </div>                
            </div>
        )
    }
}