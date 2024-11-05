import React from 'react'
import UserList from './UserList'

const People = () => {
  return (
    <>
    <header className="content__header">
      <h1 className="content__title">Gente</h1>
    </header>

    <UserList
      users={''}
      getUsers={''}
      following={''}
      setFollowing={''}
      more={''}
      page={''}
      setPage={''}
      setCounters={''}
    />
  </>
  )
}

export default People
