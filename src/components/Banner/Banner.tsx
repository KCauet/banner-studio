import styles from './Banner.module.css'

import type { BannerElements } from '../../App'
import BannerElement from './BannerElement'

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
    },
    elementsList: BannerElements[]
}

function Banner({mainStyles, textStyles, elementsList}: properties) {
    return (
        <>
            <section
            className={styles.banner}
            style={{backgroundColor: mainStyles.backgroundColor}}>
            <h1 style={textStyles}>{mainStyles.textContent}</h1>
            {elementsList.map((element) => (
                <BannerElement
                key={element.id}
                elementProps={element}
                />
            ))}
          </section>
        </>
    )
}

export default Banner