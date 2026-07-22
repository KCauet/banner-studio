import type {TextElement, RectangleElement } from "../../types/BannerTypes"


interface Elements {
    elementProps: TextElement | RectangleElement,
    onSelect: (id: number) => void
}

function BannerElement({elementProps, onSelect}: Elements) {

    function RederizeCorrectElement() {
        switch(elementProps.type) {
            case 'text':
                return <h1 key={elementProps.id} onClick={() => {onSelect(elementProps.id)}}
                style={elementProps.styles}>{elementProps.text}</h1>
            case 'rectangle':
                return <section key={elementProps.id} style={elementProps.styles}></section>
        }
    }
    
    return (
        <section>
            { RederizeCorrectElement() }
        </section>
    )
}

export default BannerElement