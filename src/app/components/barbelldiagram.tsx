
export interface BarbellDiagramProps {
    twentyfives: number,
    twenties: number,
    fifteens: number,
    tens: number,
    fives: number,
    twopointfives: number,
    onepointtwofives: number,
    collar: boolean
}

export default function BarbellDiagram(props: BarbellDiagramProps) {
    // var props: BarbellDiagramProps = {
    //     twentyfives: 3,
    //     twenties: 1,
    //     fifteens: 1,
    //     tens: 1,
    //     fives: 1,
    //     twopointfives: 1,
    //     onepointtwofives: 1
    // }
    let firstPlateSeen = false;
    let numPlates = 0;
    const fullHeight = 48;
    const maxWidth = 4;

    const renderPlates = (count: number, classes: string) => {
        let plates = []
        for(let i=0; i<count;i++) {
            plates.push(
                <div key={i} className={`${classes} rounded-sm border-solid border-black border-t-2 border-b-2 border-r-2 ${firstPlateSeen ? '' : 'border-l-2'}`}></div>
            )
            if (!firstPlateSeen) {
                firstPlateSeen = true
            }
            numPlates += 1
        }
        return (
            <div className={`flex flex-col justify-center h-${fullHeight}`}>
                <div className="flex flex-row justify-start">{plates}</div>
            </div>
        )
    }
    const renderTwentyFives = () => {
        return renderPlates(props.twentyfives, `h-${fullHeight} bg-red-600 w-${maxWidth}`)
    }
    const renderTwenties = () => {
        return renderPlates(props.twenties, `h-${fullHeight} bg-blue-600 w-${maxWidth-1}`)
    }
    const renderFifteens = () => {
        return renderPlates(props.fifteens, `h-40 bg-yellow-500 w-${maxWidth-1}`)
    }
    const renderTens = () => {
        return renderPlates(props.tens, `h-32 bg-green-500 w-${maxWidth-1}`)
    }
    const renderFives = () => {
        return renderPlates(props.fives, `h-24 bg-white w-${maxWidth-1}`)
    }
    const renderTwoPointFives = () => {
        return renderPlates(props.twopointfives, `h-20 bg-black w-${maxWidth-2}`)
    }
    const renderOnePointFives = () => {
        return renderPlates(props.onepointtwofives, `h-16 bg-zinc-300 w-${maxWidth-2}`)
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
        return 'w-20'
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