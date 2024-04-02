import React, { useEffect, useState } from 'react';
import '../styles/work.scss';
import mw from '../assets/images/musicworld.png';
import ms from '../assets/images/mcts.png';
import Workcard from './Workcard';
import { Kwainasiafa, MCTS, MusicWorld, PotterWorld, Pv1, ecommerce, ecourt, zodiac } from '../PortfolioData'


export default function Work() {
  const [ptype, setPtype] = useState('*')
  const [ptypeF, setPtypeF] = useState(false)
  const [ptypeC, setPtypeC] = useState(false)
  const projects = [Kwainasiafa, MCTS, MusicWorld, PotterWorld, Pv1, ecommerce, zodiac, ecourt]

  // useEffect(() => {
    
  // }, [])

  const handleSortTitles = event => {
    const target = event.target.innerText
    // setPtypeC(!ptypeC)
    // setPtypeF(!ptypeF)
    console.log(target)

    if (target === 'All') { 
      setPtype('*') 
      setPtypeF(false)
      setPtypeC(false)
    }

    if (target === 'Fundamental') { 
      setPtype('F') 
      setPtypeF(true)
      setPtypeC(false)
    }

    if (target === 'Creative') { 
      setPtype('C') 
      setPtypeC(true) 
      setPtypeF(false)
    }
  }

  const handleSortProjects = () => {
    projects.map(project => {
      console.log(project)
      if (project.category === '*') {
        console.log('all')
      }
    })
  }
  

  

  return (
    <div className='work'>
      <h1 className='workHeader'>PROJECTS</h1>
      <div className='sortTitles'>
        <span onClick={handleSortTitles} style={{ color: ptype === '*' ? '#FFA500' : '#4a5759' }} className='sort-color' >All</span>
        <span onClick={handleSortTitles} style={{ color: ptypeF ? '#FFA500' : '#4a5759' }} className='ptypeF sort-color'>Fundamental</span>
        <span onClick={handleSortTitles} style={{ color: ptypeC ? '#FFA500' : '#4a5759' }} className='ptypeC'>Creative</span>
      </div>
      <div className='container'>
        {projects.map(project => {
          const x = project.category
          if (ptype === '*') return <Workcard data={project} />
          if (ptype === 'F' && x === 'F') return <Workcard data={project} />
          if (ptype === 'C' && x === 'C') return <Workcard data={project} />
        })}
      </div>
    </div>
  )
}
