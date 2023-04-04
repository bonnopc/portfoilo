import { KEY_SKILLS } from "@/config/keys";
import Card from "@/modules/common/components/Card";
import Grid from "@/modules/common/components/Grid";
import { IProject, ISkill } from "@/types/projects";
import { useRouter } from "next/router";
import { createRef, useEffect, useMemo } from "react";
import styles from "./Projects.module.scss";
import Typography from "@/modules/common/components/Typography";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import RECENT_PROJECTS from "@/config/recent-projects.json";
import ProjectDescriptionModal from "../ProjectDescriptionModal";
import Checkbox from "@/modules/common/components/Checkbox";

export const SECTION_ID_PROJECTS = "projects";

interface IProjectCardProps {
  isSelected?: boolean;
  onSelect?: (name: IProject) => void;
  project: IProject;
}

function ProjectCard({ project, onSelect, isSelected }: IProjectCardProps) {
  const description: string = useMemo(() => {
    return project.responsibilities.join(", ");
  }, [project]);

  return (
    <Grid item xs={12} sm={6} md={4} as="li" className={styles.grid}>
      <Card
        fullWidth
        fullHeight
        className={`${styles.item} ${isSelected ? styles.selected : ""}`}
        onClick={() => onSelect?.(project)}
      >
        <Typography variant="h4">{project.name}</Typography>
        <Typography>
          {description.length > 100 ? <>{description.substring(0, 100)}...</> : description}
        </Typography>
        <Typography variant="caption">{project.technologies.join(", ")}</Typography>
      </Card>
    </Grid>
  );
}

function ProjectList({
  projects,
  selectedProject,
  setSelectedProject,
}: {
  projects: IProject[];
  selectedProject?: IProject;
  setSelectedProject?: (project: IProject) => void;
}) {
  const emptyListMsgRef = createRef<HTMLLIElement>();
  const projectWithRefs = projects.map((project) => {
    return {
      ...project,
      ref: createRef<HTMLLIElement>(),
    };
  });

  return (
    <Grid container className={styles.list} as="ul">
      <TransitionGroup component={null} className="staggered-list">
        {projectWithRefs.length ? (
          projectWithRefs.map((project, i) => (
            <CSSTransition
              timeout={500}
              nodeRef={project.ref}
              key={project.name}
              classNames="staggered-item"
            >
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
                isSelected={selectedProject?.name === project.name}
              />
            </CSSTransition>
          ))
        ) : (
          <CSSTransition
            timeout={500}
            nodeRef={emptyListMsgRef}
            key="no-projects"
            classNames="staggered-item"
          >
            <Grid as="li" ref={emptyListMsgRef} item xs={12}>
              <Typography variant="h4">No project found!</Typography>
            </Grid>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Grid>
  );
}

export default function Projects(props: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const { skill, projectId } = router.query;
  const selectedSkill: ISkill | undefined = useMemo(() => {
    if (skill) {
      return KEY_SKILLS.find((s) => s.toLowerCase() === skill.toString().toLowerCase());
    }
    return;
  }, [skill]);

  const projects: IProject[] = useMemo(() => {
    if (selectedSkill) {
      return RECENT_PROJECTS.filter((project) =>
        project.technologies
          .map((s) => s.toLowerCase())
          .includes(selectedSkill.toString().toLowerCase())
      );
    }

    return RECENT_PROJECTS;
  }, [selectedSkill]);

  const selectProject = (project: IProject) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          projectId: project.id,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const unselectProject = () => {
    const { projectId, ...query } = router.query;
    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true }
    );
  };

  const showAllProjects = () => {
    const { skill, ...query } = router.query;
    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    // reset selectedProject when skill changes
    if (selectedSkill) {
      unselectProject();
    }
  }, [selectedSkill]);

  return (
    <section className={styles.root} {...props}>
      <Typography
        variant="h2"
        rightElement={
          <Checkbox
            label="Show all"
            disabled={!selectedSkill}
            checked={!selectedSkill}
            onChange={showAllProjects}
          />
        }
      >
        {!selectedSkill ? "Recent " : ""} Projects {selectedSkill ? `using ${selectedSkill}` : ""}
      </Typography>
      <ProjectList
        projects={projects}
        selectedProject={
          projectId ? projects.find((project) => project.id === projectId.toString()) : undefined
        }
        setSelectedProject={selectProject}
      />
      <ProjectDescriptionModal projects={RECENT_PROJECTS} />
    </section>
  );
}
