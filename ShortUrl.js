class ShortUrl {

  constructor(url, num) {
    this.originalUrl = url || '';
    // this.shortUrl = this.encode(num) || '';
  }
  static encode(int) {
    const chars = 'abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'; // BASE 62
    let shortened = '';

    while (int) { // while creater than 0
      shortened += chars[int % 62]; // get char
      console.log(shortened);
      int = Math.round(int / 62); // divide int
    }

    return shortened;
  }

  static decode(string) {
    const chars = '01234567890abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = 1;
  }
}

module.exports = ShortUrl;
