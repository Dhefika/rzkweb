"use client"

import Link from "next/link"
import Navbar from  './components/navbar';
import Footer from './components/footer';

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('nav[role="nav"] a');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView();
    });
  });
});


const Home = () => {
  return (
    <body>
      <Navbar />
      <main className="flex mb-3">
        <aside id="aside-1" />
        <main id="main-1" className="flex flex-col justify-center pl-28">
          <p className="uppercase text-6xl text-white mb-5">daily lyra</p>
          <p className="uppercase text-6xl text-white mb-5">is back</p>
          <p className="uppercase text-xl text-white mb-4">get it before it`s gone!</p>
          <Link href={'/shop'} className="w-min p-0.5 border-2">
            <div className="w-28 h-14 flex justify-center items-center" id="box">
              <p className="uppercase text-sm text-white h-min">
                shop now
              </p>
            </div>
          </Link>
        </main>
      </main>
      <main>
        <main id="main-2" className=""></main>
        <aside className="w-full" id="aside-2">
          <p className="uppercase text-6xl text-black" id="best">best seller</p>
        </aside>
      </main>
      <main id="main-3">
        <aside id="aside-31" className=" w-1/2"> </aside>
        <aside id="aside-32" className="w-1/2"></aside>
        <p className="z-0 uppercase text-white text-8xl h-48" id="sale">sale</p>
      </main>
      <Footer />
    </body>
  )
}

export default Home