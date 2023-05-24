const Navbar = () => {
return (
    <nav role="nav" className="nav w-screen bg-white flex justify-around border-b-2 border-[#a6a6a6] h-16" id="navbar">
        <div className="navbar-left grid">
            <a href={'/#main-1'} className="grid">
                <img src="./316609274_494526255980765_2425076201375607374_n-removebg-preview111.png"
                    className="h-12 self-center" />
            </a>
        </div>
        <div className="navbar-mid flex w-3/5">
            <a href={'/shop'} className="uppercase font-['Montserrat'] navList self-center mr-20">Shop</a>
            <a href={'/#main-2'} className="uppercase font-['Montserrat'] navList self-center mr-20">Best Seller</a>
            <a href={'/#main-3'} className="uppercase font-['Montserrat'] navList self-center mr-20">sale</a>
        </div>
        <div className="navbar-right flex justify-end w-1/6">
            <a href={'/cart'} className="flex align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#a6a6a6"
                    className="bi bi-bag-fill self-center mr-5" viewBox="0 0 16 16">
                    <path
                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                </svg>
            </a>
            <a href={'/profile'} className="flex align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#a6a6a6"
                    className="bi bi-person-fill self-center" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
            </a>

        </div>
    </nav>
)
}

export default Navbar