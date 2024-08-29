import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Menus, signOutAction } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { slideUpOut } from '../animation';

const UserProfileDetails = () => {
    const user = useSelector((state) => state.user?.user);
    //console.log(user);
    const [isMenu, setIsMenu] = useState(false)

  return (
    <div className='flex items-center justify-center gap-4 relative'>
        <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
            {
                user?.photoURL ? ( <>
                  <motion.img
                   whileHover={{scale: 1.2}}
                    src={user?.photoURL}
                     alt={user?.displayName}
                      referrerPolicy='no-referrer'
                       className=' w-full h-full object-cover' />
                </>) : ( 
                    <p className=' text-xl text-white font-semibold capitalize'>
                        {user?.email[0]}
                    </p>
            )}

        </div>
        {/* profile image ke bagal me arrow ke liye */}

        <motion.div
        onClick={() => setIsMenu(!isMenu)} 
        whileTap={{ scale: 0.9 }} className=' p-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer'>
            <FaChevronDown className=' text-primaryText' />
        </motion.div>

        <AnimatePresence>
            {isMenu && (
                <motion.div {...slideUpOut} className=' bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]'>

                {Menus && Menus.map(menu => (
                    <Link to={menu.uri} key={menu.id} className=' text-primaryText text-lg hover:bg-slate-800 px-2 py-1 w-full rounded-md '>
                        {menu.name}
                    </Link>
                ))}
    
                <motion.p
                onClick={signOutAction}
                whileTap={{scale: 0.9}} className=' text-primaryText text-lg hover:bg-slate-800 px-2 py-1 w-full rounded-md'>
                    Sign Out
                </motion.p>
            </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default UserProfileDetails