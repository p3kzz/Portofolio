import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import {} from '@inertiajs/react';
import 'remixicon/fonts/remixicon.css'
const MainLayout = ({ children, title }) => {
  return (
    <>
        <div className='container mx-auto px-12'>
            <Navbar />
            <main>{children}</main>
            <Footer/>
        </div>
     </>
  )
}

export default MainLayout
