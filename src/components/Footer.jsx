import logo from '../assets/logo.webp'

const Footer = () => {
  return (
    <footer className='py-5 mt-20 flex items-center backdrop-blur-lg  bg-gradient-to-b from-gray-100/20 to-transparent'>
    <div className="container sm:px-8 px-2 mx-auto flex items-center justify-between">
        <div className='flex items-center'>
            <img className='sm:w-16 w-14' src={logo} alt="logo" />
            <h2 className='ml-2 text-white font-bold sm:text-2xl text-xl'>ZeroOne</h2>
        </div>

        <div className='text-white sm:text-xl flex sm:flex-row flex-col items-end'>
            <a className='ml-4' href="https://x.com/010ZeroOne010">Community Updates</a>
            <a className='ml-4' href="mailto:01zeroonecoin01@gmail.com">Contact Us</a>
        </div>
    </div>
    </footer>
  )
}

export default Footer