import React, { Component } from 'react';
import './App.css'
import Moment from 'moment'

class Header extends Component {
	render(){
        let idLocale = require('moment/locale/id');
        Moment.updateLocale('id', idLocale);
		return(
            <div>
                <img src="https://cdn.iconscout.com/icon/free/png-64/to-do-list-1605696-1361045.png"
                alt="avatar"/>
                <h3>Data Penjualan Telur</h3>
                <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
            </div>
			)
	}
}

export default Header;