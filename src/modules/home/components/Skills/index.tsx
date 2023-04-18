import { KEY_SKILLS } from "@/config/keys";
import Chip from "@/modules/common/components/Chip";
import Typography from "@/modules/common/components/Typography";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";

export default function Skills(props: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const skillsDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (router.query.skill) {
      scrollToSkills();
    }
  }, [router.query.skill]);

  const handleSkillClick = (skill: string) => {
    const { skill: currentSkill, ...rest } = router.query;

    router.push(
      {
        pathname: router.pathname,
        query:
          currentSkill === skill
            ? rest
            : {
                skill,
                ...rest,
              },
      },
      undefined,
      { scroll: false }
    );
  };

  const scrollToSkills = () => {
    skillsDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.root} {...props}>
      <Typography variant="h2">Technologies I have used</Typography>
      <div ref={skillsDivRef}>
        {KEY_SKILLS.map((skill, i) => (
          <Chip
            // color={getChipColor(i)}
            variant="outlined"
            key={skill}
            onClick={() => handleSkillClick(skill)}
            isSelected={
              Boolean(router.query.skill) &&
              router.query.skill!.toString().toLowerCase() === skill.toLowerCase()
            }
            size="large"
            as="a"
          >
            {skill}
          </Chip>
        ))}
      </div>
    </section>
  );
}
