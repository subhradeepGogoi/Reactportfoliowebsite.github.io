import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skillbox = () => {
  return (
   <div className='skillpage'>
     <div className="skillbox">
        <div className="skillbox skillset">
            <div className='skillbox box'>
                Languages
            </div>
            <div className="skillbox data">
                <ul>
                    <li><BsFillPatchCheckFill/> HTML - Experienced</li>
                    <li><BsFillPatchCheckFill/> CSS - intermediate</li>
                    <li><BsFillPatchCheckFill/> JS - beginner</li>
                    <li><BsFillPatchCheckFill/> Java - beginner</li>
                    <li><BsFillPatchCheckFill/> Python - intermediate</li>
                </ul>
            </div>
        </div>
        <div className="skillbox skillset">
            <div className='skillbox box'>
                Frameworks
            </div>
            <div className="skillbox data">
                <ul>
                    <li><BsFillPatchCheckFill/> ReactJS - beginner</li>
                    <li><BsFillPatchCheckFill/> Django - beginner</li>
                </ul>
            </div>
        </div>
        <div className="skillbox skillset">
            <div className='skillbox box'>
                Tools
            </div>
            <div className="skillbox data">
                <ul>
                    <li><BsFillPatchCheckFill/> Slack - Intermediate</li>
                    <li><BsFillPatchCheckFill/> Git- Beginner</li>
                    <li><BsFillPatchCheckFill/> BitBucket - Beginner</li>
                    <li><BsFillPatchCheckFill/> Matlab - Intermediate</li>
                    <li><BsFillPatchCheckFill/> Labview - Intermediate</li>
                    <li><BsFillPatchCheckFill/> Blender - Beginner</li>
                </ul>
            </div>
        </div>
        
    </div>
        <div className='skillbox'>
            
            <div className="skillbox data">
                <h3>
                    SoftSkills
                </h3>
                <ul>
                    <li><BsFillPatchCheckFill/> Good communication skills</li>
                    <li><BsFillPatchCheckFill/> Versatility</li>
                    <li><BsFillPatchCheckFill/> Teamwork</li>
                    <li><BsFillPatchCheckFill/> Stress Management</li>
                    <li><BsFillPatchCheckFill/> Problem-solving</li>
                </ul>
            </div>
            
        </div>
   </div>

  )
}

export default Skillbox