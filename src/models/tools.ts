export interface Tool {
  id: number
  categoryId: number
  categoryName: string
  toolName: string
  price: number
  zalog: number
  toolType: string
  toolSpecification: string
  specification: ISpecification[]
  toolDiscriptionTitle: string
  toolDiscription: string
  toolUrl: string
  toolImgSrc: string
  popular: 1 | 0
  htmlTitle: string
  htmlDiscription: string
}

export interface ISpecification {
  name: string
  value: string
}

export type ToolRespone = Tool[]
