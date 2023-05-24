"use client"

import Navbar from "../components/navbar"
import Image from 'next/image'

const Cart = () => {
    return (

<body>
    <div className="flex">
        <Navbar />
        <main id="mainCart" className="w-screen pl-20 pr-20 pt-10 flex">
            <main className="w-6/12">
                <p id="cartBelanja" className="text-black uppercase font-black text-3xl mb-2">tas belanja</p>
                <div className="box w-[90%] border-2 mb-2 relative p-5 flex">
                    <div className="box-left h-full w-1/3 mr-2">
                        <Image src='/GRS03747.jpeg'  alt="" width={100} height={200} id="imgCart"/>
                    </div>
                    <div className="box-right">
                        <p className="capitalize font-['Lora'] font-semibold text-xl text-black">therary</p>
                        <p className="capitalize font-['Lora'] text-black text-lg">ukuran : allsize</p>
                        <p className="capitalize font-['Lora'] text-black text-lg">warna : black</p>
                        <p className="capitalize font-['Lora'] text-black text-lg">harga : 52.500</p>
                        <div className="qty-counter">
                            <p>- 1 +</p>
                        </div>
                        <p className="capitalize font-['Lora'] text-black font-bold text-lg">Total : 52.500</p>
                    </div>
                    <button className="absolute right-3 bottom-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a6a6a6" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </div>
                <div className="box w-[90%] border-2 mb-2 relative p-5 flex">
                    <div className="box-left h-full w-1/3 mr-2">
                        <Image src='/5E888DA1-AF25-4BFA-ADD7-A5ED7EC3ED47.png'  alt="" width={100} height={200} id="imgCart"/>
                    </div>
                    <div className="box-right">
                        <p className="capitalize font-['Lora'] font-semibold text-xl text-black">therary</p>
                        <p className="capitalize font-['Lora'] text-black text-lg">ukuran : allsize</p>
                        <p className="capitalize font-['Lora'] text-black text-lg">warna : black</p>
                        <p className="capitalize font-['Lora'] text-black text-lg">harga : 52.500</p>
                        <div className="qty-counter">
                            <p>- 1 +</p>
                        </div>
                        <p className="capitalize font-['Lora'] text-black font-bold text-lg">Total : 52.500</p>
                    </div>
                    <button className="absolute right-3 bottom-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a6a6a6" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </div>
            </main>
            <aside className=" w-6/12 mt-11 border-2 p-7 relative" id="totalBelanja">
                <p className=" text-black uppercase font-black text-xl text-center" id="cartBelanja">total tas belanja</p>
                <div className="checkout absolute bottom-4 right-2">
                    <p className="font-['Lora'] uppercase text-black font-black mr-3">subtotal : Rp 161.500,00</p>
                    <button className=" w-40 h-8 bg-[#434343] uppercase text-white font-['Lora'] text-xs ml-6 font-bold mt-3">pembayaran</button>
                </div>
                <div className="pesanan flex">
                    <p className=" w-24">pesanan :</p>
                    <div className="detail w-full">
                        <p>Therary (Black,Allsize)</p>
                        <p>Daily Lyra (Dusty Rose,Allsize)</p>
                    </div>
                    <div className="qty-detail">
                        <p>1</p>
                        <p>1</p>
                    </div>
                </div>
            </aside>
        </main>
    </div>
</body>
)
}

export default Cart