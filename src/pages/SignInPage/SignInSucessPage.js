import React, { useEffect } from 'react'
import background from '../../assets/images/background.png'

export default function SignInSucessPage() {
    useEffect(() => {
        setTimeout(() => {
            window.close()
        }, 1000)
    })
    return (
        <div className="flex justify-center text-2xl items-center text-white overflow-x-hidden overflow-y-hidden w-screen h-screen" style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundosition: "right"
        }}>
            Thanks for logging in with Full House
        </div>
    )
}
