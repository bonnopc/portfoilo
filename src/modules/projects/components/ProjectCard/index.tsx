import Typography from "@/modules/common/components/Typography";
import { IProject } from "@/types/projects";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import Card from "@/modules/common/components/Card";
import { forwardRef } from "react";

interface ProjectCardProps extends React.HTMLAttributes<HTMLLIElement> {
  project: IProject;
  isSelected?: boolean;
  onSelectProject?: (project: IProject) => void;
}

function ProjectCardComponent(
  { project, isSelected, onSelectProject, ...restProps }: ProjectCardProps,
  ref: any
) {
  return (
    <li
      className={`${styles.root} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelectProject?.(project)}
      ref={ref}
      {...restProps}
    >
      {project.image && (
        <div className={styles.imageContainer}>
          <div className={styles.overlay} />
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
            className={styles.image}
            priority={false}
          />
        </div>
      )}
      <div className={styles.texts}>
        <Typography variant="h4" className={styles.heading}>
          {project.name}
        </Typography>
        <Card className={styles.card}>
          <Typography>
            {project.responsibilities.join(", ").length > 200 ? (
              <>{project.responsibilities.join(", ").substring(0, 200)}...</>
            ) : (
              project.responsibilities.join(", ")
            )}
          </Typography>
        </Card>
        <Typography className={styles.techs} variant="caption">
          {project.technologies.join(", ")}, etc.
        </Typography>
      </div>
    </li>
  );
}

const ProjectCard = forwardRef(ProjectCardComponent);

export default ProjectCard;
