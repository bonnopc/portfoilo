import CommonLink from "@/modules/common/components/CommonLink";
import List from "@/modules/common/components/List";
import Tabs from "@/modules/common/components/Tabs";
import Typography from "@/modules/common/components/Typography";
import styles from "./Works.module.scss";

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
          <CommonLink href={company.url}>@ {company.name}</CommonLink>
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
        tabs={[
          {
            label: "Multiplyr",
            component: (
              <Workplace
                company={{
                  name: "Multiplyr Inc.",
                  url: "https://www.multiplyr.xyz/",
                }}
                description="Multiplyr is a team working on to build the Affine, a decentralized protocol that enables cross-chain savings and investment"
                startDate="December 2021"
                endDate="present"
                position="Senior Frontend Engineer"
                keyRoles={[
                  "Leading the Frontend team to scope and build the dApp using Next.js and Redux-toolkit",
                  "Working on the defi-sdk, a JS open-source library for frontend to communicate with blockchain",
                  "Developing APIs on the resolver built with FastAPI",
                ]}
              />
            ),
          },
          {
            label: "Web",
            component: <div>Web</div>,
          },
          {
            label: "Mobile",
            component: <div>Mobile</div>,
          },
        ]}
      />
    </div>
  );
}
