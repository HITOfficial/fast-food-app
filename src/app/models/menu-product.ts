export interface IMenuProduct {
    productId?: string,
    productImage?: string,
    productCategory?: string,
    description?: string,
    ingredients?: string,
    calories?: number,
    quantity?: number,
    price?: number,
    opinions?: {
        user?: string,
        opinion?: string
    }[]
    productImages?: string[]
}