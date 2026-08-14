"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ui/ImageLightbox";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  return (
    <>
      <section className="mx-auto w-[calc(100%-32px)] max-w-[1600px] pb-28 md:w-[calc(100%-64px)] md:pb-44">
        {/* ========================================== */}
        {/* Heading */}
        {/* ========================================== */}

        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-black/45 md:text-sm">
            05 · Project Gallery
          </p>

          <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em]">
            Inside the process.
          </h2>
        </div>

        {/* ========================================== */}
        {/* Images */}
        {/* ========================================== */}

        <div className="grid gap-6 md:grid-cols-2">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <button
                type="button"
                data-cursor="EXPAND"
                onClick={() => setSelectedImage(image)}
                className={`group relative block w-full overflow-hidden rounded-[28px] bg-black/5 ${
                  index === 0
                    ? "aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
              </button>

              {image.caption && (
                <figcaption className="mt-4 text-sm text-black/50">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      <ImageLightbox
        isOpen={selectedImage !== null}
        imageSrc={selectedImage?.src ?? ""}
        imageAlt={selectedImage?.alt ?? ""}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}