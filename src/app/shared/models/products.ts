export interface IProduct {
  id: string
  name: string
  description: string
  price: number
  productType: string
  productBrand: string
  pictureUrl:string
  variants:[
    {id:number,
    color:string,
    size:string,
    price:string}
  ]
}