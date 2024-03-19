import styles from './Exame.module.css'

export default function Exame({ path, titulo, texto }) {
  console.log(path)
  return (
    <div className={styles['row-card']}>
      <div className={styles["row-card-item"]}>
        <button className={styles["play-button"]}>▶</button>
        <img src={path.src} alt={titulo} />
        <p className={styles["nome-exame"]}><strong>{titulo}</strong></p>
        <p className={styles["descricao-exame"]}>
          {texto}
        </p>
      </div>
    </div>
  )
}