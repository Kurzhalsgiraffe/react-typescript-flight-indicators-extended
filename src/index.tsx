import HeadingIndicator from "./components/HeadingIndicator";
import Variometer from "./components/Variometer";
import TurnCoordinator from "./components/TurnCoordinator";
import Airspeed from "./components/Airspeed";
import Altimeter from "./components/Altimeter";
import AttitudeIndicator from "./components/AttitudeIndicator";

enum AirspeedUnits {
    KNOTS,
    METERS_PER_SECOND,
    KILOMETERS_PER_SECOND,
}

enum AltimeterUnits {
    FEET_PER_MINUTE,
    METERS_PER_SECOND,
}

enum VariometerUnits {
    FEET_PER_MINUTE,
    METERS_PER_SECOND,
    KILOMETERS_PER_MINUTE,
}

export {
    HeadingIndicator,
    Variometer,
    TurnCoordinator,
    Airspeed,
    Altimeter,
    AttitudeIndicator,
    AirspeedUnits,
    AltimeterUnits,
    VariometerUnits,
};
