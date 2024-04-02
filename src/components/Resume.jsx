import React, { useRef } from 'react';
import '../styles/resume.scss';
import resumePic from '../assets/images/dh-resume-pr.png'

export default function Resume() {

  const form = useRef();

  

  return (
    <div className='resume'>
      <h1 className='title'>Resume</h1>
      <button className='dl-btn'><a href={resumePic} download='disneyharleyresume.png'>Download</a></button>
      <img src={resumePic} className='resume-pic' />
    </div>
  )
}
