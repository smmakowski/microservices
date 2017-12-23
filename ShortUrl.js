class ShortUrl {

  constructor(url, num) {
    this.originalUrl = url || '';
    this.shortUrl = ShortUrl.encode(num) || '';
  }
  static encode(int) {
    const chars = 'abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'; // BASE 62
    let shortened = '';

    while (int) { // while creater than 0
      shortened += chars[int % 62]; // get char
      console.log(shortened);
      int = Math.round(int / 62); // divide int
    }

    return shortened.split('').reverse().join('');
  }

  static decode(string) {
    const chars = 'abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let num = 0;
    for (let i = 0; i < string.length; i++) {
      num = num * 62 + chars.indexOf(string[i]);
    }
    return num;
  }
}

module.exports = ShortUrl;
