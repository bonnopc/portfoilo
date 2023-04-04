import Modal from "@/modules/common/components/Modal";
import Typography from "@/modules/common/components/Typography";
import { IProject } from "@/types/projects";
import { useRouter } from "next/router";

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
      <div>
        <Typography variant="h2">{selectedProject?.name}</Typography>
        <ul>
          {selectedProject?.responsibilities.map((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </ul>
        <p>Technologies used: {selectedProject?.technologies.join(", ")}</p>
      </div>
    </Modal>
  );
}
