// Imports
import React from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MoneyIcon from "@mui/icons-material/Paid";

/**
 * Button that gives options for donations
 */
export default function SupportButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Navigate to stripe page
  const handleSupport = (amount: "5" | "25" | "50" | "100") => {
    const stripeUrl = {
      "5": import.meta.env.VITE_STRIPE_5,
      "25": import.meta.env.VITE_STRIPE_25,
      "50": import.meta.env.VITE_STRIPE_50,
      "100": import.meta.env.VITE_STRIPE_100,
    };
    if (stripeUrl[amount]) {
      window.open(stripeUrl[amount], "_blank");
    }
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={<MoneyIcon />}
        sx={{ textTransform: "none" }}
      >
        Support
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleSupport("5")}>Donate $5</MenuItem>
        <MenuItem onClick={() => handleSupport("25")}>Donate $25</MenuItem>
        <MenuItem onClick={() => handleSupport("50")}>Donate $50</MenuItem>
        <MenuItem onClick={() => handleSupport("100")}>Donate $100</MenuItem>
      </Menu>
    </>
  );
}
