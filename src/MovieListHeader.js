import React from 'react'

export default function MovieListHeader(props) {
    return (
        <div className='col text-align-center'>
            <h4>{props.header}</h4>
        </div>
    )
}
