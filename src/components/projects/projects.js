import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./projectCard";
import { Title, Container, Wrapper, CardContainer } from "../shared/shared";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
