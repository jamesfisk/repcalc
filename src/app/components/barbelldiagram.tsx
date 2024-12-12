import { plateToColorMap } from "./consts";

export interface BarbellDiagramProps {
    fiftyfives: number,
    fortyfives: number,
    thirtyfives: number,
    twentyfives: number,
    twenties: number,
    fifteens: number,
    tens: number,
    fives: number,
    twopointfives: number,
    onepointtwofives: number,
    collar: boolean,
    isKg: boolean,
    leftover: number
}

export default function BarbellDiagram(props: BarbellDiagramProps) {
    let firstPlateSeen = false;
    let numPlates = 0;
    const extraBigPlateWidth = 'w-6'
    const bigPlateWidth = props.isKg ? 'w-4' : 'w-5'
    const mediumPlateWidth = props.isKg ? 'w-3' : 'w-4'
    const littlePlateWidth = 'w-2'

    const renderPlates = (count: number, classes: string) => {
        let plates = []
        for (let i = 0; i < count; i++) {
            const borderl = firstPlateSeen ? (i == 0 ? '' : 'border-l') : 'border-l-2'
            const borderr = i == count - 1 ? 'border-r-2' : 'border-r';
            plates.push(
                <div key={i} className={`${classes} rounded-sm border-solid border-black border-t-2 border-b-2 ${borderl} ${borderr}`}></div>
            )
            if (!firstPlateSeen) {
                firstPlateSeen = true
            }
            numPlates += 1
        }
        return (
            <div className={`flex flex-col justify-center h-48`}>
                <div className="flex flex-row justify-start">{plates}</div>
            </div>
        )
    }
    const renderFiftyFives = () => {
        return renderPlates(props.fiftyfives, `h-48 ${props.isKg ? '' : plateToColorMap['lbs']['fiftyfives']} ${extraBigPlateWidth}`)
    }
    const renderFortyFives = () => {
        return renderPlates(props.fortyfives, `h-48 ${props.isKg ? '' : plateToColorMap['lbs']['fourtyfives']} ${bigPlateWidth}`)
    }
    const renderThirtyFives = () => {
        return renderPlates(props.thirtyfives, `h-40 ${props.isKg ? '' : plateToColorMap['lbs']['thirtyfives']} ${bigPlateWidth}`)
    }
    const renderTwentyFives = () => {
        return renderPlates(props.twentyfives, `${props.isKg ? `h-48 ${plateToColorMap['kg']['twentyfives']}` : `h-36 ${plateToColorMap['lbs']['twentyfives']}`} ${bigPlateWidth}`)
    }
    const renderTwenties = () => {
        return renderPlates(props.twenties, `h-48 ${props.isKg ? plateToColorMap['kg']['twenties'] : ''} ${mediumPlateWidth}`)
    }
    const renderFifteens = () => {
        return renderPlates(props.fifteens, `h-40 ${props.isKg ? plateToColorMap['kg']['fifteens'] : ''} ${mediumPlateWidth}`)
    }
    const renderTens = () => {
        return renderPlates(props.tens, `${props.isKg ? `h-32 ${plateToColorMap['kg']['tens']}` : `h-28 ${plateToColorMap['lbs']['tens']}`} ${littlePlateWidth}`)
    }
    const renderFives = () => {
        return renderPlates(props.fives, `h-24 ${props.isKg ? plateToColorMap['kg']['fives'] : plateToColorMap['lbs']['fives']} ${littlePlateWidth}`)
    }
    const renderTwoPointFives = () => {
        return renderPlates(props.twopointfives, `h-20 ${props.isKg ? plateToColorMap['kg']['twopointfives'] : plateToColorMap['lbs']['twopointfives']} ${littlePlateWidth}`)
    }
    const renderOnePointFives = () => {
        return renderPlates(props.onepointtwofives, `h-16 ${props.isKg ? plateToColorMap['kg']['onepointtwofives'] : plateToColorMap['lbs']['onepointtwofives']} ${littlePlateWidth}`)
    }
    const renderCollar = () => {
        if (!props.collar) {
            return
        }
        return renderPlates(1, 'h-11 w-5 bg-zinc-400')
    }
    const getTailLength = () => {
        if (numPlates > 8) {
            return 'w-6'
        }
        if (numPlates > 6) {
            return 'w-9'
        }
        if (numPlates > 3) {
            return 'w-16'
        }
        if (numPlates > 0) {
            return 'w-24'
        }
        return 'w-28'
    }
    return (
        <div className="w-full flex flex-row justify-center">
            <div id="diagram-container" className="w-full pt-6 md:pl-6 flex flex-row justify-center">
                <div id="barbell" className="flex flex-row justify-start">
                    <div id="bar-container" className="flex flex-col justify-center w-16">
                        <div id="bar" className="h-4 bg-slate-400 w-16 border-solid border-black border-t-2 border-b-2"></div>
                    </div>
                    <div id="bar-end-container" className="flex flex-col justify-center w-1">
                        <div id="bar-end" className="h-7 bg-slate-400 w-1 border-solid border-black border-t-2 border-b-2 border-l-2"></div>
                    </div>
                    {renderFiftyFives()}
                    {renderFortyFives()}
                    {renderThirtyFives()}
                    {renderTwentyFives()}
                    {renderTwenties()}
                    {renderFifteens()}
                    {renderTens()}
                    {renderFives()}
                    {renderTwoPointFives()}
                    {renderOnePointFives()}
                    {renderCollar()}
                    <div id="bar-tail-container" className="flex flex-col justify-center w-16">
                        <div id="bar-tail" className={`h-6 bg-slate-400 ${getTailLength()} border-solid border-black border-t-2 border-b-2 border-r-2`}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}