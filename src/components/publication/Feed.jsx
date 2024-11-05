import React from 'react'
import PublicationList from './PublicationList.jsx'

const Feed = () => {
    return (
        <>
            <header className="content__header">
                <h1 className="content__title">Timeline</h1>
                <button className="content__button" onClick={() => getPublications(1, true)}>Mostrar nuevas</button>
            </header>

            <PublicationList
                publications={''}
                getPublications={''}
                page={''}
                setPage={''}
                more={''}
                setMore={''}
                isProfile={''}
            />
            <br />
        </>
    )
}

export default Feed