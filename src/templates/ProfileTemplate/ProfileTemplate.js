import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileFooter from './ProfileFooter/ProfileFooter';

export default function ProfileTemplate(props) {

    const { Component } = props;

    return (
        <>
            <ProfileHeader />
            <Component />
            <ProfileFooter />
        </>
    )
}