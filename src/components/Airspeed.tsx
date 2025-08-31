import React from "react";
import Instrument, { BoxStyle } from "./Instrument";
import type { InstrumentProperties } from "./Instrument";
import {
    FiCircle,
    FiNeedle,
    SpeedMechanicsKnots,
    SpeedMechanicsMs,
    SpeedMechanicsKms,
} from "./generated";
import { SpeedUnits } from "..";

const constants = {
    airspeed_bound_l: 0,
    airspeed_bound_h: 160,
};

type AirspeedProperties = InstrumentProperties & {
    speed?: number;
    unit: SpeedUnits;
};

function Airspeed(props: AirspeedProperties) {
    let speed = props.speed ?? 0;

    if (props.unit == SpeedUnits.METERS_PER_SECOND) speed = speed * 2;
    if (props.unit == SpeedUnits.KILOMETERS_PER_SECOND) speed = speed / 2;

    if (speed > constants.airspeed_bound_h) speed = constants.airspeed_bound_h;
    else if (speed < constants.airspeed_bound_l)
        speed = constants.airspeed_bound_l;

    speed = 90 + speed * 2;

    return (
        <Instrument {...props}>
            {props.unit == SpeedUnits.KNOTS && (
                <SpeedMechanicsKnots className="box" style={BoxStyle} />
            )}
            {props.unit == SpeedUnits.METERS_PER_SECOND && (
                <SpeedMechanicsMs className="box" style={BoxStyle} />
            )}
            {props.unit == SpeedUnits.KILOMETERS_PER_SECOND && (
                <SpeedMechanicsKms className="box" style={BoxStyle} />
            )}

            <div
                className="speed box"
                style={{ ...BoxStyle, transform: `rotate(${speed}deg)` }}
            >
                <FiNeedle className="box" style={BoxStyle} />
            </div>
            <div className="mechanics box" style={BoxStyle}>
                <FiCircle className="box" style={BoxStyle} />
            </div>
        </Instrument>
    );
}

export default React.memo(Airspeed);
