import styles from "./Achivement.module.scss";
import AchievementItem from "./AchievementItem";
import { Achievement } from "@/types/achievement";

export default function AchievementTimeline({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {achievements.map((achievement, index) => (
          <AchievementItem key={index} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
