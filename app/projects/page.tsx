"use client";

import { title } from "../../components/primitives";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, Skeleton } from "@nextui-org/react";
import Ripples from "react-ripples";

interface Repo {
  html_url: string;
  bannerUrl: string;
  name: string;
  description: string;
}

const ProjectGrid = (): React.JSX.Element => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);

      const response = await axios.get(
        "https://api.github.com/users/Calesi19/repos?per_page=100"
      );
      const fetchBannerUrl = async (
        repoName: string
      ): Promise<string | undefined> => {
        const bannerExtensions = ["png", "webp", "gif", "jpeg"];
        for (const ext of bannerExtensions) {
          const url = `https://api.github.com/repos/Calesi19/${repoName}/contents/docs/banner.${ext}`;
          try {
            const response = await axios.get(url);
            if (response.status === 200) {
              return response.data.download_url;
            }
          } catch (error) {
            return "/placeholder.webp"; // Ignore errors and continue checking other extensions
          }
        }
        return undefined; // Fallback URL not found
      };

      const repoData: Repo[] = await Promise.all(
        response.data.map(async (repo: any): Promise<Repo> => {
          const repoName = repo.name as string; // Ensure repo.name is of type string
          const bannerUrl = await fetchBannerUrl(repoName);
          return {
            html_url: repo.html_url,
            bannerUrl:
              bannerUrl ??
              "https://i0.wp.com/www.puresourcecode.com/wp-content/uploads/2022/11/github-wallpaper-scaled.jpeg?fit=2560%2C1440&ssl=1", // Fallback URL
            name: repoName.replace(/-/g, " "), // Replace dashes with spaces
            description: repo.description,
          };
        })
      );
      setRepos(repoData);
      setIsLoading(false);
    };

    void fetchData();
  }, []);

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 py-8 container ">
      {isLoading
        ? Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="w-full aspect-video rounded-lg" />
              <Skeleton className="h-3 w-3/5 rounded-lg mt-4 mb-2" />
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </div>
          ))
        : repos.map((repo, index) => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Ripples className="hover:scale-105 transition-transform duration-1000">
                <div className="w-auto bg-inherit border-none flex flex-col p-0 h-full text-left ">
                  <div className="w-full flex">
                    <Image
                      loading="lazy"
                      isBlurred
                      radius="sm"
                      className="w-full aspect-video object-cover"
                      alt="NextUI hero Image"
                      fallbackSrc="https://i0.wp.com/www.puresourcecode.com/wp-content/uploads/2022/11/github-wallpaper-scaled.jpeg?fit=2560%2C1440&ssl=1"
                      src={repo.bannerUrl}
                    />
                  </div>

                  <div className="font-medium text-large mt-4 mb-1">
                    {repo.name}
                  </div>
                  <div className="text-default-600">{repo.description}</div>
                </div>
              </Ripples>
            </a>
          ))}
    </section>
  );
};

export default function ProjectsPage(): React.JSX.Element {
  return (
    <div className="">
      <section className="container">
        <h1 className={`${title()}`}>Projects</h1>
      </section>
      <BackgroundBlur />
      <ProjectGrid />
    </div>
  );
}

function BackgroundBlur(): React.JSX.Element {
  const style = "opacity-30 blur-[90px] rounded-full";

  return (
    <div className="flex justify-center fixed w-full ">
      <div className="flex-row justify-center w-full flex">
        <span
          className={`dark:bg-shape1 w-1/4 xl:w-[200px] h-[300px] dark:bg-[#c0fdff] ${style}`}
        ></span>
        <span
          className={`dark:bg-shape2 w-1/4 xl:w-[400px] h-[400px] dark:bg-[#deaaff] ${style}`}
        ></span>
        <span
          className={`dark:bg-shape3 w-1/5 xl:w-[340px] h-[350px] dark:bg-[#b8c0ff] ${style}`}
        ></span>
      </div>
    </div>
  );
}
