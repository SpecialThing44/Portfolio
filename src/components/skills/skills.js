import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { getThemeStyles } from "../../utils/themeStyles";
import styled from "styled-components";
import { skills } from "../../data/skills";
import { Title } from "../shared/shared";

const Container = ({ children }) => (
  <div className="flex flex-col justify-center items-center relative z-8 rounded-lg">
    {children}
  </div>
);

const SkillsContainer = ({ children }) => (
  <div className="w-full flex flex-wrap mt-8 gap-8 justify-center">
    {children}
  </div>
);

const Skill = ({ children, theme }) => {
  return (
    <div
      className={`w-full ${theme} border border-gray-500 shadow-lg rounded-lg p-6 max-w-[500px]`}
    >
      {children}
    </div>
  );
};

const SkillTitle = ({ children, textColor }) => (
  <h2 className={`text-3xl font-semibold text-center mb-5 ${textColor}`}>
    {children}
  </h2>
);

const SkillList = ({ children }) => (
  <div className="flex justify-center flex-wrap gap-3 mb-5">{children}</div>
);

const SkillItem = ({ children, isRelatedSkillsOpen, toggleRelatedSkills }) => (
  <div
    className="text-base font-normal border border-gray-500 rounded-lg p-3 flex items-center justify-center gap-2"
    onClick={toggleRelatedSkills}
  >
    {children}
    {isRelatedSkillsOpen && (
      <p className="absolute z-10 bg-white p-2 rounded-lg shadow-lg"> </p>
    )}
  </div>
);

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor, boxColor, borderColor } =
    getThemeStyles(theme);

  return (
    <Container>
      <Title>Skills</Title>
      <SkillsContainer className={`${borderColor} `}>
        {skills.map((skill, skillIndex) => (
          <Skill key={skillIndex} theme={backgroundColor}>
            <SkillTitle textColor={{ textColor }}>{skill.title}</SkillTitle>
            <SkillList>
              {skill.skills.map((skill, itemIndex) => (
                <SkillItem key={itemIndex} skill={skill}>
                  <SkillImage src={skill.image} />
                  {skill.name}
                </SkillItem>
              ))}
            </SkillList>
          </Skill>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
