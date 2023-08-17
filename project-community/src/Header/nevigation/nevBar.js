import {Link}from 'react-router-dom'
import {useState} from 'react'
import {ReactComponent as SrLogo} from './SrchComp/searchIcon.svg'
// import {ReactComponent as ca} from './SrchComp/searchIcon.svg'
import SearchBar from './SrchComp/SearchBar';
import BasicMenu from '../../components/materialui/profileManu';
// bg-purple-600 
export default function  NevBar(){
    return(
        <div className=' fixed text-center grid grid-cols-7 bg-gray-900 p-4 text-white w-full'>

            <Link to="" className=' font col-span-1 p-1'>ComUNIV</Link>
            <div className='col-span-2 '><SearchBar/></div>
            <Link to="" className='col-span-1 p-1'>Activities</Link>
            <Link to="" className='col-span-1 p-1'>Messages</Link>
            <Link to="" className='col-span-1 p-1'>Notifications</Link>
            <BasicMenu/>
        </div>
    );
}
