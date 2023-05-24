import '../style.css'

function Navbar() {
  return (
    <div className='header'> 
      <img className='logo-title' src={require ('../assets/Navbarlogo.png')}alt=""/>
      <img className='profile-title' src={require ('../assets/Profile.png')}alt=""/>
    </div>
  )
}

export default Navbar;
