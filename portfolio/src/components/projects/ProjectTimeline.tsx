import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";
import { Project } from "@/types/project";

export default function ProjectTimeline({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {projects.map((project, index) => (
          <TimelineItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
