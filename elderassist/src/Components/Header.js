import React, { Component } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Header extends Component {
    render() {
        var pathimg = {
            width: '200px',
            height: '50px'
        }

        var panel = {
            width: '800px'
        }

        var panel_header = {
            height: '130px',
            padding: '55px'
        }


        return (
            <div className="Main-header">
                <div className="section">

                    <h1>Elderassist</h1>
                    <ul id="nav">
                        <li className="selected"><a href="#">Dashboard</a></li>
                        <li><a href="#">Notification</a>
                            <ul>
                                <li><a href="#">sub-1</a></li>
                                <li><a href="#">sub-2</a></li>
                                <li><a href="#">sub-3</a></li>
                                <li><a href="#">sub-4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Report</a></li>
                        <li><a href="#">Logout</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                </div>
                <div className="aside">
                    <div className="panel panel-default" style={panel}>

                        <div className="panel-heading" style={panel_header}>
                            <h>Notification Lists</h>
                        </div>


                        <table className="table">
                            <tr>
                                <td>ชื่อ</td>
                                <td>วันที่</td>
                                <td>เวลา</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>
                            <tr>
                                <td>พรรณภา ชูวา</td>
                                <td>17 มีนาคม 2560</td>
                                <td>11:24 น.</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

        );
    }
}
export default Header;

