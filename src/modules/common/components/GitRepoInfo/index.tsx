import CommonLink from "../CommonLink";
import styles from "./GitRepoInfo.module.scss";

export default function GitRepoInfo() {
  return (
    <div className={styles.root}>
      <p>Built & Designed by Prosenjit Chowdhury</p>
      <ul className={styles.list}>
        <li>Open Source</li>
        <li>MIT License</li>
        <li>
          <CommonLink
            color="textColor"
            href={`https://github.com/pchy10/portfoilo#-forking-this-repo-please-read`}
            target="_blank"
            hideExternalLinkIcon
          >
            Source Code
          </CommonLink>
        </li>
      </ul>
    </div>
  );
}
