import { gallery as myGallery, settings } from "./modules/gallery";

document.querySelector("h1").textContent = settings.meaning;

const data = [
  {
    i: "1.png"
  },
  {
    i: "2.png"
  }
];

myGallery(data, document.body);
