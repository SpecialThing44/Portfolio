import { getThemeStyles } from "../../utils/themeStyles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import {
  Description,
  CardDate,
  CardTitle,
  Card,
  Tag,
  Tags,
  ButtonLink,
} from "../shared/shared";

const Button = ({ children, borderColor }) => (
  <button
    className={`hidden w-full p-2.5 text-sm font-bold border-none rounded-lg  ${borderColor}  `}
  >
    {children}
  </button>
);

const Image = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-45 bg-white rounded-lg shadow-md"
  />
);

const Details = ({ children }) => (
  <div className="w-full flex flex-col gap-0 px-0.5">{children}</div>
);

const FlexColumn = ({ children }) => (
  <div className="flex flex-col gap-2 items-center mx-8">{children}</div>
);

const FlexRow = ({ children }) => (
  <div className="flex gap-2 items-center justify-center w-full mb-2">
    {children}
  </div>
);

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor, boxColor, borderColor } =
    getThemeStyles(theme);
  return (
    <Card backgroundColor={backgroundColor}>
      <Image src={project.image} />

      <Details>
        <FlexRow>
          {project.projectLink && (
            <ButtonLink href={project.projectLink}>View Project</ButtonLink>
          )}
          <FlexColumn>
            <CardTitle textColor={textColor}>{project.title}</CardTitle>
            <CardDate textColor={textColor}>{project.date}</CardDate>
          </FlexColumn>
          {project.codeLink && (
            <ButtonLink href={project.codeLink}>View Code</ButtonLink>
          )}
        </FlexRow>
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag
              key={index}
              textColor={boxColor}
              backgroundColor={backgroundColor}
            >
              {tag}
            </Tag>
          ))}
        </Tags>
        <Description textColor={textColor}>{project.description}</Description>
        <Button borderColor={borderColor}>View Project</Button>
      </Details>
    </Card>
  );
};
export default ProjectCard;
