import React from '@/lib/react';


const PostListItem = ({ id, title, body }) => {

    return (
      React.createElement('li', undefined,
      [
          React.createElement(
          'span',
            {style: { color: 'green' }},
          `Id: ${id}`),

        React.createElement(
          'h4',
          undefined,
          `Title: ${title}`),

        React.createElement(
          'p',
          undefined,
          `Body: ${body}`)
      ]
    ))
};

export default PostListItem;



