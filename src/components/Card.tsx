import React from "react";
import Image from "next/image";
import styles from "../app/styles/card.module.css";

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <Image src={img} width={350} height={350} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{desc}</p>
        <div className={styles.cardTagscontainer}>
          {tags.map((tag) => (
            <span className={styles.cardtag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
