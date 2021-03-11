import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './leagueList.css'

function LeagueList() {
    
    let [AllLeagueIds, setAllLeagueIds] = useState([])
    let [leagueList, setLeagueList] = useState([])

    useEffect(() =>{
        axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
             .then((res) =>{
                // console.log(res.data);
                let AllIds = res.data.leagues.map((league) =>{
                    return league.idLeague
                })
                setAllLeagueIds(AllIds.slice(0, 9))
             })
    }, [])

    useEffect(() =>{
        axios.all(AllLeagueIds.map((item) =>{
            return axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${item}`)
        })).then((res) =>{
            // console.log(res);

            let newLeagueData = res.map((leagueData) =>{
                // console.log(leagueData.data.leagues[0]);

                return {
                    id: leagueData.data.leagues[0].idLeague,
                    leagueName: leagueData.data.leagues[0].strLeague,
                    thumbUrl: leagueData.data.leagues[0].strLogo
                }
            })

            // console.log(newLeagueData);
            setLeagueList(newLeagueData)
        })
    }, [AllLeagueIds])


    return (
        <div>
            <h3>League list</h3>
            <hr/>
            {leagueList.map((league, index) =>{
                return (
                    <div key={index}>
                        <Link to={{ pathname: `detail/${league.id}` }}>
                            <fieldset>
                            <h1>{league.leagueName}</h1>
                            <img src={league.thumbUrl} alt=""/>
                            </fieldset>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default LeagueList
