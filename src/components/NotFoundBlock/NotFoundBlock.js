import styles from "./NotFoundBlock.module.scss";



const NotFoundBlock = () => {
    return (
        <div className={styles.main}>
            <h1>
                <span>😾</span>
                <br />
                Not Found
            </h1>
            <p className={styles.description}>
                Sorry, It looks like that page doesn't exist!
            </p>
        </div>
    );
};

export default NotFoundBlock;
