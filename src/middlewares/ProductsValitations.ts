

export class ProductsValitations {
    public static dataValidate(name_product: string, purchase_price: number, sale_price: number): boolean {
        return (name_product == undefined || purchase_price == undefined || sale_price == undefined) || (name_product == null || purchase_price == null || sale_price == null)
    }
}