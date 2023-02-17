import { KEY_SKILLS } from "@/config/keys";
import PROJECTS from "@/config/projects";
import Card from "@/modules/common/components/Card";
import Grid from "@/modules/common/components/Grid";
import { IProject, ISkill } from "@/types/projects";
import { useRouter } from "next/router";
import { useMemo } from "react";
import styles from "./Projects.module.scss";
import { motion, Variants } from "framer-motion";
import Typography from "@/modules/common/components/Typography";

const MotionGrid = motion(Grid);

const listVariants: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.3, // this will set the time inbetween children animation
    },
  },
};
const itemVariants: Variants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: 10,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
      // remove delay: 0.3,
    },
  },
};

function ProjectList({ projects }: { projects: IProject[] }) {
  return (
    <MotionGrid
      container
      className={styles.list}
      variants={listVariants}
      initial="hidden"
      animate="visible"
      as="ul"
    >
      {projects.map((project, i) => (
        <MotionGrid
          item
          xs={12}
          sm={6}
          md={4}
          key={project.title}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          as="li"
        >
          <Card fullWidth fullHeight>
            <Typography variant="h4">{project.title}</Typography>
            <Typography>{project.description}</Typography>
            <Typography>Skills: {project.skills.join(", ")}, etc</Typography>
          </Card>
        </MotionGrid>
      ))}
    </MotionGrid>
  );
}

export default function Projects() {
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
    <div className={styles.root}>
      <Typography variant="h2">
        {!selectedSkill ? "Recent " : ""} Projects {selectedSkill ? `using ${selectedSkill}` : ""}
      </Typography>
      <ProjectList projects={projects} />
    </div>
  );
}
