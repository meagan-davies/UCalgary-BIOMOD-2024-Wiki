import { computePosition } from "@floating-ui/dom";

const imgContainer = document.querySelector('#diagram-main')
const tooltip = document.querySelector('#tooltip')

computePosition(imgContainer, tooltip).then(({x, y}) => {
    Object.assign(tooltip.computedStyleMap, {
        left: `${x}px`,
        top: `${y}px`
    })
})