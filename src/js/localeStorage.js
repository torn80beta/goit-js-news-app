class FavoriteStorage {
  constructor() {
    this.KEY = 'FAVORITE_NEWS';
    this.selectedNews = [];
  }

  getNews() {
    const news = localStorage.getItem(this.KEY);
    if (news) {
      return JSON.parse(news);
    }
    return [];
  }

  addNews(item) {
    this.selectedNews.push(item);
    localStorage.setItem(this.KEY, JSON.stringify(this.selectedNews));
  }
}

class ReadStorage {
  constructor() {
    this.KEY = 'READ_NEWS';
    this.selectedNews = [];
  }

  getNews() {
    const news = localStorage.getItem(this.KEY);
    if (news) {
      return JSON.parse(news);
    }
    return [];
  }

  addNews(item) {
    this.selectedNews.push(item);
    localStorage.setItem(this.KEY, JSON.stringify(this.selectedNews));
  }
}
