import styles from './Banner.module.css'


interface properties {
    mainStyles: {
        backgroundColor: string,
        textFont: string,
        textFontSize: number,
        textContent: string,
        textColor: string,
        BoldText: boolean,
        ItalicText: boolean
    },
    textStyles: {
        fontFamily: string,
        color: string,
        fontSize: number,
        fontWeight: string,
        fontStyle: string,
    }
}

function Banner(props: properties) {
    return (
        <>
            <section
            className={styles.banner}
            style={{
                backgroundColor: props.mainStyles.backgroundColor
            }}
            >
            <h1 style={props.mainStyles}>{props.mainStyles.textContent}</h1>
          </section>
        </>
    )
}

export default Banner