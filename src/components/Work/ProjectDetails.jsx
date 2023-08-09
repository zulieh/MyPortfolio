import React from 'react'

const ProjectDetails = ({ project }) => {
  const { about, cover, name, link } = project;

  return (
    <div className='max-w-lg border-l-4 border-gray-500'>
      <img src={cover} alt={name} className='w-20 m-6'/>
      <p className='my-4 m-6'>{about}</p>
      <a href={link} target="_blank" className='hover:text-red-200 m-6'>Check it out</a>
    </div>
  )
}

export default ProjectDetails
