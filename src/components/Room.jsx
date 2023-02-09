import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'

const Room = ({ room }) => {
    const {id, name, image, size, maxPerson, description, price} = room
    return (
        <div className='bg-red-400 mb-4'>
            <div className='overflow-hidden'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Room
