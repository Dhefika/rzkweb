import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const getVariants = async () => {
    const res = await prisma.variant.findMany({
        select:{
            id: true,
            stock: true,
            productId: true,
            product: true,
            colorId: true,
            color: true,
            sizeId: true,
            size: true,
        }
    });
    return res;
}

const getProducts = async () => {
    const res = await prisma.product.findMany();
    return res;
}

const getColors = async () => {
    const res = await prisma.color.findMany();
    return res;
}


const Variant = async () => {
    const [variants, products] = await Promise.all([
        getVariants(),
        getProducts()
    ]);

  return (
    <div>
        <table className="table w-full bg-white">
            <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Produk</th>
                    <th className="text-center">Variasi</th>
                    <th className="text-center">Harga</th>
                    <th className="text-center">Stok</th>
                    <th className="text-center">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (variants.filter((variant) => variant.product.id === product.id).map((variant, index) => (
                    <tr key={variant.id}>
                        <td className="text-center">{index + 1}</td>
                        {index === 0 && (
                            <td rowSpan={variants.filter((v) => v.product.id === product.id).length} className="text-center">{product.productName}</td>
                        )}
                        <div className="flex">
                            <td className="w-1/2 flex justify-center">
                                {variant.color.colorName}
                            </td>
                            <td className="w-1/2 flex justify-center">
                                {variant.size.sizeName}
                            </td>
                        </div>
                        <td className="text-center">{variant.product.productPrice}</td>
                        <td className="text-center">{variant.stock}</td>
                        <td className="text-center"></td>
                    </tr>
                ))))}
            </tbody>
        </table>
    </div>
  )
}

export default Variant