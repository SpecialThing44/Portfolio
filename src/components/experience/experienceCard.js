import { getThemeStyles } from "../../utils/themeStyles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import {
  Description,
  Card,
  CardTitle,
  CardDate,
  Tag,
  TagsStart,
  ButtonLink,
} from "../shared/shared";

const LeftAlignContainer = ({ children }) => (
  <div className="flex flex-col justify-start items-start relative z-1 clip-path-polygon text-start">
    {children}
  </div>
);

const TitleLinkContainer = ({ children }) => (
  <div className="flex justify-between items-center">{children}</div>
);

const ExperienceCard = ({ job }) => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor, boxColor, borderColor } =
    getThemeStyles(theme);
  return (
    <Card backgroundColor={backgroundColor}>
      <TitleLinkContainer>
        <CardTitle textColor={textColor} className="flex-grow text-center">
          {job.title}
        </CardTitle>
        <ButtonLink href={job.link}> Company Website </ButtonLink>
      </TitleLinkContainer>
      <LeftAlignContainer>
        <CardDate textColor={textColor}>{job.date}</CardDate>
        <div className="my-1"></div>
        <TagsStart>
          {job.tags?.map((tag, index) => (
            <Tag
              key={index}
              textColor={boxColor}
              backgroundColor={backgroundColor}
            >
              {tag}
            </Tag>
          ))}
        </TagsStart>
        <Description textColor={textColor}>{job.description}</Description>
        {job.accomplishments?.map((accomplishment, index) => (
          <Description key={index} textColor={textColor}>
            • {accomplishment}
          </Description>
        ))}
      </LeftAlignContainer>
    </Card>
  );
};
export default ExperienceCard;
