import styles from "../app/styles/footer.module.css";
import React, { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName("");
      setComment("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Contact us at:{" "}
          <a href="mailto:wdaa47495@gmail.com">wdaa47495@gmail.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/syeda-warda-2ab623344"
            target="_blank"
            rel="noreferrer"
          >
          syeda warda
          </a>
        </p>
      </div>

      {/* Comment Section */}
      <div className={styles.commentSection}>
        <h3>Leave a Comment</h3>
        <form onSubmit={handleSubmit} className={styles.commentForm}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className={styles.commentsList}>
          {comments.map((c, index) => (
            <div key={index} className={styles.comment}>
              <strong>{c.name}</strong>
              <p>{c.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <p className={styles.footerCopy}>
        &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
