import Image from "next/image";
import { PortableText } from "@portabletext/react";
import RichText from "./RichText";
import type { SanityDocument } from "@sanity/client";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  params: {
    slug: string;
  };
};

// - ISR
// revalidate this page every 30 seconds
export const revalidate = 30;

async function PostPage({ post }: { post: SanityDocument }) {
  console.log("post:", post.author);
  return (
    post && (
      <article className="px-10 pb-28">
        <section className="space-y-2 border border-emphasize">
          <div className="min-h-56 relative flex flex-col justify-between md:flex-row">
            <div className="absolute top-0 h-full w-full p-10 opacity-20 blur-sm">
              {post && post.mainImage && (
                <Image
                  className="mx-auto object-cover object-center"
                  src={urlForImage(post.mainImage).url()}
                  alt={post.mainImage?.alt}
                  fill
                />
              )}
            </div>

            <section className="w-full bg-emphasize p-5">
              <div className="flex flex-col justify-between gap-y-5 md:flex-row">
                <div>
                  <h1 className="text-4xl font-extrabold">{post?.title}</h1>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={urlForImage(post.author.image).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                  ></Image>
                  <div className="w-64">
                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                    <div>{/* TODO: Author BIO */}</div>
                  </div>
                </div>
              </div>

              {/* <div>
                <h2 className="pt-10 italic">{post.description}</h2>
                <div className="mt-auto flex items-center justify-end space-x-2">
                  {post.categories.map((category) => (
                    <p
                      key={category._id}
                      className="mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white"
                    >
                      {category.title}
                    </p>
                  ))}
                </div>
              </div> */}
            </section>
          </div>
        </section>

        <PortableText value={post.body} components={RichText}></PortableText>
      </article>
    )
  );
}
export default PostPage;
