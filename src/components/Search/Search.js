import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className={styles.root}>
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder="🔎 SEARCH"
            />
            {searchValue && (<div onClick={() => setSearchValue("")} className={styles.clearIcon}>✖️</div>)}
        </div>
    );
};

export default Search;
