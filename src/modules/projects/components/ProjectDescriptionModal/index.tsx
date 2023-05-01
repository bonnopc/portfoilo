import Modal from "@/modules/common/components/Modal";
import Typography from "@/modules/common/components/Typography";
import { IProject } from "@/types/projects";
import { useRouter } from "next/router";
import styles from "./ProjectDescriptionModal.module.scss";
import CommonLink from "@/modules/common/components/CommonLink";
import Grid from "@/modules/common/components/Grid";
import Image from "next/image";

interface ProjectDescriptionModalProps {
  projects: IProject[];
}

export default function ProjectDescriptionModal({ projects }: ProjectDescriptionModalProps) {
  const router = useRouter();
  const { projectId } = router.query;

  const selectedProject = projects.find((project) => project.id === projectId);

  const handleClose = () => {
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

  return (
    <Modal isOpen={!!selectedProject?.id} onClose={handleClose}>
      <Grid container className={styles.root}>
        <Grid item xs={12} sm={12} md={8} mdOffset={2}>
          <Typography variant="h2">{selectedProject?.name}</Typography>
        </Grid>
        {selectedProject?.image ? (
          <Grid item xs={12} sm={12} md={8} mdOffset={2} className={styles.imgContainer}>
            <Image
              src={selectedProject?.image}
              alt={selectedProject.name}
              className={styles.image}
              width={400}
              height={400}
              layout="responsive"
              objectFit="contain"
            />
          </Grid>
        ) : (
          <div />
        )}
        <Grid item xs={12} sm={12} md={8} mdOffset={2}>
          <ul className={styles.list}>
            {selectedProject?.responsibilities.map((responsibility, i) => (
              <li className={styles.listItem} key={i}>
                {responsibility}
              </li>
            ))}
          </ul>
          <p className={styles.techs}>
            Technologies used: {selectedProject?.technologies.join(", ")}
          </p>

          <div className={styles.links}>
            {selectedProject?.links?.length || selectedProject?.link ? (
              <div>
                Visit:{" "}
                {selectedProject?.links?.length ? (
                  selectedProject?.links?.map(({ name, url }, i) => (
                    <>
                      <CommonLink hideExternalLinkIcon key={i} href={url} target="_blank">
                        {name}
                      </CommonLink>
                      {i !== selectedProject?.links?.length! - 1 ? ", " : "."}
                    </>
                  ))
                ) : selectedProject.link ? (
                  <CommonLink href={selectedProject.link} target="_blank">
                    {selectedProject.link}
                  </CommonLink>
                ) : null}
              </div>
            ) : (
              <div />
            )}
            {selectedProject?.github ? (
              <div>
                Github:{" "}
                <CommonLink href={selectedProject?.github} target="_blank">
                  {selectedProject?.github}
                </CommonLink>
              </div>
            ) : (
              <div />
            )}
          </div>
        </Grid>
      </Grid>
    </Modal>
  );
}
