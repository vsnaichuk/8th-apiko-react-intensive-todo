class ApiService {

  _apiBase = 'https://jsonplaceholder.typicode.com';

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} resived status ${res.status}`);
    }

    return await res.json();
  }

  getAllPosts = async () => {
    const res = await this.getResourse('/posts/');
    return res.map(this._transformPost);
  }

  _transformPost = ({ id, title, body }) => {
    return {
      id,
      title,
      body
    };
  }
}

export const apiService = new ApiService();
