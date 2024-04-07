'use client'
import UserDetailPage from '@/components/users/UserDetail'
import React from 'react'

const UserDetail = ({params} : {
  params : {
    slug : string[],
  }
}) => {
  console.log(params.slug[0]);
  return (
    params.slug[0] ?
    <UserDetailPage id={params.slug[0]}/>
    : 
    <></>
  )
}

export default UserDetail