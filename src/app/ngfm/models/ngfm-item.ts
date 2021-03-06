export class NgfmItem {
    /**
     * Full name eg. `my_pic.jpg`
     */
    name = '';
    /**
      * UNIX timestamp
      */
    lastModified = new Date().getTime();
    lastModifiedDate: Date;
    created = new Date().getTime();
    createdDate: Date;
    fullPath: string[];

    selected = false;
    id: string; // Unique identifier made from all properties
    readonly itemType: string;
    get isFile() { return this.itemType === 'file'; }
    get isFolder() { return this.itemType === 'folder'; }
    constructor(init: any) {
        this.id = (<any>Object).entries(init).reduce((acc, cur) => `${acc}#${cur.join('|')}`, '');
        this.lastModifiedDate = init.lastModifiedDate ? new Date(init.lastModifiedDate) : (init.lastModified ? new Date(init.lastModified) : new Date());
        this.createdDate = init.createdDate ? init.createdDate : (init.created ? new Date(init.created) : new Date());
    }
}