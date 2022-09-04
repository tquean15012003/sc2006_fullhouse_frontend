import React from 'react'
import GuestModeHeader from './GuestModeHeader/GuestModeHeader';
import GuestModeFooter from './GuestModeFooter/GuestModeFooter';

export default function GuestModeTemplate(props) {

    const { Component } = props;

    return (
        <>
            <GuestModeHeader />
            <Component />
            <GuestModeFooter />
        </>
    )
}