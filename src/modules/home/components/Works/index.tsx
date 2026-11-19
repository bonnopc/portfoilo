import WORKPLACES from "@/config/workplaces.json";
import CommonLink from "@/modules/common/components/CommonLink";
import List from "@/modules/common/components/List";
import Tabs from "@/modules/common/components/Tabs";
import Typography from "@/modules/common/components/Typography";
import type { IWorkplace } from "@/types/common";
import styles from "./Works.module.scss";

function Workplace({
  company,
  description,
  endDate,
  keyRoles,
  position,
  startDate,
  technologies,
}: IWorkplace) {
  return (
    <div className={styles.workplaceRoot}>
      <Typography variant="h5">
        {position}{" "}
        {company.url ? (
          <CommonLink href={company.url} target="_blank">
            @ {company.name}
          </CommonLink>
        ) : (
          `@ ${company.name}`
        )}
      </Typography>
      <Typography variant="caption">
        {startDate} - {endDate}
      </Typography>
      <Typography>{description}</Typography>
      <List items={keyRoles.map((role) => ({ label: role }))} />
      <Typography variant="caption">Technologies: {technologies}</Typography>
    </div>
  );
}

export default function Works(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={styles.root} {...props}>
      <Typography variant="h2">Where I’ve Worked</Typography>
      <Tabs
        tabs={WORKPLACES.map((workplace, i) => ({
          label: workplace.shortName,
          component: <Workplace key={i} {...workplace} />,
        }))}
        className={styles.tabs}
      />
    </section>
  );
}
