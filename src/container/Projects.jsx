import { motion } from 'framer-motion'
import React from 'react'
import { MdBookmark } from 'react-icons/md'
import { useSelector } from 'react-redux'


const Projects = () => {
  const projects = useSelector((state) => state.projects?.projects)
  console.log(projects);
  console.log("h1");
  return (
    <div className=' w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
    {projects && projects.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} />
    ))}
  </div>
  )
}

const ProjectCard = ({project, index}) => {
  return ( 
  
  <motion.div
   key={index}
    className=' w-full cursor-pointer md:w-[450px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4'>
    <div
      className=' bg-primary w-full h-full rounded-md overflow-hidden'
      style={{ overflow: 'hidden', height: "100%" }}>
        <iframe
            title='Result'
              srcDoc={project.output}
          style={{ border: "none", width: "100%", height: "100%" }}
        />
    </div>

    <div className=' flex items-center justify-start gap-3 w-full'>
      {/* image */}

     {/* <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
            {
                project?.user?.photoURL ? ( <>
                  <motion.img
                   whileHover={{scale: 1.2}}
                    src={project?.user?.photoURL}
                     alt={user?.displayName}
                      referrerPolicy='no-referrer'
                       className=' w-full h-full object-cover' />
                </>) : ( 
                    <p className=' text-xl text-white font-semibold capitalize'>
                        {project?.user?.email[0]}
                    </p>
            )}

        </div> */}

      {/* name */}
      {/*<div>
        <p className=' text-white text-lg capitalize'>{project?.title}</p>
        <p className=' text-primaryText text-sm capitalize'>
          {project?.user?.displayName? project?.user?.displayName : `${project?.user.email.split("@")[0]}`}
        </p>
      </div>  */}

      {/* collection part */}
      {/*<motion.div className=' cursor-pointer ml-auto' whileTap={{ scale: 0.9 }}>
        <MdBookmark className=' text-primaryText text-3xl' />

      </motion.div> */}
    </div> 

  </motion.div>
)}

export default Projects