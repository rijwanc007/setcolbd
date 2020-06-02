import React,{Component} from 'react';
import html5 from '../../assets/img/technologies/html5.png';
import css3 from '../../assets/img/technologies/css3.png';
import bootstrap from '../../assets/img/technologies/bootstrap.png';
import wordpress from '../../assets/img/technologies/wordpress.jpg';
import js from '../../assets/img/technologies/js.png';
import jq from '../../assets/img/technologies/jq.png';
import react from '../../assets/img/technologies/react.png';
import redux from '../../assets/img/technologies/redux.png';
import json from '../../assets/img/technologies/json.png';
import xml from '../../assets/img/technologies/xml.png';
import ajax from '../../assets/img/technologies/ajax.png';
import php from '../../assets/img/technologies/php.png';
import laravel from '../../assets/img/technologies/laravel.png';
import nodejs from '../../assets/img/technologies/nodejs.png';
import java from '../../assets/img/technologies/java.png';
import ionic from '../../assets/img/technologies/ionic.png';
import mysql from '../../assets/img/technologies/mysql.png';
import postgresq from '../../assets/img/technologies/postgresq.png';
import oracle from '../../assets/img/technologies/oracle.png';
import api from '../../assets/img/technologies/api.png';
import blockchain from '../../assets/img/technologies/blockchain.png';


class Technology extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="section-headline services-head text-center">
                                <h2>Our <span className="text-info">Technologies</span></h2>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <br/>
                            <img className = "technology_icon" src={html5} alt="html5"/>
                            <img className = "technology_icon" src={css3} alt="css3"/>
                            <img className = "technology_icon" src={bootstrap} alt="bootstrap"/>
                            <img className = "technology_icon" src={wordpress} alt="wordpress"/>
                            <img className = "technology_icon" src={js} alt="js"/>
                            <img className = "technology_icon" src={jq} alt="jq"/>
                            <img className = "technology_icon" src={react} alt="react"/>
                            <img className = "technology_icon" src={redux} alt="redux"/>
                            <img className = "technology_icon" src={json} alt="json"/>
                            <img className = "technology_icon" src={xml} alt="xml"/>
                            <img className = "technology_icon" src={ajax} alt="ajax"/>
                            <img className = "technology_icon" src={php} alt="php"/>
                            <img className = "technology_icon" src={laravel} alt="laravel"/>
                            <img className = "technology_icon" src={nodejs} alt="nodejs"/>
                            <img className = "technology_icon" src={java} alt="java"/>
                            <img className = "technology_icon" src={ionic} alt="ionic"/>
                            <img className = "technology_icon" src={mysql} alt="mysql"/>
                            <img className = "technology_icon" src={postgresq} alt="postgresq"/>
                            <img className = "technology_icon" src={oracle} alt="oracle"/>
                            <img className = "technology_icon" src={api} alt="api"/>
                            <img className = "technology_icon" src={blockchain} alt="blockchain"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technology;