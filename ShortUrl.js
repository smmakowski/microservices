class ShortUrl {
  constructor(url, shortUrl) {
    this.originalUrl = url || '';
    this.shortUrl = shortUrl || '';
  }
  static encode(int) {
    const chars = '01234567890abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // BASE 62
    let shortened = '';
    while (int) { // while creater than 0
      shortened += chars[int % 62]; // get char
      int = int / 62; // divide int
    }
  }

  static decode(string) {

  }
}

module.exports = ShortUrl;
