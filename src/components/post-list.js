import React from '@/lib/react';
import PostListItem from '@/components/post-list-item';

let postsDataArr = [];
let itemsCount = 10;


const PostListSearch = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const searchTerm = event.target.search.value.trim();

    if (searchTerm.length === 0) {
      alert('Please type something to search');
    }

    const filteredPosts = postsDataArr.filter(({title, body}) => {
      return title.includes(searchTerm) || body.includes(searchTerm);
    });

    PostList(postsDataArr, filteredPosts);
  };

  return (
    React.createElement('form', {onsubmit: onSubmitHandler},
      [
        React.createElement('input', {
          className: 'search-bar',
          type: 'text',
          name: 'search'}, ''),

        React.createElement('button', {
            className: 'btn-search',
            type: 'submit'},

          'SEARCH')

      ]))
};


const MoreButton = () => {

  const onClickHandler = () => {
    itemsCount += 10;
    PostList()
  };

  return (
    React.createElement('button', {
        onclick: onClickHandler,
        className: 'btn-more'},

      'GET MORE'))
};


const PostList = (data, filteredPosts = '') => {
  if (data) {
    postsDataArr = data;
  }

  let itemsArr = postsDataArr.slice(0, itemsCount)
    .map( PostListItem );

  if (filteredPosts) {
    itemsArr = filteredPosts.slice(0, itemsCount)
      .map( PostListItem );
  }

  const listElement =
    React.createElement('div', undefined, [
      PostListSearch(),

      React.createElement('ul', undefined, itemsArr),

      MoreButton()
    ]);

  const rootElement = document.getElementById('app');
  rootElement.innerHTML = '';
  React.render(listElement, rootElement);
};

export default PostList;
