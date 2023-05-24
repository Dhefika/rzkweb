import Navbar from "../components/navbar"
import Link from 'next/link'

const page = () => {
  return (
    <body>
        <Navbar />
        <main id="shopMain" className=" pt-8">
          <aside>
            <Link href={'/'}>
              <section id="section1"/>
              <p className=" font-['Lora'] text-black capitalize ml-[5px] mt-2 mb-2">daily lyra</p>
              <article className="flex">
                <div className="box h-[16px] w-[16px] bg-[#19191b] ml-[5px]" />
                <div className="box h-[16px] w-[16px] bg-[#dea098] ml-[5px]" />
              </article>
            </Link>
          </aside>
          <aside>
            <Link href={'/'}>
              <section id="section2"/>
              <p className=" font-['Lora'] text-black capitalize ml-[5px] mt-2 mb-2">daily lyra</p>
              <article className="flex">
                <div className="box h-[16px] w-[16px] bg-[#19191b] ml-[5px]" />
                <div className="box h-[16px] w-[16px] bg-[#3128c2] ml-[5px]" />
                <div className="box h-[16px] w-[16px] bg-[#dea098] ml-[5px]" />
              </article>
            </Link>
          </aside>
          <aside>
            <Link href={'/'}>
              <section id="section3"/>
              <p className=" font-['Lora'] text-black capitalize ml-[5px] mt-2 mb-2">T-Shirt OverSize</p>
              <article className="flex">
                <div className="box h-[16px] w-[16px] bg-[#19191b] ml-[5px]" />
                <div className="box h-[16px] w-[16px] bg-[#8191e6] ml-[5px]" />
              </article>
            </Link>
          </aside>
        </main>
    </body>
  )
}

export default page