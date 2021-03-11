import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
import './detail.css'
import female from './img/female.png'
import male from './img/male.png'



function TeamDetail() {
    let [leagueDetail, setLeagueDetail] = useState()
    let { id } = useParams();

    useEffect(() =>{
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
             .then((res) =>{
                // console.log(res.data.leagues[0]);
                setLeagueDetail(res.data.leagues[0])
             })
    }, [])

    return (
        <div>
            {leagueDetail ? (
                <>
                    <div>
                        <fieldset className="team-intro">
                            <h2>{leagueDetail.strLeague}</h2>
                            <h2>Founded: {leagueDetail.intFormedYear}</h2>
                            <h2>Country: {leagueDetail.strCountry}</h2>
                            <h2>Sport Type: {leagueDetail.strSport}</h2>
                            <h2>Gender: {leagueDetail.strGender}</h2>
                        </fieldset>
                        <fieldset className="team-img">
                            <img src={leagueDetail.strGender === 'Female' ? female: male} alt=""/>
                        </fieldset>
                    </div>
                    <div className="clr"></div>
                    <div>
                        <fieldset>
                            {leagueDetail.strDescriptionEN}
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <ul>

                                <li><a href="" onClick={(e) => {
                                    e.preventDefault()
                                    window.location.href = `https://www.${leagueDetail.strTwitter}`;
                                }}><i className="fab fa-twitter"></i></a></li>

                                <li><a href={leagueDetail.strFacebook} onClick={(e) => {
                                    e.preventDefault()
                                    window.location.href = `https://${leagueDetail.strFacebook}`;
                                }}><i className="fab fa-facebook-f"></i></a></li>

                                <li><a href={leagueDetail.strYoutube} onClick={(e) => {
                                    e.preventDefault()
                                    window.location.href = `https://${leagueDetail.strYoutube}`;
                                }}><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </fieldset>
                    </div>
                </>
            ):''}
        </div>
    )
}

export default TeamDetail
