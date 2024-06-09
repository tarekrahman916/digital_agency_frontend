import styles from "./Heading.module.css";

const PrimaryHeading = ({ title, des }: { title: string; des?: string }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={` ${styles.heading} `}>{title}</h2>
      {des && (
        <div className="lg:w-[50%] w-full mx-auto">
          <p className="text-slate-600 text-[18px] mt-3 tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            error quis fugiat voluptatum optio? Porro ex quae debitis odit
            animi?
          </p>
        </div>
      )}
    </div>
  );
};

export default PrimaryHeading;
