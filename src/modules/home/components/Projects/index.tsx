import { KEY_SKILLS } from "@/config/keys";
import PROJECTS from "@/config/projects";
import Card from "@/modules/common/components/Card";
import Grid from "@/modules/common/components/Grid";
import { IProject } from "@/types/projects";
import { useRouter } from "next/router";
import { useMemo } from "react";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";

const MotionGrid = motion(Grid);

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export default function Projects() {
  const router = useRouter();
  const { skill } = router.query;

  const projects: IProject[] = useMemo(() => {
    if (skill) {
      return PROJECTS.filter((project) =>
        project.skills.map((s) => s.toLowerCase()).includes(skill.toString().toLowerCase())
      );
    }

    return PROJECTS;
  }, [skill]);

  return (
    <div className={styles.root}>
      <h2>
        {skill && KEY_SKILLS.map((s) => s.toLowerCase()).includes(skill.toString().toLowerCase())
          ? "Related "
          : ""}{" "}
        Projects
      </h2>
      <MotionGrid container className={styles.list} variants={listVariants}>
        {projects.length ? (
          projects.map((project, i) => (
            <MotionGrid
              item
              xs={12}
              sm={6}
              md={4}
              key={project.title}
              variants={itemVariants}
              animate="animate"
              transition={{ duration: 0.3, delay: i * 0.8 }}
            >
              <Card fullWidth fullHeight>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>Skills: {project.skills.join(", ")}, etc</p>
              </Card>
            </MotionGrid>
          ))
        ) : (
          <Grid item xs={12}>
            <p>No related project found!</p>
          </Grid>
        )}
      </MotionGrid>
    </div>
  );
}
