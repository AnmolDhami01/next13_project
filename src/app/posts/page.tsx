"use server";
import Link from "next/link";
import React from "react";

type PropsTypes = {
  params: { id: number };
};
interface apiResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const callApi = async (): Promise<apiResponse[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  return await res.json();
};

export default async function page({ params }: PropsTypes) {
  const data = await callApi();

  {
    /* page {params?.id} */
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {data?.map((dataaa: apiResponse, index: number) => {
            return (
              <Link href={`/posts/${dataaa?.id}`} key={index}>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      CATEGORY
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      12 Jun 2019
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {dataaa?.title}
                    </h2>
                    <p className="leading-relaxed">{dataaa?.body}</p>
                    <a className="text-indigo-500 inline-flex items-center mt-4">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
