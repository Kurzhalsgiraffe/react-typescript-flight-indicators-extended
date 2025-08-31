import HeadingIndicator from "./components/HeadingIndicator";
import Variometer from "./components/Variometer";
import TurnCoordinator from "./components/TurnCoordinator";
import Airspeed from "./components/Airspeed";
import Altimeter from "./components/Altimeter";
import AttitudeIndicator from "./components/AttitudeIndicator";

enum SpeedUnits {
    METERS_PER_SECOND,
    KILOMETERS_PER_SECOND,
    KILOMETERS_PER_MINUTE,
    FEET_PER_MINUTE,
    KNOTS,
}

export {
    HeadingIndicator,
    Variometer,
    TurnCoordinator,
    Airspeed,
    Altimeter,
    AttitudeIndicator,
    SpeedUnits,
};
