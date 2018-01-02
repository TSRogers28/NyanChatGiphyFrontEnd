
export class GiphyModel {

  url: String;

  width: String;

  height: String;

  constructor(values: Object = {} ){
    Object.assign(this, values);
  }

  toString(): String {
    return 'url: ' + this.url + 'width: ' + this.width + 'height: ' + this.height;
  }

}
