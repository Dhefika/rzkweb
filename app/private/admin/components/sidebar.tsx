import '../style.css'

function Sidebar () {
  return (
    <div className='sidebar-isi'>
    <div className='container-sidebar'> 
      <h1 className='title-pesanan'>Pesanan</h1>
      <h1 className='isi-Pesanan'>Pesanan Saya</h1>
      <h1 className='title-produk'>Produk</h1>
      <h1 className='isi-produk'>Produk Saya</h1>
      <h1 className='produk-habis'>Produk habis</h1>
      <h1 className='tambah-produk'>Tambah produk</h1>
    </div>

         <div className='isi'>
                <h1 className='order'>No order</h1>
                <h1 className='date'>date</h1>
                <h1 className='ship-to'>ship to</h1>
                <h1 className='order-total'>Order total</h1>
                <h1 className='status'>Status</h1>
        </div>
    </div>
  )
}

export default Sidebar;