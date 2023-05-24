const Footer = () => {
return (
<footer>
  <div id="footer-top" className="flex justify-around pt-28">
    <div className="footer-left">
      <p className="uppercase font-black text-black mb-8">about rzk collection</p>
      <p className="text-black text-sm mb-20">RZK Collection is recommended by famous magazine<br />editors. RZK Collection will do its best to delight you <br />with the highest quality and give you a <br />fantastic fashion experience.</p>
      <p className="text-[#848992]] text-[10px]">Office hours : Mon to Fri 8:00-17:00 | Sat to Sun 8:00-16:00 |  Public Holidays: Off</p>
    </div>
    <div className="footer-mid">
      <p className="uppercase font-black text-black mb-8">help</p>
      <a className="text-black text-sm">My orders</a>
    </div>
    <div className="footer-right flex flex-col">
      <p className="uppercase font-black text-black mb-8">keep in touch</p>
      <p className="text-black text-sm mb-2">Subscribe to receive updates, <br />access to exclusive launches, <br />and more</p>
      <input type="text" placeholder="Enter your email address" id="subscribe" className="mb-2"/>
      <button type="submit" className=" w-3/5 h-4 text-[9px] bg-black text-white uppercase">subscribe</button>
    </div>
  </div>
  <div id="footer-bot" />
</footer>
)
}

export default Footer