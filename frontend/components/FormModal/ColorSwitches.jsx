import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import SelectCarType from "./UI/SelectCarType";

const YellowSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#FBA403",
    "&:hover": {
      backgroundColor: alpha("#FBA403", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#654201",
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function ColorSwitches() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div style={{ alignItems: "center", marginTop: "2vh", gap: "50vh"}}>
      <div style={{ display: "flex", gap: "110vh"}}>
      <p style={{ marginRight: 10, color: "white", fontFamily: "Roboto", fontWeight: "400", whiteSpace: "nowrap" }}>I drive my own car</p>
      <YellowSwitch {...label} checked={isSwitchOn} onChange={handleSwitchChange} />
      </div>
      {isSwitchOn && (
        <div>
          <SelectCarType />
        </div>
      )}
    </div>
  );
}
