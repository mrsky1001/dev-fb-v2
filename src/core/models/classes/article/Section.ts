/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */


import GenericModel from "../app/GenericModel";
import type {ISection} from "../../interfaces/article/ISection";
import config from "../../../../config/config";
import type {IPost} from "../../interfaces/article/IPost";
import type {IUser} from "../../interfaces/auth/IUser";
import User from "../auth/User";

export default class Section extends GenericModel implements ISection {
    private _name = ''
    private _domain: string = config.server.domain
    private _description = ''
    private _posts: IPost[] = []
    private _creatingDate = new Date()
    private _author: IUser = new User()

    constructor(initObj?: ISection) {
        super(initObj)
        initObj && this.init(initObj)
    }

    init(initObj: ISection): void {
        this.name = initObj.name ? initObj.name : this._name
        this.description = initObj.description ? initObj.description : this._description
        this.domain = initObj.domain ? initObj.domain : this.domain
        this.posts = initObj.posts ? initObj.posts : this._posts
        this.author = initObj.author ? initObj.author : this._author
        this.creatingDate = initObj.creatingDate ? initObj.creatingDate : this._creatingDate

        this.jsonFormatObjects = [{name: 'status', valuePath: 'value'}]
    }

    get domain(): string {
        return this._domain
    }

    set domain(value: string) {
        this._domain = value
    }

    get description(): string {
        return this._description
    }

    set description(value: string) {
        this._description = value
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get posts(): IPost[] {
        return this._posts
    }

    set posts(value: IPost[]) {
        this._posts = value
    }

    get creatingDate(): Date {
        return this._creatingDate
    }

    set creatingDate(value: Date) {
        this._creatingDate = value
    }

    get author(): IUser {
        return this._author
    }

    set author(value: IUser) {
        this._author = value
    }
}
