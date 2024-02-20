"use client";

import { title } from "../../components/primitives";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const ProjectGrid = (): React.JSX.Element => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(
        "https://api.github.com/users/Calesi19/repos"
      );
      // Json
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setRepos(response.data);
    };

    void fetchData();
  }, []);

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 py-8 container">
      {repos.map((repo: { name: string; description: string }) => (
        // eslint-disable-next-line react/jsx-key
        <Card
          isBlurred
          className="w-auto p-4 hover:scale-105 transition duration-300"
        >
          <Image
            radius="sm"
            className="w-full"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <CardHeader className="text-white font-medium text-large">
            {repo.name}
          </CardHeader>
          <CardBody>{repo.description}</CardBody>
        </Card>
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

      <ProjectGrid />
    </div>
  );
}
