import React from 'react'

const Picture = ({ picture, isFullSize, onClick }) => {
    return (
        <img className={`p-1 ${isFullSize ? 'col-12' : 'col-4'}`} src={picture} onClick={onClick} />
    )
}

export default Picture