import React, { useState } from 'react'
import { AuthModal } from '../../components/auth/AuthModal'
import Header from '../../components/Header/Header'
// import TopTeachers from '../../components/top-teachers/TopTeachers';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenRegistrationForm = () => {
        setIsOpen(true)
    }

    const handleCloseRegistrationForm = () => {
        setIsOpen(false)
    }
    return (
        <>
            <Header />
            <div>Home page!</div>
            <button onClick={handleOpenRegistrationForm}>Sing in</button>
            {isOpen && <AuthModal onClose={handleCloseRegistrationForm} />}
            {/* <TopTeachers /> */}
        </>
    )
}

export default HomePage
