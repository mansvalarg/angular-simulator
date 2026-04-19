export class Collection<T> {

  private items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  getItem(index:number): T {
    return this.items[index];
  }

  eraseAll() {
    this.items = [];
  }

  deleteItem(index:number) {
    this.items.splice(index, 1);
  }

  replaceItem(index:number, newItem: T): void {
    this.items[index] = newItem;
  }

}

const guns = new Collection<string>(['M2HB', 'M1911', 'D50', 'SW500']);
const magSize = new Collection<number>([100, 7, 8]);