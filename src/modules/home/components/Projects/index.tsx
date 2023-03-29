import { KEY_SKILLS } from "@/config/keys";
import PROJECTS from "@/config/projects";
import Card from "@/modules/common/components/Card";
import Grid from "@/modules/common/components/Grid";
import { IProject, ISkill } from "@/types/projects";
import { useRouter } from "next/router";
import { createRef, useMemo } from "react";
import styles from "./Projects.module.scss";
import Typography from "@/modules/common/components/Typography";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const SECTION_ID_PROJECTS = "projects";

function ProjectList({ projects }: { projects: IProject[] }) {
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
              key={project.title}
              classNames="staggered-item"
            >
              <Grid item xs={12} sm={6} md={4} as="li" ref={project.ref}>
                <Card fullWidth fullHeight>
                  <Typography variant="h4">{project.title}</Typography>
                  <Typography>{project.description}</Typography>
                  <Typography>Skills: {project.skills.join(", ")}, etc</Typography>
                </Card>
              </Grid>
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
  const { skill } = router.query;
  const selectedSkill: ISkill | undefined = useMemo(() => {
    if (skill) {
      return KEY_SKILLS.find((s) => s.toLowerCase() === skill.toString().toLowerCase());
    }
    return;
  }, [skill]);

  const projects: IProject[] = useMemo(() => {
    if (selectedSkill) {
      return PROJECTS.filter((project) =>
        project.skills.map((s) => s.toLowerCase()).includes(selectedSkill.toString().toLowerCase())
      );
    }

    return PROJECTS;
  }, [selectedSkill]);

  return (
    <section className={styles.root} {...props}>
      <Typography variant="h2">
        {!selectedSkill ? "Recent " : ""} Projects {selectedSkill ? `using ${selectedSkill}` : ""}
      </Typography>
      <ProjectList projects={projects} />
    </section>
  );
}
