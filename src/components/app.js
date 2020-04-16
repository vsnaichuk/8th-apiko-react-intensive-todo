import { apiService } from '@/services/api-service';
import PostList from '@/components/post-list';

const App = () => {
  const { getAllPosts } = apiService;

  const onPostsLoaded = data => {
    PostList(data);
  };

  const loadPosts = () => {
    getAllPosts().then(onPostsLoaded);
  };

  loadPosts();
};

export default App;
