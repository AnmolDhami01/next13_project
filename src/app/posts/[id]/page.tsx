"use server";
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

const callApi = async (id: number): Promise<apiResponse> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  return await res.json();
};

export default async function page({ params }: PropsTypes) {
  const data = await callApi(params.id);

  {
    /* page {params?.id} */
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {data?.title}
          </h1>
          <p className="leading-relaxed text-base">{data?.body}</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}
