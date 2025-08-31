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
import { VariometerUnits } from "..";

const constants = {
    vario_bound: 1.95,
};

type VariometerProperties = InstrumentProperties & {
    vario?: number;
    unit: VariometerUnits;
};

function Variometer(props: VariometerProperties) {
    let vario = (props.vario ?? 0) / 1000;

    if (props.unit == VariometerUnits.METERS_PER_SECOND) vario = vario * 200;
    if (props.unit == VariometerUnits.KILOMETERS_PER_MINUTE) vario = vario * 50;

    if (vario > constants.vario_bound) vario = constants.vario_bound;
    else if (vario < -constants.vario_bound) vario = -constants.vario_bound;

    vario = vario * 90;

    return (
        <Instrument {...props}>
            {props.unit == VariometerUnits.FEET_PER_MINUTE && (
                <VerticalMechanics className="box" style={BoxStyle} />
            )}
            {props.unit == VariometerUnits.METERS_PER_SECOND && (
                <VerticalMechanicsMs className="box" style={BoxStyle} />
            )}
            {props.unit == VariometerUnits.KILOMETERS_PER_MINUTE && (
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
