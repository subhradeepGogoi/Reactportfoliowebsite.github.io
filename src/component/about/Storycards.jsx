import React from 'react'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {MdOutlineLocalActivity,MdSportsEsports} from 'react-icons/md'

const Storycards = () => {
  return (
    <div className='cards'>
        <div className='cards card'>
            <div className='logo'>
                <HiOutlineAcademicCap/>
            </div>
            <h3>Academia</h3>
            <ul>
                <li>B.Tech in Electronics and Instrumentation Engineering from NIT, Silchar 2023</li>
                <li>+2 with 91.2% from SAI RNS, Guwahati (CBSE)</li>
                <li>Matriculation with 85% from Carmel School, Jorhat (ICSE)</li>
            </ul>
        </div>
        <div className='cards card'>
            <div className='logo'>
                <MdOutlineLocalActivity/>
            </div>
            <h3>Extracurricular</h3>
            <ul>
                <li>Participated in interschool football competitions from Carmel in 2015,2016</li>
                <li>Participated and won 1st prize in Konami Code(Gaming quiz),Tecnoesis 2019</li>
                <li>Organised various events as English Literature Club Head, Illuminits NIT Silchar and previously as executive member (2021-2022)</li>
                <li>Organised various events under the banner of crescendo and alphacrescendo as INSEES executive member, NIT Silchar (2020-2021)</li>
                <li>Event Management Co-Head, Posua 2022</li>
            </ul>
        </div>
        <div className='cards card'>
            <div className='logo'>
                <MdSportsEsports/>
            </div>
            <h3>Hobbies</h3>
            <ul>
                <li>Passionate about Video Games</li>
                <li>Ardent follower of Anime and Manga</li>
                <li>Voracious Reader</li>
                <li>Binge-watcher (The Office is the best sit-com)</li>
                <li>I like to go cycling and/or on walks</li>
            </ul>
        </div>
    </div>
  )
}

export default Storycards