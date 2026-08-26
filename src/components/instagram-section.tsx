"use client";

import Image from "next/image";
import { STUDIO_INFO } from "@/data/studio";

const INSTAGRAM_POSTS = [
  { id: 1, image: "https://parasthapatya.in/wp-content/uploads/2023/12/port_savanstatus_thumb.jpg", caption: "Savan Status detail: Sunlight filtering through brass screen." },
  { id: 2, image: "https://parasthapatya.in/wp-content/uploads/2023/12/port_comm_MontessaSurat_thumb.jpg", caption: "Montessa Surat facade louvers against evening sky." },
  { id: 3, image: "https://parasthapatya.in/wp-content/uploads/2023/12/port_resortandfarm_resortsasan_thumb.jpg", caption: "Resort Sasan wilderness courtyard under river stone roof." },
  { id: 4, image: "https://parasthapatya.in/wp-content/uploads/2019/11/port_cafe_kk1_thumb.jpg", caption: "Kathiyawadi Kasumbo handcrafted terracotta lanterns." },
  { id: 5, image: "https://parasthapatya.in/wp-content/uploads/2023/12/port_showroom_weddingdiaries_thumb.jpg", caption: "Wedding Diaries boutique arched plaster fitting chamber." },
];

export default function InstagramSection() {
  return (
    <section className="py-24 sm:py-32 bg-para-ivory text-para-charcoal relative overflow-hidden border-b border-para-charcoal/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold block mb-2">
            12 — SOCIAL ARCHIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-para-charcoal">
            FROM THE <span className="italic text-para-bronze">STUDIO.</span>
          </h2>
        </div>

        <a
          href={STUDIO_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 font-sans text-xs tracking-widest uppercase text-para-bronze hover:text-para-charcoal transition-colors border-b border-para-bronze/40 pb-1 w-fit"
          data-cursor="cta"
        >
          <span>FOLLOW {STUDIO_INFO.instagramHandle} ON INSTAGRAM</span>
          <span>↗</span>
        </a>
      </div>

      {/* Instagram Curated Photo Strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6 sm:px-12 max-w-[1600px] mx-auto">
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.id}
            href={STUDIO_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-64 sm:h-80 overflow-hidden bg-para-charcoal/5 block"
            data-cursor="explore"
          >
            <Image
              src={post.image}
              alt={post.caption}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-architectural"
            />
            <div className="absolute inset-0 bg-para-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center text-para-ivory">
              <p className="font-sans text-xs tracking-wide leading-relaxed">
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
