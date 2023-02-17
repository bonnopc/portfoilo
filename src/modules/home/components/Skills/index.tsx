import { KEY_SKILLS } from "@/config/keys";
import Chip, { ChipColor, CHIP_COLORS } from "@/modules/common/components/Chip";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";

export default function Skills() {
  const router = useRouter();
  const skillsDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (router.query.skill) {
      scrollToSkills();
    }
  }, [router.query.skill]);

  const getChipColor = (index: number): ChipColor => {
    if (index > CHIP_COLORS.length - 1) {
      return CHIP_COLORS[index % CHIP_COLORS.length];
    } else {
      return CHIP_COLORS[index];
    }
  };

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
    <div ref={skillsDivRef} className={styles.root}>
      {KEY_SKILLS.map((skill, i) => (
        <Chip
          color={getChipColor(i)}
          key={skill}
          onClick={() => handleSkillClick(skill)}
          isSelected={
            Boolean(router.query.skill) &&
            router.query.skill!.toString().toLowerCase() === skill.toLowerCase()
          }
          size="large"
        >
          {skill}
        </Chip>
      ))}
    </div>
  );
}
