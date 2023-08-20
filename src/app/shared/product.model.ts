export interface IProduct {
  id: number
  title: string
  unit?:number
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export interface IRating {
  rate: number
  count: number
}
