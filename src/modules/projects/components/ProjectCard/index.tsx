import Card from "@/modules/common/components/Card";
import Typography from "@/modules/common/components/Typography";
import { IProject } from "@/types/projects";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: IProject;
  isSelected?: boolean;
  onSelect?: (project: IProject) => void;
}

export default function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  return (
    <Card
      fullWidth
      fullHeight
      className={`${styles.root} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelect?.(project)}
    >
      <Typography variant="h4">{project.name}</Typography>
      <Typography>
        {project.responsibilities.join(", ").length > 100 ? (
          <>{project.responsibilities.join(", ").substring(0, 100)}...</>
        ) : (
          project.responsibilities.join(", ")
        )}
      </Typography>
      <Typography variant="caption">{project.technologies.join(", ")}</Typography>
    </Card>
  );
}
