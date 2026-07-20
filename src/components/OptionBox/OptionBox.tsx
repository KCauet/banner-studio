import styles from './OptionBox.module.css' // Feito assim pra garantir exclusividade do css do componente

interface properties {
    func: () => void;
}

function OptionBox(props: properties) {
    return (
        <>
            <div>
                <div className={styles.mainBox} onClick={props.func}>
                    <h2 className={styles.text}>Component :3 wei!</h2>
                </div>
            </div>
        </>
    )
}

export default OptionBox