export type TDestination = {
    id: string,
    name: string,
    district: string,
    pincode: number,
    Tags:any,
    description:string,
    userId:string,
    image?:string[],
    rating:any,
    hotel:any,
    state:any,
    review:any,
    like:any,
    approval: string,
    reviewCount: number|null,
    createdAt:string,
    updatedAt:string
    stateLocationId:string|null,
    owner:string|null
}