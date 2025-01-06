import React from "react";
import { useEffect, useState, useRef } from "react";

import sanityClient from "/src/client.js";

import { PortableText } from "@portabletext/react";

import { getFileSource } from "../../utils/getFileSource";
import { renderFile } from "../../utils/renderFile";

import styles from "./Home.module.css";

export default function Home() {
  // Import Data
  let [data, setData] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="homepage"]{
      images,
      contact,
      biography,
      essays,
      interviews,
      talks,
      exhibitions,
      otherProjects,
      jurying,
      mentoring,
      portfolioReviews
  }`
      )
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, []);

  // Early return if data is undefined or empty
  if (!data || data.length === 0) {
    return <p>Loading...</p>; // Or some other loading state or message
  }

  const components = {
    marks: {
      link: ({ value, children }) => {
        const { href } = value;
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
  };

  const Biography = () => {
    return <PortableText value={data.biography} components={components} />;
  };

  const Contact = () => {
    return (
      <div id="contact">
        <PortableText value={data.contact} components={components} />
      </div>
    );
  };

  const Essays = () => {
    return (
      <div>
        <ul>
          {data.essays.map((essay, index) => {
            return (
              <li key={index}>
                <PortableText value={essay.essay} components={components} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Interviews = () => {
    return (
      <div>
        <ul>
          {data.interviews.map((interview, index) => {
            return (
              <li key={index}>
                <PortableText value={interview.interview} components={components} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Talks = () => {
    return (
      <div>
        <ul>
          {data.talks.map((talk, index) => {
            return (
              <li key={index}>
                <PortableText value={talk.talk} components={components} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Exhibitions = () => {
    return (
      <div>
        <ul>
          {data.exhibitions.map((exhibition, index) => {
            return (
              <li key={index}>
                <PortableText value={exhibition.exhibition} components={components} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const OtherProjects = () => {
    return (
      <div>
        <ul>
          {data.otherProjects.map((project, index) => {
            return (
              <li key={index}>
                <PortableText value={project.otherProject} components={components} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Jurying = () => {
    return (
      <div>
        <ul>
          {data.jurying.map((juryAppearance, index) => {
            return (
              <li key={index}>
                <PortableText value={juryAppearance.juryAppearance} components={components} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Mentoring = () => {
    return (
      <div>
        <ul>
          {data.mentoring.map((mentoringAppearance, index) => {
            return (
              <li key={index}>
                <PortableText value={mentoringAppearance.mentoringAppearance} components={components} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const PortfolioReviews = () => {
    return (
      <div>
        <ul>
          {data.portfolioReviews.map((portfolioReview, index) => (
            <li key={index}>
              <PortableText value={portfolioReview.portfolioReview} components={components} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ImageGallery = () => {
    return (
      <>
        {data.images.map((projectImages, projectIndex) =>
          projectImages.images.map((image, imageIndex) => {
            let altText = projectImages.title;
            console.log(image.title, "title");
            const fileSource = getFileSource(image);
            console.log(fileSource, "imgSrc");
            return (
              <div className="imageContainer" key={`${projectIndex}-${imageIndex}`}>
                {renderFile(fileSource, altText)}
              </div>
            );
          })
        )}
      </>
    );
  };

  const Copyright = () => {
    let currentYear = new Date().getFullYear();
    return (
      <div className="copyrighttext">
        {data.images.map((image, index) => {
          return (
            <div key={index}>
              ({index + 1}) {image.title}
              {image.copyright && (
                <>
                  <br /> {image.copyright}
                </>
              )}
              <br />
            </div>
          );
        })}
        <br />
        <br />
        This website does not store any personal or private data as defined by Austrian and European law. This website does not
        use cookies.
        <br />
        <br />© Nela Eggenberger, <span className="currentYear">{currentYear}</span>
      </div>
    );
  };

  return (
    <>
      <div id="left-panel">
        <Biography />
        <br />
        <Contact />
        <br /> <br /> <br /> <br />
        <div className="textcontent">
          <div className="titelschrift-kleiner">TEXTS AND TALKS</div>
          <br /> <br />
          <div className="subcategory-title">Selected Essays</div>
          <br />
          <Essays />
          <br /> <br />
          <div className="subcategory-title">Selected Interviews</div>
          <br />
          <Interviews />
          <br /> <br />
          <div className="subcategory-title">Selected Talks</div>
          <br />
          <Talks />
          <br /> <br /> <br /> <br />
          <div className="titelschrift-kleiner">PROJECTS</div>
          <br /> <br />
          <div className="subcategory-title">Selected Exhibitions</div>
          <br />
          <Exhibitions />
          <br /> <br />
          <div className="subcategory-title">Other Projects</div>
          <br />
          <OtherProjects />
          <br /> <br /> <br /> <br />
          <div className="titelschrift-kleiner">FURTHER ACTIVITIES</div>
          <br /> <br />
          <div className="subcategory-title">Jurying</div>
          <br />
          <Jurying />
          <br /> <br />
          <div className="subcategory-title">Mentoring</div>
          <br />
          <Mentoring />
          <br /> <br />
          <div className="subcategory-title">Portfolio Reviews</div>
          <br />
          <PortfolioReviews />
          <br /> <br />
          <Copyright />
        </div>
      </div>
      <div id="right-panel">
        <ImageGallery />
      </div>
    </>
  );
}
