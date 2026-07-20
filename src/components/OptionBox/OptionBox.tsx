import styles from './OptionBox.module.css' // Feito assim pra garantir exclusividade do css do componente

interface properties {
    name: string;
    extraCode: any;
}

function OptionBox(props: properties) {

    return (
        <>
            <div className={styles.mainBox}>
                <div>
                    <h2 className={styles.text}>{props.name}</h2>
                </div>
                <div>
                    {props.extraCode}
                </div>
            </div>
        </>
    )
}

export default OptionBox