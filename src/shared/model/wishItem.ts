export class WishItem {

  constructor(public wishName: string, public isCompleted: boolean = false) {
    this.wishName = wishName;
    this.isCompleted = isCompleted;
  }
}
