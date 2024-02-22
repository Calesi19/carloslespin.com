/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import { title, subtitle } from "../../components/primitives";
import React from "react";
import {
  Divider,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Button,
  ButtonGroup,
  Snippet,
} from "@nextui-org/react";
import { Resume } from "../../config/site";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiDownload, HiCode } from "react-icons/hi";
export default function AboutPage(): React.JSX.Element {
  return (
    <div>
      <HeaderGrid />
      <AboutGrid />
      <ExperienceGrid />
      <EducationGrid />
      <SkillsGrid />
    </div>
  );
}

function HeaderGrid(): React.JSX.Element {
  return (
    <section className="container ">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className={`${title()}`}>{Resume.name}</h1>
          <div className={`${subtitle()}`}>{Resume.title}</div>
          <div className="hidden md:block">
            <Button variant="bordered" className="mr-1 ">
              <HiDownload className="mr-2" />
              Cover Letter
            </Button>

            <Button variant="bordered">
              <HiDownload className="mr-2" />
              Resume
            </Button>
          </div>
        </div>
        <div className="md:text-right mb-8 flex flex-col gap-1">
          <div>
            <ButtonGroup className="hidden md:block w-full md:w-auto">
              <Button
                onClick={() =>
                  window.open("https://www.linkedin.com/in/calesi19/", "_blank")
                }
              >
                <SiLinkedin className="mr-2" />
                LinkedIn
              </Button>

              <Button>
                <SiGithub className="mr-2" />
                GitHub
              </Button>
              <Button>
                <HiCode className="mr-2" />
                Portfolio
              </Button>
            </ButtonGroup>
          </div>
          <Snippet symbol>{Resume.email}</Snippet>
          <Snippet symbol>{Resume.phone}</Snippet>
        </div>
      </div>
      <div className="md:hidden">
        <Button variant="bordered" className="mb-1 w-full">
          <HiDownload className="mr-2" />
          Resume
        </Button>

        <Button variant="bordered" className="w-full">
          <HiDownload className="mr-2" />
          Cover Letter
        </Button>
      </div>
    </section>
  );
}

function ExperienceGrid(): React.JSX.Element {
  return (
    <section className="container mt-16">
      <h2 className="text-2xl font-bold">Experience</h2>
      <Divider className="my-4" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8">
          {Resume.experience.map((exp, index) => (
            <div key={index}>
              <div className="text-lg font-bold">{exp.title}</div>

              <div
                className={`flex flex-col md:flex-row mb-2 justify-between ${subtitle}`}
              >
                <div>{exp.company}</div>
                <div>{exp.date}</div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutGrid(): React.JSX.Element {
  return (
    <section className="container mt-8">
      <h2 className="text-2xl font-bold">About</h2>
      <Divider className="my-4" />
      <div>
        <p className="text-default-600">{Resume.about}</p>
      </div>
    </section>
  );
}

function EducationGrid(): React.JSX.Element {
  return (
    <section className="container mt-16">
      <h2 className="text-2xl font-bold">Education</h2>
      <Divider className="my-4" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8">
          {Resume.education.map((edu, index) => (
            <div key={index}>
              <div className="text-lg font-bold">{edu.title}</div>

              <div
                className={`flex flex-col md:flex-row mb-2 justify-between ${subtitle}`}
              >
                <div>{edu.institution}</div>
                <div>{edu.date}</div>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsGrid(): React.JSX.Element {
  return (
    <section className="container mt-16">
      <h2 className="text-2xl font-bold">Skills</h2>
      <Divider className="my-4" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:grid grid-cols-2 gap-2">
          {Resume.skills.map((skills, index) => (
            <Card className="p-1" key={index}>
              <CardHeader className="text-lg font-bold">
                {skills.title}
              </CardHeader>
              <CardBody className="flex flex-row flex-wrap overscroll-contain">
                {skills.items.map((item, index) => (
                  <Chip size="lg" key={index} className="m-1">
                    {item}
                  </Chip>
                ))}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
