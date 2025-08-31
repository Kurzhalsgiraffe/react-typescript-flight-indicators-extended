import React from "react";
import Instrument, { BoxStyle } from "./Instrument";
import type { InstrumentProperties } from "./Instrument";
import {
    FiCircle,
    FiNeedle,
    AltitudePressure,
    AltitudeTicks,
    FiNeedleSmall,
    FiNeedleSmallest,
    AltitudeTicksM,
} from "./generated";
import { AltimeterUnits } from "..";

type AltimeterProperties = InstrumentProperties & {
    altitude?: number;
    pressure?: number; // hPa (Hectopascals)
    unit: AltimeterUnits;
};

function Altimeter(props: AltimeterProperties) {
    const altitude = props.altitude ?? 0;
    const needle = 90 + ((altitude % 1000) * 360) / 1000;
    const needleSmall = (altitude / 10000) * 360;
    const needleSmallest = (altitude / 100000) * 360;

    const pressure = 2 * (props.pressure ?? 1013.25) - 1980;

    return (
        <Instrument {...props}>
            <div
                className="pressure box"
                style={{ ...BoxStyle, transform: `rotate(${pressure}deg)` }}
            >
                <AltitudePressure className="box" style={BoxStyle} />
            </div>
            {props.unit == AltimeterUnits.FEET_PER_MINUTE && (
                <AltitudeTicks className="box" style={BoxStyle} />
            )}
            {props.unit == AltimeterUnits.METERS_PER_SECOND && (
                <AltitudeTicksM className="box" style={BoxStyle} />
            )}

            <div
                className="needleSmallest box"
                style={{
                    ...BoxStyle,
                    transform: `rotate(${needleSmallest}deg)`,
                }}
            >
                <FiNeedleSmallest className="box" style={BoxStyle} />
            </div>
            <div
                className="needleSmall box"
                style={{ ...BoxStyle, transform: `rotate(${needleSmall}deg)` }}
            >
                <FiNeedleSmall className="box" style={BoxStyle} />
            </div>
            <div
                className="needle box"
                style={{ ...BoxStyle, transform: `rotate(${needle}deg)` }}
            >
                <FiNeedle className="box" style={BoxStyle} />
            </div>
            <div className="mechanics box" style={BoxStyle}>
                <FiCircle className="box" style={BoxStyle} />
            </div>
        </Instrument>
    );
}

export default React.memo(Altimeter);
