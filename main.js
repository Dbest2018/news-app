const newsContainer = document.getElementById("newsContainer");

function getNews() {
  try {
    fetch(" https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news")
      .then((data) => data.json())
      .then((news) => {
        for (let i = 0; i < news.length; i++) {
          newsContainer.innerHTML += `
                  <div class="news__section" onclick="showSingleNews(${news[i].id})">
                    <div class="news__author">${news[i].author}</div>
                    <div class="news__avatar">
                        <img src=${news[i].avatar} alt="avatar"/>
                    </div>
                    <div class="news__title">${news[i].title}</div>
                    <div class="news__url">${news[i].url}</div>
                  <div/>
                  
              `;
        }
      });
  } catch (err) {
    console.log(err);
    newsContainer.innerHTML += `
            <div class="error">
            Unable to get news at the moment
            </>
        `;
  }
}

function showSingleNews(id) {
  try {
    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/${id}`)
      .then((data) => data.json())
      .then((newsSection) => {
        console.log(newsSection);
        newsContainer.innerHTML = `
            <div class="news__section single__page">
              <div class="news__author">${newsSection.author}</div>
              <div class="news__avatar">
                  <img src=${newsSection.avatar} alt="avatar"/>
              </div>
              <div class="news__title">${newsSection.title}</div>
              <div class="news__url">${newsSection.url}</div>
            <div/>

        `;
      });
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("load", getNews);
