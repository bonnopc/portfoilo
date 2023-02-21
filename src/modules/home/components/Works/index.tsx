import CommonLink from "@/modules/common/components/CommonLink";
import List from "@/modules/common/components/List";
import Tabs from "@/modules/common/components/Tabs";
import Typography from "@/modules/common/components/Typography";
import styles from "./Works.module.scss";
import WORKPLACES from "@/config/workplaces.json";

interface Company {
  name: string;
  url?: string;
}

interface WorkplaceProps {
  company: Company;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  keyRoles: string[];
}

function Workplace({
  company,
  description,
  endDate,
  keyRoles,
  position,
  startDate,
}: WorkplaceProps) {
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
      <Typography variant="p">{description}</Typography>
      <List items={keyRoles.map((role) => ({ label: role }))} />
    </div>
  );
}

export default function Works() {
  return (
    <div className={styles.root}>
      <Typography variant="h2">Where I’ve Worked</Typography>
      <Tabs
        tabs={WORKPLACES.map((workplace) => ({
          label: workplace.shortName,
          component: (
            <Workplace
              company={{
                name: workplace.name,
                url: workplace.url,
              }}
              position={workplace.position}
              startDate={workplace.startDate}
              endDate={workplace.endDate}
              description={workplace.description}
              keyRoles={workplace.keyRoles}
            />
          ),
        }))}
      />
    </div>
  );
}
