let degreestatus = "BS"

if (degreestatus == "BS" || degreestatus == MS) {
    console.log("congrats you are qualified");
}


async function getpost() {
    try {
        const response = await axios.get(
            "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
          );
          const data = response.data;
          console.log(data);
          const tweets = data.tweets;
          console.log(tweets);
        
          const tweetsDivRef = document.querySelector(".tweets");
          tweets.map((tw) => {
            tweetsDivRef.innerHTML =
              tweetsDivRef.innerHTML+
              `<div class="tweet">
                  <img src="${tw.tweetImage}" alt="Profile Pic" />
                  <h3>${tw.tweetId}</h3>
                  <p>${tw.tweetDescription}</p>`;
          });
} catch (err) {
    console.log(err);
    alert("something wrong")
}
}




const ispakistani =false;

if(!ispakistani) {
    console.log("she is  playing cricket");
}

