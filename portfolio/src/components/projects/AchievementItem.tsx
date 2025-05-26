import styles from "./Timeline.module.scss";
import { Achievement } from "@/types/achievement";

export default function AchievementItem({
  achievement,
}: {
  achievement: Achievement;
}) {
  return (
    <div className={styles.achievementItem}>
      <div className={styles.date}>{achievement.date}</div>
      <div className={styles.achievementContent}>
        <h3>{achievement.title}</h3>
        <p>{achievement.context}</p>
      </div>
    </div>
  );
}
