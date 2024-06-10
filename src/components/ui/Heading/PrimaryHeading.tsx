import styles from "./Heading.module.css";

const PrimaryHeading = ({ title, des }: { title: string; des?: string }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={` ${styles.heading} `}>{title}</h2>
      {des && (
        <div className="lg:w-[50%] w-full mx-auto">
          <p className="text-slate-600 text-[18px] mt-3 tracking-wide">{des}</p>
        </div>
      )}
    </div>
  );
};

export default PrimaryHeading;
