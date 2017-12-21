import { BaseEntity } from './../../shared';

export class Contact implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public contact?: string,
        public message?: string,
        public created_date?: any,
        public opened?: boolean,
    ) {
        this.opened = false;
    }
}
