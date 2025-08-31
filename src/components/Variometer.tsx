import React from "react";
import Instrument, { BoxStyle } from "./Instrument";
import type { InstrumentProperties } from "./Instrument";
import {
    FiCircle,
    VerticalMechanics,
    FiNeedle,
    SpeedMechanicsMs,
    VerticalMechanicsKmm,
    VerticalMechanicsMs,
} from "./generated";
import { SpeedUnits } from "..";

const constants = {
    vario_bound: 1.95,
};

type VariometerProperties = InstrumentProperties & {
    vario?: number;
    unit: SpeedUnits;
};

function Variometer(props: VariometerProperties) {
    let vario = (props.vario ?? 0) / 1000;

    if (props.unit == SpeedUnits.METERS_PER_SECOND) vario = vario * 200;
    if (props.unit == SpeedUnits.KILOMETERS_PER_MINUTE) vario = vario * 50;

    if (vario > constants.vario_bound) vario = constants.vario_bound;
    else if (vario < -constants.vario_bound) vario = -constants.vario_bound;

    vario = vario * 90;

    return (
        <Instrument {...props}>
            {props.unit == SpeedUnits.FEET_PER_MINUTE && (
                <VerticalMechanics className="box" style={BoxStyle} />
            )}
            {props.unit == SpeedUnits.METERS_PER_SECOND && (
                <VerticalMechanicsMs className="box" style={BoxStyle} />
            )}
            {props.unit == SpeedUnits.KILOMETERS_PER_MINUTE && (
                <VerticalMechanicsKmm className="box" style={BoxStyle} />
            )}

            <div
                className="vario box"
                style={{ ...BoxStyle, transform: `rotate(${vario}deg)` }}
            >
                <FiNeedle className="box" style={BoxStyle} />
            </div>
            <div className="mechanics box" style={BoxStyle}>
                <FiCircle className="box" style={BoxStyle} />
            </div>
        </Instrument>
    );
}

export default React.memo(Variometer);
