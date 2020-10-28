import styles from './styles.module.css'

const Footer  = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.item}>Developed by Ivan Giokov</div>
            <div className={styles.item}>Powered by ReactJS</div>
            <div className={styles.item}>
                project can be found <a href='https://github.com/IvanGiokov/ReactJS-Weather-App-example.git'>here</a>
            </div>
        </div>
    )
}

export default Footer