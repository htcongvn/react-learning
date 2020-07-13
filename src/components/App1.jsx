import React from "react";
import Blog from "./Blog";

const posts = [
  {
    id: 1,
    title: "Hello World",
    content: "Welcome to learning React!",
    imgUrl: "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg",
    imgAlt: "lemons",
  },
  {
    id: 2,
    title: "Installation",
    content: "You can install React from npm.",
    imgUrl:
      "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/the_health_benefits_of_peaches_slideshow/thinkstock_rf_peaches.jpg?resize=650px:*",
    imgAlt: "peaches",
  },
  {
    id: 3,
    title: "Hi there!",
    content: "I am studying React agressively.",
    imgUrl:
      "https://www.snopes.com/tachyon/2018/07/bananas.jpg?resize=1200,630&quality=65",
    imgAlt: "bananas",
  },
];

function App1() {
  return <Blog posts={posts} />;
}

export default App1;
