export const ADDPRODUCT = "ADDPRODUCT";

export function addProduct(Product)
{
    return {
        type: 'addProduct',
        payload: {
            product: Product
        }
    }
}