"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Placeholder gallery images - replace with actual images from /public/gallery/
const galleryImages = [
  {
    src: "/gallery/placeholder-1.jpg",
    alt: "Custom wedding cake with pink floral decorations",
    title: "Wedding Cake",
  },
  {
    src: "/gallery/placeholder-2.jpg",
    alt: "Assorted decorated cupcakes with colorful frosting",
    title: "Cupcakes",
  },
  {
    src: "/gallery/placeholder-3.jpg",
    alt: "Birthday cake with sprinkles and decorations",
    title: "Birthday Cake",
  },
  {
    src: "/gallery/placeholder-4.jpg",
    alt: "Decorated sugar cookies in various shapes",
    title: "Sugar Cookies",
  },
  {
    src: "/gallery/placeholder-5.jpg",
    alt: "Multi-tier celebration cake",
    title: "Celebration Cake",
  },
  {
    src: "/gallery/placeholder-6.jpg",
    alt: "Custom cake pops decorated for special occasion",
    title: "Cake Pops",
  },
];

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="gallery-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <header className="gallery-page__header text-center mb-12">
          <h1 className="font-accent text-4xl md:text-5xl text-[#ED9BB8] mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of custom cakes, cupcakes, cookies and more. 
            Each creation is made with love and attention to detail.
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="gallery">
          {galleryImages.length > 0 ? (
            <div className="gallery__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery__item group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="gallery__image-wrapper relative aspect-square bg-gray-200">
                    {/* Placeholder until actual images are added */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5D4E1] to-[#FFB6D1]">
                      <div className="text-center p-4">
                        <svg
                          className="w-16 h-16 mx-auto mb-2 text-white opacity-50"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-white text-sm font-medium">{image.title}</p>
                      </div>
                    </div>
                    {/* Uncomment when actual images are added
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    */}
                  </div>
                  <div className="gallery__caption p-3 bg-white">
                    <p className="text-sm text-gray-700 font-medium">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                Gallery images will appear here once added to /public/gallery/
              </p>
              <p className="text-sm text-gray-400">
                See /public/gallery/README.md for instructions
              </p>
            </div>
          )}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={galleryImages.map((img) => ({
            src: img.src,
            alt: img.alt,
            title: img.title,
          }))}
        />

        {/* CTA */}
        <div className="gallery-page__cta mt-16 text-center p-8 bg-[#FFF5F8] rounded-lg">
          <h2 className="font-accent text-2xl text-[#ED9BB8] mb-3">
            Love what you see?
          </h2>
          <p className="text-gray-700 mb-6">
            Let's create something special for your next event!
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-[#ED9BB8] text-white rounded-md font-medium hover:bg-[#E88AAC] transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </main>
  );
}
