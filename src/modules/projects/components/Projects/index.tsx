import { KEY_SKILLS } from "@/config/keys";
import RECENT_PROJECTS from "@/config/recent-projects.json";
import Button from "@/modules/common/components/Button";
import Checkbox from "@/modules/common/components/Checkbox";
import Grid from "@/modules/common/components/Grid";
import Typography from "@/modules/common/components/Typography";
import { IProject, ISkill } from "@/types/projects";
import { useRouter } from "next/router";
import { createRef, useEffect, useMemo, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectCard from "../ProjectCard";
import ProjectDescriptionModal from "../ProjectDescriptionModal";
import styles from "./Projects.module.scss";

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
    <ul className={styles.list}>
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
                isSelected={selectedProject?.id === project.id}
                onSelectProject={setSelectedProject}
                ref={project.ref}
                style={{ transitionDelay: `${i + 1}00ms` }}
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
    </ul>
  );
}

export default function Projects(props: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const [isShowingMore, setIsShowingMore] = useState<boolean>(false);
  const { skill, projectId } = router.query;
  const selectedSkill: ISkill | undefined = useMemo(() => {
    if (skill) {
      return KEY_SKILLS.find((s) => s.toLowerCase() === skill.toString().toLowerCase());
    }
    return;
  }, [skill]);

  // filter projects by selected skill
  const projects: IProject[] = useMemo(() => {
    if (selectedSkill) {
      // we will
      return RECENT_PROJECTS.filter((project) =>
        project.technologies.map((s) => s.toLowerCase()).includes(selectedSkill.toLowerCase())
      );
    } else if (!isShowingMore) {
      // if no skill is selected, return only the first 6 projects
      return RECENT_PROJECTS.slice(0, 6);
    }

    return RECENT_PROJECTS;
  }, [selectedSkill, isShowingMore]);

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

  const handleShowMore = () => {
    setIsShowingMore(true);
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
      {!isShowingMore && !selectedSkill ? (
        <div className={styles.footer}>
          <Button variant="outlined" onClick={handleShowMore}>
            Show More
          </Button>
        </div>
      ) : null}

      <ProjectDescriptionModal projects={RECENT_PROJECTS} />
    </section>
  );
}
