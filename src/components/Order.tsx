import { FormControl, Select, MenuItem, Button } from "@mui/material";
import {
  Grid,
  InputLabel,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/material";
import { TextMaskCustom } from "../utils/fieldMask";
import ConfirmingDialog from "./ConfirmingDialog";
import React from "react";
import { useAppSelector } from "../store/hooks/redux";

export default function Order() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const handleClose = () => {
    setOpen(false);
    setName("");
    setPhone("");
  };
  const condition = (name: string, phone: string): boolean => {
    if (name && phone.length === 17) return false;
    return true;
  };

  const { totalCost } = useAppSelector((state) => state.addonReducer);

  return (
    <>
      <Grid className="order">
        <Grid
          sx={{
            position: "relative",
            textAlign: "center",
          }}
        >
          <Grid className="text">Заказ</Grid>
          <FormControl fullWidth>
            <InputLabel id="select">Товар</InputLabel>
            <Select id="simple-select" labelId="Товар" label="Товар">
              <MenuItem value={10}>34 литра с ТЭНом</MenuItem>
            </Select>
          </FormControl>
          <Grid className="test">Итого: {totalCost}</Grid>
        </Grid>
        <Stack direction={"column"}>
          <TextField
            helperText={name ? "" : "Введите имя"}
            label="Имя"
            value={name}
            error={!name}
            onChange={(event) => {
              setName(event.target.value as string);
            }}
          />
          <TextField
            label="Номер телефона"
            name="textmask"
            id="formatted-text-mask-input"
            helperText={phone ? "" : "Введите номер телефона"}
            InputProps={{
              inputComponent: TextMaskCustom as any,
            }}
            value={phone}
            error={phone.length !== 17}
            onChange={(event) => {
              setPhone(event.target.value as string);
            }}
          />
        </Stack>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={"Покупка в рассрочку"}
          />
        </FormGroup>
        <Grid
          sx={{
            position: "relative",
            textAlign: "center",
          }}
        >
          <Button
            disabled={condition(name, phone)}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Typography>Заказать</Typography>
          </Button>
        </Grid>
      </Grid>
      {open && <ConfirmingDialog open={open} onClose={handleClose} />}
    </>
  );
}
