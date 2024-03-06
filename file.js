//.env
const token = "47ab8d4f01f144519b298788a03790ea";
/* mock data*/
//canal list
const mockChannel = [
  {
    id: 5502555,
    name: "nos",
    link: "https://nos.nl/",
    news: [
      {
        id: 55025156,
        title: "Tesla: A History Of Innovation (and Headaches) - WorldNewsEra",
        text:
          "Tesla has driven a long, potholed road to success. Since its 2010 IPO, the famous (and occasionally infamous) auto manufacturer has enjoyed stratospheric highs, cratered to purgatorial lows and ails about his discussions to take Tesla private using Saudi Arabia’s sovereign wealth fund, among other potential backers.s team covered Tesla Autopilot, training data generation, Project Dojo and the D1 chip, and the Teslat misrepresentation Stock Price: $297.28 .",
        url:
          "https://worldnewsera.com/news/finance/stock-market/tesla-a-history-of-innovation-and-headaches/",
        image:
          "https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39/0x0.jpg",
        publish_date: "2022-09-30 01:07:48",
        author: "Madeleine Bruder",
        authors: ["Madeleine Bruder"],
        language: "en",
        source_country: "us",
        sentiment: 0.225
      },
      {
        id: 60714174,
        title:
          "How Tesla’s Outrageous Valuation Could Destroy All Zombie Stocks - WorldNewsEra",
        text:
          "The Federal Reserve’s aggressive rate hikes so far in 2022 have ended the era of free money and exposed a worrisome dynamic throughout capital markets: zombie stocks. These are companies with poor business models that are burning cash at an alarming rate and are at risk of seeing their stock decline to $0 per share. While Tesla (TSLA) is not a zombie stock thanks to Elon Musk",
        url:
          "https://worldnewsera.com/news/finance/stock-market/how-teslas-outrageous-valuation-could-destroy-all-zombie-stocks/",
        image:
          "https://imageio.forbes.com/specials-images/imageserve/634dae39b9adccf91fc9a291/0x0.jpg",
        publish_date: "2022-10-19 13:36:50",
        author: "Madeleine Bruder",
        authors: ["Madeleine Bruder"],
        language: "en",
        source_country: "us",
        sentiment: 0.151
      },
      {
        id: 55025152,
        title: "Tesla: A History Of Innovation (and Headaches) - WorldNewsEra",
        text:
          "Tesla has driven a long, potholed road to success. Since its 2010 IPO, the famous (and occasionally infamous) auto manufacturer has enjoyed stratospheric highs, cratered to purgatorial lows and ails about his discussions to take Tesla private using Saudi Arabia’s sovereign wealth fund, among other potential backers.s team covered Tesla Autopilot, training data generation, Project Dojo and the D1 chip, and the Teslat misrepresentation Stock Price: $297.28 .",
        url:
          "https://worldnewsera.com/news/finance/stock-market/tesla-a-history-of-innovation-and-headaches/",
        image:
          "https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39/0x0.jpg",
        publish_date: "2022-09-30 01:07:48",
        author: "Madeleine Bruder",
        authors: ["Madeleine Bruder"],
        language: "en",
        source_country: "us",
        sentiment: 0.225
      }
    ]
  },
  {
    id: 1709721644696,
    link: "https://nltimes.nl",
    name: "NLTImes",
    news: [
      {
        title:
          "Fewer complaints about rising home valuations as sharp increase levels off",
        text:
          "People will file fewer objections against their home valuations this year, the homeowners’ association VEH and the property tax supervisor Valuation Chamber expect. Last year, municipalities handled around 675,000 objections when WOZ values rose 17 percent. This year, they’re only increasing by 2.8 percent, NOS reports. WOZ is the Dutch acronym used for the Real Estate Valuation Act. Every year, municipalities adjust the property values based on home prices in January the year before. In 2023, the WOZ value rose by a massive 17 percent, on average, because home prices skyrocketed in 2022. The WOZ value is used to calculate various taxes, including property tax. This year, the average WOZ increase is much lower at 2.8 percent. “Then you experience such a WOZ different than with a significant increase,” Ruud Kathmann of the Valuation Chamber told NOS. VEH expects far fewer objections this year for that reason. “Last year, people were very shocked by that 17 percent. A lower percentage feels better,” Hans Andre de la Porte of the homeowners’ interest group said. New rules also make it much less lucrative for objection agencies to file an objection on behalf of homeowners. Until last year, objection agencies received many hundreds of euros in expense reimbursements directly from the municipality if they won a procedure. Now, those fees have been reduced by 75 percent, and the municipality pays them to the citizens. Objection agencies must arrange for their clients to pay them. The government introduced the rules because municipalities were spending more and more money on these agencies. “My impression is that objection agencies, therefore, advertise significantly less,” Kathmann said. That will also result in fewer objections, he thinks.",
        url:
          "https://nltimes.nl/2024/03/06/fewer-complaints-rising-home-valuations-sharp-increase-levels",
        image:
          "https://nltimes.nl/sites/nltimes.nl/files/styles/news_article_full/public/2023-11/Depositphotos_147958435_L.jpg?h=56d0ca2e",
        images: [
          {
            url:
              "https://nltimes.nl/sites/nltimes.nl/files/styles/news_article_full_mobile_1x/public/2023-11/Depositphotos_147958435_L.jpg?h=56d0ca2e",
            width: 428,
            height: 236
          },
          {
            url:
              "https://nltimes.nl/sites/nltimes.nl/files/styles/news_article_full/public/2023-11/Depositphotos_147958435_L.jpg?h=56d0ca2e"
          }
        ],
        publish_date: "2024-03-06 00:00:00",
        authors: ["NL Times"],
        language: "en",
        sentiment: 0.07,
        entities: [
          {
            type: "LOC",
            name: "NOS",
            latitude: 61.848209381103516,
            longitude: 6.377560138702393,
            location_type: "POI"
          },
          {
            type: "LOC",
            name: "Act",
            latitude: -35.5,
            longitude: 149,
            location_type: "UNIT"
          },
          {
            type: "LOC",
            name: "Porte",
            latitude: 42.54790115356445,
            longitude: 1.8310799598693848,
            location_type: "CITY"
          }
        ]
      }
    ]
  }
];

// create hero card ...............................................
const createHero = (
  heroDiv,
  channelName,
  id,
  image,
  title,
  content,
  publishedDate,
  status
) => {
  //create Elements
  let heroImage = document.createElement("img");
  let heroContentDiv = document.createElement("div");
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let heroFooterDiv = document.createElement("div");
  let buttonGroupDiv = document.createElement("div");
  //set attribute
  heroDiv.setAttribute("class", "hero");
  heroImage.setAttribute("src", image);
  heroImage.setAttribute("alt", "hero-image");
  heroImage.setAttribute("class", "hero-image");
  heroContentDiv.setAttribute("class", "hero-content");
  buttonGroupDiv.setAttribute("class", "button-group");
  heroContentDiv.append(div);
  div.append(h3);
  //append
  switch (status) {
    case "local":
      // code block
      let readMoreButton = document.createElement("BUTTON");
      let subFooterDiv = document.createElement("div");
      let heroFooterDiv = document.createElement("div");
      let publishedDateP = document.createElement("p");
      let channelNameP = document.createElement("p");
      heroFooterDiv.setAttribute("class", "news-card-footer");
      h3.append(title);
      h3.setAttribute("class", "line-clamp");
      channelNameP.setAttribute("class", "channel-name");
      readMoreButton.setAttribute("onclick", "readMore(event)");
      subFooterDiv.setAttribute("class", "sub-footer");
      heroDiv.setAttribute("id", id);
      readMoreButton.append("read more");
      channelNameP.append(channelName);
      publishedDateP.append(publishedDate);
      subFooterDiv.append(channelNameP);
      subFooterDiv.append(readMoreButton);
      heroFooterDiv.append(publishedDateP);
      heroFooterDiv.append(subFooterDiv);
      heroContentDiv.append(heroFooterDiv);
      break;
    case "welcome":
      let createChannelButton = document.createElement("BUTTON");
      let defaultChannelButton = document.createElement("BUTTON");
      createChannelButton.setAttribute("class", "button-lg");
      createChannelButton.setAttribute("onclick", "openModal()");
      defaultChannelButton.setAttribute("class", "button-lg");
      defaultChannelButton.setAttribute("onclick", "getDefaultChannels()");
      //append
      h3.append(title);
      p.append(content);
      div.append(p);
      createChannelButton.append("create channel");
      defaultChannelButton.append("default channel");
      buttonGroupDiv.append(createChannelButton);
      buttonGroupDiv.append(defaultChannelButton);
      heroContentDiv.append(buttonGroupDiv);
      break;
    default:
    // default
  }
  heroDiv.append(heroImage);
  heroDiv.append(heroContentDiv);
};

//create channel-item
const createChannelItem = (channelListDiv, id, name) => {
  let channelItemDiv = document.createElement("div");
  let channelButton = document.createElement("BUTTON");
  let removeButton = document.createElement("BUTTON");
  //setAttribute
  channelItemDiv.setAttribute("class", "channel-item");
  channelButton.setAttribute("class", "channel-button");
  channelButton.setAttribute("onclick", "getNewsListByChannel(event)");
  channelButton.setAttribute("id", id);
  removeButton.setAttribute("onclick", "removeChannel(event)");
  removeButton.setAttribute("id", id);
  removeButton.setAttribute("class", "channel-remove");
  //append
  channelButton.append(name);
  channelItemDiv.append(channelButton);
  removeButton.append("X");
  channelItemDiv.append(removeButton);
  channelListDiv.append(channelItemDiv);
};

//create news card
const createNewsCard = (
  newsListDiv,
  channelName,
  id,
  image,
  title,
  publishedDate
) => {
  //create Elements
  let newsCardDiv = document.createElement("div");
  let newsCardImg = document.createElement("img");
  let newsCardContentDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let newsCardFooterDiv = document.createElement("div");
  let readMoreButton = document.createElement("BUTTON");
  let channelNameP = document.createElement("p");
  let publishedDateP = document.createElement("p");
  let subFooterDiv = document.createElement("div");
  let topButton = document.createElement("BUTTON");
  //setAttribute
  topButton.setAttribute("onclick", "topFunction()");
  topButton.setAttribute("id", "scroll-button");
  channelNameP.setAttribute("class", "channel-name");
  readMoreButton.setAttribute("onclick", "readMore(event)");
  newsCardFooterDiv.setAttribute("class", "news-card-footer");
  h3.setAttribute("class", "line-clamp");
  newsCardContentDiv.setAttribute("class", "news-card-content");
  newsCardImg.setAttribute("class", "news-card-image");
  newsCardDiv.setAttribute("class", "news-card");
  newsCardImg.setAttribute("src", image);
  newsCardDiv.setAttribute("class", "news-card");
  newsCardDiv.setAttribute("id", id);
  channelNameP.setAttribute("class", "channel-name");
  publishedDateP.setAttribute("class", "published-date");
  subFooterDiv.setAttribute("class", "sub-footer");
  //append
  topButton.append("Top");
  readMoreButton.append("Read more");
  channelNameP.append(channelName);
  h3.append(title);
  publishedDateP.append(publishedDate);
  subFooterDiv.append(channelNameP);
  //newsCardFooterDiv.append(channelNameP);
  subFooterDiv.append(readMoreButton);
  newsCardContentDiv.append(h3);
  newsCardFooterDiv.append(publishedDateP);
  newsCardFooterDiv.append(subFooterDiv);
  newsCardContentDiv.append(newsCardFooterDiv);
  newsCardDiv.append(newsCardImg);
  newsCardDiv.append(newsCardContentDiv);
  newsListDiv.append(newsCardDiv);
  newsListDiv.append(topButton);
};

//create header mobil button group
const createMobilButtonGroup = (header) => {
  const mobilButtonGroupDiv = document.createElement("div");
  mobilButtonGroupDiv.setAttribute("class", "mobil-button-group");
  const createChannelButton = document.createElement("BUTTON");
  const refreshNewsButton = document.createElement("BUTTON");
  const menuButton = document.createElement("BUTTON");
  createChannelButton.setAttribute("onclick", "openModal()");
  createChannelButton.append("+");
  createChannelButton.setAttribute("class", "create-channel-button");
  refreshNewsButton.setAttribute("onclick", "refreshNews()");
  refreshNewsButton.setAttribute("class", "create-channel-button");
  refreshNewsButton.append("⟳");
  menuButton.setAttribute("onclick", "openNav()");
  menuButton.append("☰");
  menuButton.setAttribute("class", "openbtn");
  mobilButtonGroupDiv.append(createChannelButton);
  mobilButtonGroupDiv.append(refreshNewsButton);
  mobilButtonGroupDiv.append(menuButton);
  header.append(mobilButtonGroupDiv);
};

// create mobil channel list
const createMobilChannelList = (channels, header) => {
  const mobilChannelListDiv = document.createElement("div");
  mobilChannelListDiv.setAttribute("class", "mobil-channel-list");
  //navbar close button
  const navbarCloseButtonDiv = document.createElement("div");
  navbarCloseButtonDiv.setAttribute("class", "close-button");
  const navbarCloseButton = document.createElement("BUTTON");
  navbarCloseButton.setAttribute("onclick", "closeNav()");
  navbarCloseButton.append("X");
  navbarCloseButton.setAttribute("class", "close-button");
  navbarCloseButtonDiv.append(navbarCloseButton);
  mobilChannelListDiv.append(navbarCloseButtonDiv);
  let allButton = document.createElement("BUTTON");
  allButton.setAttribute("onclick", "startPage()");
  allButton.append("All");
  mobilChannelListDiv.append(allButton);
  channels?.forEach((channel) => {
    createChannelItem(mobilChannelListDiv, channel.id, channel.name);
  });
  header.append(mobilChannelListDiv);
};

//update mobil navbar
const updateHeader = (channels) => {
  const header = document.querySelector("header");
  header.innerHTML = "";
  //header title
  const headerTitleDiv = document.createElement("div");
  headerTitleDiv.setAttribute("class", "header-title");
  const headerH1 = document.createElement("h1");
  headerH1.append("My Breakfast News");
  headerTitleDiv.append(headerH1);
  header.append(headerTitleDiv);
  // mobil button group
  if (channels) {
    //header mobil button group
    createMobilButtonGroup(header);
    //mobil channel list
    createMobilChannelList(channels, header);
  }
};

//update channel list
const updateChannelList = (channels) => {
  const leftSideBar = document.querySelector(".left-side-bar");
  leftSideBar.innerHTML = "";
  leftSideBar.style.width = "200px";
  let sideBarButtonGroupDiv = document.createElement("div");
  sideBarButtonGroupDiv.setAttribute("class", "side-bar-button-group");
  let channelListDiv = document.createElement("div");
  let createChannelButton = document.createElement("BUTTON");
  let refreshNewsButton = document.createElement("BUTTON");
  refreshNewsButton.setAttribute("class", "create-channel-button");
  refreshNewsButton.append("⟳");
  refreshNewsButton.setAttribute("onclick", "refreshNews()");
  createChannelButton.setAttribute("class", "create-channel-button");
  createChannelButton.setAttribute("onclick", "openModal()");
  createChannelButton.append("+");
  sideBarButtonGroupDiv.append(refreshNewsButton);
  sideBarButtonGroupDiv.append(createChannelButton);
  leftSideBar.append(sideBarButtonGroupDiv);
  leftSideBar.style.display = "flex";
  channelListDiv.setAttribute("class", "channel-list");
  let allButton = document.createElement("BUTTON");
  allButton.setAttribute("onclick", "startPage()");
  allButton.append("All");
  channelListDiv.append(allButton);
  channels.forEach((channel) => {
    createChannelItem(channelListDiv, channel.id, channel.name);
  });
  leftSideBar.append(channelListDiv);
};

//update news list
const updateNewsList = (channels) => {
  const newsList = document.querySelector(".news-list");
  newsList.innerHTML = "";
  newsList.style.width = "100%";
  newsList.style.display = "grid";
  channels.forEach((channel) => {
    channel.news.forEach((news) => {
      let publishedDate = formatDate(news.publish_date);
      createNewsCard(
        newsList,
        channel.name,
        news.id,
        news.image,
        news.title,
        publishedDate
      );
    });
  });
};

//update hero
const updateHero = (singleChannel) => {
  const newsList = document.querySelector(".news-list");
  newsList.innerHTML = "";
  const heroDiv = document.querySelector(".hero");
  heroDiv.innerHTML = "";
  const channelName = singleChannel[0].name;
  const id = singleChannel[0].news[0].id;
  const image = singleChannel[0].news[0].image;
  const title = singleChannel[0].news[0].title;
  const content = singleChannel[0].news[0].text;
  const publishedDate = singleChannel[0].news[0].publish_date;
  let formatedDate = formatDate(publishedDate);
  let status = "local";
  //show first news in to the hero
  createHero(
    heroDiv,
    channelName,
    id,
    image,
    title,
    content,
    formatedDate,
    status
  );
};

//single news
const getNewsListByChannel = (event) => {
  const selectedChannel = event.target.innerText;
  const channels = JSON.parse(localStorage.getItem("channels"));
  const singleChannel = [];
  channels.forEach((channel) => {
    if (channel.name.toUpperCase() === selectedChannel.toUpperCase()) {
      singleChannel.push(channel);
    }
  });
  let status = "welcome";
  //update news list and hero
  updateHero(singleChannel, status);
  updateNewsList(singleChannel);
};

//format date
const formatDate = (date) => {
  let newsDate = new Date(date);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    months[newsDate.getMonth()] +
    " " +
    newsDate.getDate() +
    ", " +
    newsDate.getFullYear()
  );
};

//refresh news
const refreshNews = async () => {
  const channels = JSON.parse(localStorage.getItem("channels"));
  const newArray = [];
  const updatedChannel = await Promise.all(
    channels?.map(async (channel) => {
      let news = await getNews(channel.link);
      newArray.push({ ...channel, news });
    })
  ).catch((error) => {
    alert(error);
    console.log("error", error);
  });
  localStorage.setItem("channels", JSON.stringify(newArray));
  startPage();
};

//default channel
const getDefaultChannels = () => {
  updateHeader(mockChannel);
  updateHero(mockChannel);
  updateNewsList(mockChannel);
  updateChannelList(mockChannel);
  localStorage.setItem("channels", JSON.stringify(mockChannel));
};

/*.....................
START PAGE
.....................*/
const startPage = async () => {
  //chech local storage
  let channels = JSON.parse(localStorage.getItem("channels"));
  let status = "";
  const heroDiv = document.querySelector(".hero");
  heroDiv.innerHTML = "";
  if (
    channels === null ||
    channels?.length === undefined ||
    channels?.length === 0
  ) {
    updateHeader(channels);
    //create welcome page hero
    const image =
      "https://images.unsplash.com/photo-1504465188792-96c4e8752e8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0JTIwYW5kJTIwbmV3c3xlbnwwfHwwfHx8MA%3D%3D";
    const id = "";
    const title = "Welcome to My Breakfast News";
    const content = `I'm very glad you're here. To view the daily news, you need to create your channel using the 'Create Channel' button. Use the 'Default Channel' button to see sample news.`;
    status = "welcome";
    const publishedDate = "";
    const channelName = null;
    console.log("check status", status);
    createHero(
      heroDiv,
      channelName,
      id,
      image,
      title,
      content,
      publishedDate,
      status
    );
  } else {
    console.log("<-------local-------->");
    //news for hero
    //.................................
    const channelName = channels[0].name;
    const id = channels[0].news[0].id;
    const image = channels[0].news[0].image;
    const title = channels[0].news[0].title;
    const content = channels[0].news[0].text;
    const publishedDate = channels[0].news[0].publish_date;
    let formatedDate = formatDate(publishedDate);
    status = "local";
    console.log("check status in local case:", status);
    //show first news in to the hero
    createHero(
      heroDiv,
      channelName,
      id,
      image,
      title,
      content,
      formatedDate,
      status
    );
    updateNewsList(channels);
    updateHeader(channels);
    updateChannelList(channels);
  }
};
startPage();

//find one news
const findNews = (newsId) => {
  let channels = JSON.parse(localStorage.getItem("channels"));
  let channelName = "";
  let id = "";
  let title = "";
  let content = "";
  let newsImage = "";
  let publishedDate = "";
  channels.forEach((channel) => {
    channelName = channel.name;
    channel.news.forEach((news) => {
      if (news.id === parseInt(newsId)) {
        title = news.title;
        id = news.id;
        content = news.text;
        newsImage = news.image;
        publishedDate = news.publish_date;
      }
    });
  });
  return { channelName, id, title, content, newsImage, publishedDate };
};

//read more
const readMore = (event) => {
  //get Data
  const newsId =
    event.target.parentElement.parentElement.parentElement.parentElement.id;
  //find channel
  const findedNews = findNews(newsId);
  let formatedDate = formatDate(findedNews.publishedDate);
  //clear right side bar
  newsDetailBody(
    findedNews.newsImage,
    findedNews.title,
    formatedDate,
    findedNews.content,
    findedNews.channelName
  );
};
//create news detail body
const newsDetailBody = (
  newsImage,
  title,
  formatedDate,
  content,
  channelName
) => {
  const rightSideBarDiv = document.querySelector(".right-side-bar");
  rightSideBarDiv.innerHTML = "";
  const leftSideBarDiv = document.querySelector(".left-side-bar");
  leftSideBarDiv.style.display = "none";
  const mobilButtonGroupDiv = document.querySelector(".mobil-button-group");
  mobilButtonGroupDiv.style.display = "none";
  // create news Detail Body
  let image = document.createElement("img");
  let button = document.createElement("BUTTON");
  let h3 = document.createElement("h3");
  let ContentP = document.createElement("p");
  let dateP = document.createElement("p");
  let channelNameP = document.createElement("p");
  let newsDetailFooterDiv = document.createElement("div");
  let topButton = document.createElement("BUTTON");
  //  set attribute
  image.setAttribute("src", newsImage);
  image.setAttribute("class", "hero-image");
  button.setAttribute("onclick", "goBack(event)");
  channelNameP.setAttribute("class", "channel-name");
  newsDetailFooterDiv.setAttribute("class", "sub-footer");
  topButton.setAttribute("onclick", "topFunction()");
  topButton.setAttribute("id", "scroll-button");
  //  append
  h3.append(title);
  dateP.append(formatedDate);
  ContentP.append(content);
  channelNameP.append(channelName);
  button.append("back");
  rightSideBarDiv.append(button);
  rightSideBarDiv.append(image);
  rightSideBarDiv.append(dateP);
  rightSideBarDiv.append(h3);
  rightSideBarDiv.append(ContentP);
  newsDetailFooterDiv.append(channelNameP);
  topButton.append("Top");
  newsDetailFooterDiv.append(topButton);
  rightSideBarDiv.append(newsDetailFooterDiv);
};
// go back button
const goBack = () => {
  const rightSideBarDiv = document.querySelector(".right-side-bar");
  rightSideBarDiv.innerHTML = "";
  const hero = document.createElement("div");
  hero.setAttribute("class", "hero");
  rightSideBarDiv.append(hero);
  const newsList = document.createElement("div");
  newsList.setAttribute("class", "news-list");
  rightSideBarDiv.append(newsList);
  startPage();
};

/* CREATE CHANNEL MODAL 
.....................*/
// Get modal element
var modal = document.getElementById("createChannelModal");
// Get open modal button
var modalBtn = document.getElementById("create-channel-button");

// Get close button
var closeBtn = document.getElementsByClassName("close-button")[0];

// Open modal
const openModal = () => {
  modal.style.display = "block";
};

// Close modal
const closeModal = () => {
  modal.style.display = "none";
};

// Click outside and close
const outsideClick = async (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// get news from api
const getNews = async (link) => {
  const newsLinksByChannel = await newsLinks(link);
  if (newsLinksByChannel?.status === "failure") {
    console.log("There is an error", newsLinksByChannel?.message);
    alert(newsLinksByChannel?.message);
    return;
  }
  let extractNewsArray = [];
  for (let i = 0; i < 3; i++) {
    const news = await getExtractNews(newsLinksByChannel.news_links[i]);
    if (news?.status === "failure") {
      console.log("There is an error", newsLinksByChannel?.message);
      alert(news?.message);
      return;
    }
    let ms = Date.now();
    news["id"] = ms;
    extractNewsArray.push(news);
  }
  alert("News Successfully Added");
  return extractNewsArray;
};

//clean items after the some channel removed
const cleanItems = () => {
  const mobilButtonGroupDiv = document.querySelector(".mobil-button-group");
  const mobilChannelListDiv = document.querySelector(".mobil-channel-list");
  const leftSideBarDiv = document.querySelector(".left-side-bar");
  const newsListDiv = document.querySelector(".news-list");
  mobilChannelListDiv.innerHTML = "";
  mobilButtonGroupDiv.innerHTML = "";
  leftSideBarDiv.innerHTML = "";
  newsListDiv.innerHTML = "";
  mobilChannelListDiv.style.display = "none";
  leftSideBarDiv.style.display = "none";
  mobilButtonGroupDiv.style.display = "none";
  newsListDiv.style.display = "none";
  mobilButtonGroupDiv.style.width = 0;
  mobilChannelListDiv.style.width = 0;
  leftSideBarDiv.style.width = 0;
  newsListDiv.style.width = 0;
};

//remove channel
const removeChannel = (event) => {
  if (confirm("Dou you want to delete this channel") === false) {
    return;
  }
  const channelId = event.target.id;
  const channels = JSON.parse(localStorage.getItem("channels"));
  const updatedChannel = channels.filter(
    (channel) => channel.id !== parseInt(channelId)
  );
  localStorage.setItem("channels", JSON.stringify(updatedChannel));
  if (updatedChannel?.length === 0) {
    localStorage.removeItem("channels");
    //clear side bar ,mobil button group,  mobil channel list, hero, and news list
    cleanItems();
    startPage();
  }
  startPage();
};

//create channel
const createChannel = async () => {
  const nameInput = document.querySelector('input[name="channel-name"]');
  const linkInput = document.querySelector('input[name="channel-link"]');
  const name = nameInput.value;
  const link = linkInput.value;
  nameInput.value = "";
  linkInput.value = "";
  closeModal();
  /*    check name
  ............*/
  const channels = JSON.parse(localStorage.getItem("channels"));
  if (channels !== null) {
    let found = false;
    channels.forEach((channel) => {
      if (channel?.name.toUpperCase() === name?.toUpperCase()) {
        found = true;
      }
    });
    if (found) {
      alert(
        "You are already registered this name. Please first remove your channel name or refresh your news."
      );
      return;
    }
  }

  /* ........GET NEWS  FORM API......
  .............  */
  const news = await getNews(link);
  let msn = Date.now();
  //news channel
  const newChannel = [
    {
      id: msn,
      name,
      link,
      news: news
    }
  ];
  /* ........GET CHANNELS FORM LOCAL STORAGE......
  .............  */
  if (channels !== null) {
    let updatedChannel = channels.concat(newChannel);
    localStorage.setItem("channels", JSON.stringify(updatedChannel));
    startPage();
  } else {
    localStorage.setItem("channels", JSON.stringify(newChannel));
    startPage();
  }
};

/*.............API......
......................*/

const newsLinks = async (newUrl) => {
  const newsLinksByUrl = await fetch(
    `https://api.worldnewsapi.com/extract-news-links?api-key=${token}&url=${newUrl}`
  )
    .then((resp) => resp.json())
    .catch((error) => {
      alert("error when we taking links: ", error);
    });
  console.log("news link in api", newsLinksByUrl?.status);
  if (newsLinksByUrl?.status === "failure") {
    alert(newsLinksByUrl?.message);
  }
  return newsLinksByUrl;
};

//extract news
const getExtractNews = async (newslink) => {
  const extractNews = await fetch(
    `https://api.worldnewsapi.com/extract-news?api-key=${token}&analyze=true&url=${newslink}
`
  )
    .then((resp) => resp.json())
    .catch((er) => alert("error in extract news", er));
  if (extractNews?.status === "failure") {
    alert(extractNews?.message);
  }
  return extractNews;
};

// Listen for outside click
window.addEventListener("click", outsideClick);
window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  // Get the button
  let scrollButton = document.getElementById("scroll-button");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//open menu for mobile application
const openNav = () => {
  document.querySelector(".mobil-channel-list").style.width = "250px";
  document.querySelector(".mobil-button-group").style.marginRight = "250px";
};
const closeNav = () => {
  document.querySelector(".mobil-channel-list").style.width = 0;
  document.querySelector(".mobil-button-group").style.marginRight = "0";
};
