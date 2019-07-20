const url = 'https://my-json-server.typicode.com/ryanboris/instaclone/db';

axios
    .get(url)
    .then(response => {
        response.data.posts.forEach(post => {
            const app = document.querySelector('#app');
            const postContainer = document.createElement('div');
            const username = document.createElement('div');
            const thumbnailUrl = document.createElement('img');
            const imgUrl = document.createElement('img');
            const likes = document.createElement('div');
            const timestamp = document.createElement('div');

            app.appendChild(postContainer);
            postContainer.appendChild(username);
            postContainer.appendChild(thumbnailUrl);
            postContainer.appendChild(imgUrl);
            postContainer.appendChild(likes);
            postContainer.appendChild(timestamp);

            postContainer.className = 'post';
            username.className = 'username';
            thumbnailUrl.className = 'thumbnail';
            imgUrl.className = 'img-url';
            likes.className = 'likes';
            timestamp.className = 'timestamp';

            username.innerHTML = post.username;
            likes.innerHTML = post.likes;
            timestamp.innerHTML = post.timestamp;

            thumbnailUrl.setAttribute('src', post.thumbnailUrl);
            imgUrl.setAttribute('src', post.imageUrl);

        })
    })
    .catch(err => {
        console.error(err);
    })