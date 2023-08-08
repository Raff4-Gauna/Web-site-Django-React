import {connect} from 'react-redux'
// import { Popover, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState, Fragment, useEffect } from 'react'
import {NavLink,Link} from 'react-router-dom'   
// import loading_dots from 'assets/img/loading-dots.gif'
import logo from 'assets/img/logo.png'
// import DotLoader from 'react-spinners/DotLoader'




function Navbar(){

    const [loading,setLoading]=useState(true)

        window.onscroll = function() {scrollFunction()}

        function scrollFunction() {
            if(document.getElementById('navbar')){
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    document.getElementById('navbar').classList.add('shadow-navbar');
                    document.getElementById('navbar').classList.add('bg-white');
                }else{
                    document.getElementById('navbar').classList.remove('shadow-navbar');
                    document.getElementById('navbar').classList.remove('bg-white');
                }
            }
        }



    return(
        <nav id='navbar' className='w-full py-3 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                    <img 
                    src={logo}
                    width={80}
                    height={70} 
                    className=""/>
                    </Link>

                    {/* definimos las rutas en base a las vistas creadas cases/  */}
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/casos'      className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Caso</NavLink>
                    <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</NavLink>
                    <NavLink to='/blog'      className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</NavLink>
                    <NavLink to='/nosotros'  className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                    <NavLink to='/contactos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contactos</NavLink>
                    <button
                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                    
                        Contratanos
                    </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}   

const mapStateToProps= state =>({

})

export default connect (mapStateToProps, {

}) (Navbar)