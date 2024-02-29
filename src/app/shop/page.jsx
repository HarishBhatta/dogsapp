import ShopDisplay from "./shopdisplay";

export const metadata = {
    title: 'Shop Products',
    description: 'Buy Products at an affordable price',
}

export default async function Shop(){
    return <ShopDisplay />
}