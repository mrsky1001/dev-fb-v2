export interface IFilterObj {
    likes?: [1, -1]
    creatingDate?: [1, -1]
    status?: [1, -1]
}

export interface IPostsFilter {
    text: string
    filterObj: IFilterObj
    icon: string
}
