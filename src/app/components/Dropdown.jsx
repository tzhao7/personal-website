// import React from 'react'
// import { Dropdown, DropdownTrigger, Button } from '@nextui-org/react'

// const DropdownMenu = ({name}) => {
//   const [isOpen, setIsOpen] = React.useState(false)

//   return (
//     <Dropdown
//       isOpen={isOpen}
//     >
//       <DropdownTrigger>
//         <Button 
//           onMouseEnter={() => {
//             setIsOpen(true);
//           }}
//           onMouseLeave={() => {
//             setIsOpen(false);
//           }}
//         >
//           {name}
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu>
//         <Dropdown.Item key="1">Item 1</Dropdown.Item>
//         <Dropdown.Item key="2">Item 2</Dropdown.Item>
//         <Dropdown.Item key="3">Item 3</Dropdown.Item>
//         <Dropdown.Item key="4">Item 4</Dropdown.Item>
//         <Dropdown.Item key="5">Item 5</Dropdown.Item>
//       </DropdownMenu>
//     </Dropdown>
//   )
// }

// export default DropdownMenu

// const Dropdown = ({item}) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const menuItems = item?.subMenuItems ? item.subMenuItems : [];

//     const toggle = () => {
//         setIsOpen(old => !old);
//     }

//     const transClass = isOpen
//         ?
//         "flex"
//         :
//         "hidden";

//     return (
//         <>
//             <div onMouseEnter={toggle} onMouseLeave={toggle} >
//                 <button
//                     className="hover:text-blue-400"
                    
//                 >{item.name}</button>
//                 <div className={`absolute top-8 z-30 w-[350px] min-h-[300px] flex flex-col py-4 rounded-md ${transClass}`}>
//                     {
//                       menuItems.map(item =>
//                         <Link
//                             key={item?.route}
//                             className="hover:bg-white hover:text-black px-4 py-1"
//                             href={item?.route || ''}
//                             onClick={toggle}
//                         >{item.name}</Link>
//                     )
//                     }
//                 </div>
//             </div>
//             {/* {
//                 isOpen
//                     ?
//                     <div
//                         className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
//                         onClick={toggle}
//                     ></div>
//                     :
//                     <></>
//             } */}
//         </>
//     )
// }

// export default Dropdown

import React, { useState } from 'react'
import Link from 'next/link';

import { menus } from '../constants';

export default function Dropdown({ subMenuItems }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    // <div className="dropdown-menu flex flex-col">
    //   <ul>
    //    {subMenuItems.map(item => {
    //       return (
    //         <li>{item.name}</li>
    //       );
    //     })}
    //   </ul>
    // </div>
    <div onMouseOver={() => setDropdown(true)} onMouseOut={() => setDropdown(true)}>
      { dropdown && <ul className="dropdown-menu flex flex-col shadow-lg rounded">
        {subMenuItems.map((item) => (
          <li key={item.title} className="px-4 py-2">
            <a className="text-white" href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>  }   
    </div>
      
  );
}