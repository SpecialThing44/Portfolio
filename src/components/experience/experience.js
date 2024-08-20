import React from "react";
import { experience } from "../../data/experience";
import { Title, Container, CardContainer, Wrapper } from "../shared/shared";
import ExperienceCard from "./experienceCard";

const Experience = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Experience</Title>
        <CardContainer>
          {experience.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};
export default Experience;
