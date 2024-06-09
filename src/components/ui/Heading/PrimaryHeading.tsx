import styles from "./Heading.module.css";

const PrimaryHeading = ({ title, des }: { title: string; des?: string }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={` ${styles.heading} `}>{title}</h2>
      {des && (
        <p className="text-slate-600 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque error
          quis fugiat voluptatum optio? Porro ex quae debitis odit animi?
        </p>
      )}
    </div>
  );
};

export default PrimaryHeading;
