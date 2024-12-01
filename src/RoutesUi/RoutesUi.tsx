
import Register from '@/page/auth-register/Register'
import DesignСourses from '@/page/Design-courses/DesignСourses'
import { HomePage } from '@/page/HomePage/HomePage'
import LoginForm from '@/page/loginForm/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RoutesUi = () => {
    return (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                    <Route path="/DesignСourses" element={<DesignСourses />} />
                    <Route path='/Register' element={<Register />} />
                    {/* <Route path='/EditProfile' element={<EditProfile />} /> */}
                </Routes>
    )
}
