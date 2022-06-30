// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`
    )
    .join("");

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
    overlayOpacity: 0.8,
    captionsData: "alt",
    captionDelay: 250,
});