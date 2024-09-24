const writeBtn = document.querySelector('#writeBtn');
const postList = document.getElementById('postList');
const postTitleInput = document.createElement('input'); // New input for post title
const postContentInput = document.createElement('textarea'); // New textarea for post content
const nicknameInput = document.createElement('input'); // New input for nickname
const submitPostButton = document.createElement('button'); // New button for submitting post

let posts = [];

// Create input fields for post creation
function createPostInputs() {
    postTitleInput.placeholder = "제목을 입력하세요...";
    postContentInput.placeholder = "여기에 글을 작성하세요...";
    nicknameInput.placeholder = "닉네임을 입력하세요...";
    nicknameInput.style.marginBottom = "10px"; // Add margin for better spacing
    submitPostButton.innerText = "게시글 작성";
    
    // Append inputs to the container
    postList.appendChild(nicknameInput);
    postList.appendChild(postTitleInput);
    postList.appendChild(postContentInput);
    postList.appendChild(submitPostButton);

    // Add event listener for the submit button
    submitPostButton.onclick = submitPost;
}

// Handle post submission
function submitPost() {
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();
    const nickname = nicknameInput.value.trim();

    if (title === "" || content === "" || nickname === "") {
        alert("제목, 내용, 그리고 닉네임을 입력하세요.");
        return;
    }

    // Create new post object
    const newPost = {
        id: posts.length + 1,
        title: title,
        content: content,
        nickname: nickname, // Include nickname in post object
        views: 0
    };

    // Add new post to the posts array
    posts.push(newPost);
    displayPosts();

    // Clear input fields
    postTitleInput.value = "";
    postContentInput.value = "";
    nicknameInput.value = ""; // Clear nickname input
}

// Display posts in the post list
function displayPosts() {
    postList.innerHTML = ''; // Clear existing posts
    posts.forEach((post) => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');

        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <p class="nickname" style="font-size: 12px; color: #666;">닉네임: ${post.nickname}</p>
            <p class="views">조회수: ${post.views}</p>
            <div class="content" style="display: none;">${post.content}</div>
        `;

        postItem.onclick = function() {
            const contentDiv = postItem.querySelector('.content');
            contentDiv.style.display = contentDiv.style.display === 'block' ? 'none' : 'block'; // Toggle content visibility
            post.views += 1; // Increment view count
            postItem.querySelector('.views').innerText = `조회수: ${post.views}`; // Update view count display
        };

        postList.appendChild(postItem);
    });

    // Append input fields for new post creation
    postList.appendChild(nicknameInput);
    postList.appendChild(postTitleInput);
    postList.appendChild(postContentInput);
    postList.appendChild(submitPostButton);
}

    // Append input fields for new post creation
    postList.appendChild(nicknameInput);
    postList.appendChild(postTitleInput);
    postList.appendChild(postContentInput);
    postList.appendChild(submitPostButton);


// Initialize input fields when the page loads
createPostInputs();


const loginBox = document.getElementById('login-box');

// Variables for dragging functionality
let isDragging = false;
let offsetX, offsetY;

// Make the login box draggable
loginBox.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - loginBox.getBoundingClientRect().left;
    offsetY = e.clientY - loginBox.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        loginBox.style.left = e.clientX - offsetX + 'px';
        loginBox.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Close the login box
function closeLogin() {
    loginBox.style.display = 'none';
}