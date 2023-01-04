const tweets = {
  0: {
    username: "muhammed",
    tweet_content:
      "Dear visitor Welcome to my first project<br/>I hope you like this simple project",
  },
};

let tweet_id = 1;
function newElement() {
  const today = new Date();
  const username = document.getElementById("myUsername").value;
  const text = document.getElementById("myInput").value;
  const time_now = today.getHours() + ":" + today.getMinutes();
  const new_tweet = buildTweet({ text, time_now, tweet_id, username });

  // Add tweet
  document.getElementById("tweet_container").innerHTML =
    document.getElementById("tweet_container").innerHTML + new_tweet;

  // Reset input values
  document.getElementById("myInput").value = "";
  document.getElementById("myUsername").value = "";

  // Add tweet to the array
  tweets[tweet_id] = { username: username, tweet_content: text };
  // increment the id
  tweet_id += 1;
}

function buildTweet({ tweet_id, username, text, time_now }) {
  return `
  <div class="tweet" id="${tweet_id}">
    <img
      class="tweet_logo"
      src="https://avatars.githubusercontent.com/u/76035910?v=4"
    />
    <div class="tweet_main">
      <div class="tweet_header">
        <div class="tweet_name">${username}</div>
        <div class="tweet_slug">@${username}</div>
        <div class="tweet_time">${time_now}</div>
      </div>
      <div class="content">${text}</div>
      <br />
      <div class="tweet_icon">
        <i class="fas fa-heart" onclick="click_love(${tweet_id})">Like</i>
        <i class="fas fa-retweet" onclick="retweet(${tweet_id})">Retweet</i>
      </div>
    </div>
  </div>

`;
}

function click_love(id) {
  if (document.getElementById(id).className == "tweet") {
    document.getElementById(id).classList.add = "love_clicked";
    document.getElementById(id).style.background = "#1da0f2";
  } else {
    document.getElementById(id).classList.remove = "love_clicked";
    document.getElementById(id).style.background = "";
  }
}

function retweet(tw_id) {
  const today = new Date();
  const time_now = today.getHours() + ":" + today.getMinutes();
  const tweet = tweets[tw_id];
  const new_id = tweet_id;
  const newTweet = buildTweet({
    time_now,
    text: tweet.tweet_content,
    tweet_id: new_id,
    username: tweet.username,
  });
  document
    .getElementById("tweet_container")
    .insertAdjacentHTML("afterbegin", newTweet);
  tweet_id += 1;
}
