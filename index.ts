var arrTuple : [string,number] = ["Dat", 20];
var arrNumber :number[] =[1, 2, 3, 4];
var arrString: string[]= ["a", "b", "c"];
var unionType : "Thành công" | "Thất bại" = "Thành công";
type TypeProduct = {
    id: number,
    name: string,
    price: number
}
const products: TypeProduct[] = [
    { id: 1, name: "Ta Quoc Hung", price: 3000 },
    { id: 2, name: "Ta Quoc Hung", price: 3000 },
]
const showProduct = (data: TypeProduct[]): string => {
    if (!Array.isArray(data)) return 'Data is not arary';
    return data.map((item: TypeProduct) =>
        `<div>${item.name}</div>`
    ).join("")
}
showProduct(products);