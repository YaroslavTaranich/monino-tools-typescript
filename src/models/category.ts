export interface Category {
  id: number
  name: string
  url: string
  type: string
  htmlTitle: string
  htmlDiscription: string
  imgSrc: string
}

export type CategoryResponse = Category[]
