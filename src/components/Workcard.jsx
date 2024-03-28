import React from 'react'
import '../styles/work.scss';

const Workcard = ({ data }) => {
  return (
        <div className="card">
          <img src={data.image} alt='pv1' />
          <p className='pname'>{data.name}</p>
            <div className='content'>
              <a className='buttons' href={data.liveUrl}>Live</a>
              <a className="buttons" href={data.githubUrl}>Github</a>
            </div>
        </div>
  )
}

export default Workcard